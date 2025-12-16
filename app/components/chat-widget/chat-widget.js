"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import ChatModal from "./chat-modal"
import PreChatForm from "./pre-chat-form"
import ChatService from "../../../lib/chat-service"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState([])
  const [quickReplies, setQuickReplies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showPreChat, setShowPreChat] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [unreadCount, setUnreadCount] = useState(0)
  const [chatService] = useState(() => new ChatService())

  useEffect(() => {
    // Load messages from storage on mount
    const stored = chatService.getMessages()
    setMessages(stored)
    setShowPreChat(stored.length === 0)
    setIsMinimized(true)
  }, [chatService])

  const handleOpenChat = () => {
    setIsMinimized(false)
    setIsOpen(true)
    setUnreadCount(0)
  }

  const handleCloseChat = () => {
    setIsOpen(false)
    setIsMinimized(true)
  }

  const handlePreChatSubmit = (info) => {
    setUserInfo(info)
    setShowPreChat(false)

    const greetingMsg = {
      sender: "bot",
      text: "Hey! I'm CertiBot. How can I help today? Choose a topic or type your question.",
      timestamp: new Date().toISOString(),
    }

    setMessages([greetingMsg])
    chatService.addMessage(greetingMsg)
    setQuickReplies(["Get a Quote", "Support", "Integration", "Timeline"])
  }

  const handlePreChatSkip = () => {
    setShowPreChat(false)

    const greetingMsg = {
      sender: "bot",
      text: "Hey! I'm CertiBot. How can I help today? Choose a topic or type your question.",
      timestamp: new Date().toISOString(),
    }

    setMessages([greetingMsg])
    chatService.addMessage(greetingMsg)
    setQuickReplies(["Get a Quote", "Support", "Integration", "Timeline"])
  }

  const handleSendMessage = async (text) => {
    // Add user message
    const userMsg = {
      sender: "user",
      text,
      timestamp: new Date().toISOString(),
    }

    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    chatService.addMessage(userMsg)
    setIsLoading(true)

    try {
      // Get bot response
      const botResponse = await chatService.generateBotResponse(text)

      const botMsg = {
        sender: "bot",
        text: botResponse.text,
        timestamp: botResponse.timestamp,
      }

      const finalMessages = [...updatedMessages, botMsg]
      setMessages(finalMessages)
      chatService.addMessage(botMsg)
      setQuickReplies(botResponse.quickReplies || [])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickReplyClick = (reply) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Floating button */}
      {isMinimized && (
        <button
          onClick={handleOpenChat}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 bg-[#89C45A] text-black p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all transform active:scale-95 z-40 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Chat modal */}
      {showPreChat && isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 md:bottom-6 md:right-6 md:inset-auto md:max-w-sm md:h-auto md:rounded-lg z-50 flex flex-col bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="flex justify-between items-center bg-[#89C45A] text-white px-4 py-3">
            <h2 id="chat-title" className="font-semibold">
              CertiBot
            </h2>
            <button
              onClick={handleCloseChat}
              aria-label="Close chat"
              className="hover:bg-[#0E2D39] p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <PreChatForm onSubmit={handlePreChatSubmit} onSkip={handlePreChatSkip} />
        </div>
      ) : (
        <ChatModal
          isOpen={isOpen}
          onClose={handleCloseChat}
          messages={messages}
          quickReplies={quickReplies}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
          onQuickReplyClick={handleQuickReplyClick}
          unreadCount={unreadCount}
        />
      )}
    </>
  )
}
