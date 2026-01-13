import { NextResponse } from "next/server"

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const body = await request.json()

    // Extract fields
    const { name, email, phone, company, service, message, honeypot } = body

    // Honeypot spam protection - if filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 })
    }

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 })
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate minimum message length
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long" }, { status: 400 })
    }

    // Send email using Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "support@certidocsolutions.com"

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Service of Interest:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}
Service of Interest: ${service}

Message:
${message}
    `

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.SENDER_EMAIL || "onboarding@resend.dev",
        to: RECIPIENT_EMAIL,
        subject: `New Contact Form: ${service}`,
        html: emailHtml,
        text: emailText,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}

// Return 405 for non-POST requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
