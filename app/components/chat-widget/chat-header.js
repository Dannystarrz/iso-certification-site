"use client"

import { X, MessageCircle } from "lucide-react"

export default function ChatHeader({ onClose, unreadCount }) {
  return (
    <div className="bg-[#89C45A] text-white px-4 py-3 flex items-center justify-between rounded-t-lg shadow-md">
      <div className="flex items-center gap-2">
        <MessageCircle size={20} />
        <div>
          <h3 className="font-semibold">CertiBot</h3>
          <p className="text-xs opacity-90">Always here to help</p>
        </div>
      </div>
      <button onClick={onClose} aria-label="Close chat" className="hover:bg-[#0E2D39] p-1 rounded transition-colors">
        <X size={20} />
      </button>
    </div>
  )
}
