"use client"

import { useEffect, useRef } from "react"
import ChatMessage from "./chat-message"
import QuickReplies from "./quick-replies"

export default function MessageList({ messages, quickReplies, isLoading, onQuickReplyClick }) {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-center">
          <div>
            <div className="text-4xl mb-2">💭</div>
            <p className="text-gray-500 text-sm">Start a conversation!</p>
          </div>
        </div>
      ) : (
        <>
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg} isBot={msg.sender === "bot"} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-blue-100 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {quickReplies && quickReplies.length > 0 && !isLoading && (
            <QuickReplies replies={quickReplies} onReplyClick={onQuickReplyClick} />
          )}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  )
}
