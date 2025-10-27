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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section
      className="w-full relative h-screen bg-cover bg-center bg-fixed bg-[url('/Certidoc-hero.jpg')] flex items-center justify-between px-6"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-between gap-8">
        {/* Left Form */}
        <div className="w-full lg:w-1/3 bg-white/90 rounded-lg shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">ENQUIRE NOW</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 h-12 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 h-12 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            />
            <textarea
              name="message"
              placeholder="Please enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
            ></textarea>
            <button type="submit" className="w-full btn-primary">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-right">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">ISO CERTIFICATION IN NIGERIA</h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            For a hassle free certification process contact us today. Our approach made simpler, faster, and affordable!
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}
