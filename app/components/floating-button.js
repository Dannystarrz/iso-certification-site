"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FloatingButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-4 right-4 bg-[#0E2D39] text-[#89C45A] py-2 px-4 rounded-full shadow-lg hover:bg-[#89C45A] hover:text-black transition-colors flex items-center gap-2 z-40"
      aria-label="Request a quote"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline font-semibold">Request Quote</span>
    </Link>
  )
}
