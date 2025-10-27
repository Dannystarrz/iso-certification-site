"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/industries", label: "INDUSTRIES" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0e2d39] px-6 shadow-lg">
      <div className="flex items-center justify-between h-20 w-full px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-semibold p-2">
            CTD
          </div>
          <span className="text-white">CertiDocs</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#F5F7FA] transition-colors text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
