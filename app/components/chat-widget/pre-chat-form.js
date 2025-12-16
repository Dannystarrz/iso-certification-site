"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function PreChatForm({ onSubmit, onSkip }) {
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, topic })
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h4 className="text-sm font-semibold mb-2">Welcome!</h4>
        <p className="text-xs text-gray-600 mb-4">Help us serve you better by sharing a bit of info.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Email (optional)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">What can we help with?</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select a topic</option>
            <option value="Quote">Get a Quote</option>
            <option value="General">General Question</option>
            <option value="Support">Support</option>
            <option value="Integration">Integration</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          Start Chat <ChevronRight size={16} />
        </button>
      </form>

      <button
        onClick={onSkip}
        className="w-full text-gray-600 hover:text-gray-900 text-xs font-medium transition-colors"
      >
        Skip for now
      </button>
    </div>
  )
}
