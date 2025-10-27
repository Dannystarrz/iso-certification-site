"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch with our team to discuss your certification needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-[#e4f1da] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-[#427869]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+234 813 529 3329</p>
              <p className="text-gray-600">+234 703 128 7726</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-[#e4f1da] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-[#427869]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@topcertifier.com</p>
              <p className="text-gray-600">support@topcertifier.com</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="bg-[#e4f1da] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-[#427869]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Citscape Mall Former</p>
              <p className="text-gray-600">Sharif Plaza Suite CJ420</p>
              <p className="text-gray-600">Wuse II, Abuja</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="bg-[#e4f1da] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-[#427869]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon - Thu: 8AM - 8PM</p>
              <p className="text-gray-600">Fri - Sun: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">Message Sent Successfully!</p>
                <p>Thank you for contacting us. We will get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                >
                  <option value="">Select a service</option>
                  <option value="iso-9001">ISO 9001 - Quality Management</option>
                  <option value="iso-14001">ISO 14001 - Environmental Management</option>
                  <option value="iso-45001">ISO 45001 - Occupational Health & Safety</option>
                  <option value="iso-22000">ISO 22000 - Food Safety Management</option>
                  <option value="iso-27001">ISO 27001 - Information Security</option>
                  <option value="iso-22301">ISO 22301 - Business Continuity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                  placeholder="Tell us about your certification needs..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="TopCertifier Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5234567890123!2d3.1899!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104b0b0b0b0b0b0b%3A0x0!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#427869] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Reach out to us via phone, email, or the contact form above.
          </p>
          <Link href="tel:+2348135293329" className="btn-primary">
            CALL US NOW
          </Link>
        </div>
      </section>
    </main>
  )
}
