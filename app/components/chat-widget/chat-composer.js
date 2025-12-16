"use client"

import { useState } from "react"
import { Send, Paperclip, Smile } from "lucide-react"

export default function ChatComposer({ onSendMessage, isLoading }) {
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-gray-200 p-3 bg-white rounded-b-lg">
      <div className="flex gap-2 items-end">
        <button
          aria-label="Attach file"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          disabled={isLoading}
        >
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          disabled={isLoading}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          aria-label="Message input"
        />
        <button
          aria-label="Send emoji"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          disabled={isLoading}
        >
          <Smile size={20} />
        </button>
        <button
          onClick={handleSend}
          disabled={isLoading || !message.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}
