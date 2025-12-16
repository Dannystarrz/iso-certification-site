"use client"

import Link from "next/link"
import { useState } from "react"

export default function Hero() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

   const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          service: "General Enquiry",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="w-full relative h-screen bg-cover bg-center bg-fixed bg-[url('/Certidoc-hero-opt.jpg')] flex items-center justify-between px-6"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-between gap-8">
        {/* Left Form */}
        <div className="w-full lg:w-1/3 bg-white/90 rounded-lg shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">ENQUIRE NOW</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <p className="font-semibold">Error</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            )}
            <input
               type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full h-12 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 h-12 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 h-12 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <textarea
              name="message"
              placeholder="Please enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            ></textarea>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-semibold">Thank you for your inquiry!</p>
                <p className="text-sm">We will contact you soon.</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-right">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">ISO CERTIFICATION ACROSS THE GLOBE</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            For a hassle free certification and documentation process contact us today. Our approach made simpler, faster, and affordable!
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}
