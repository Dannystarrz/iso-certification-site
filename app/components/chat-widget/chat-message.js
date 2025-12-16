"use client"

export default function ChatMessage({ message, isBot }) {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3 animate-slide-in`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isBot ? "bg-blue-100 text-gray-900 rounded-bl-none" : "bg-[#0E2D39] text-white rounded-br-none"
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </div>
  )
}
