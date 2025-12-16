"use client"

import { useEffect } from "react"
import ChatHeader from "./chat-header"
import MessageList from "./message-list"
import ChatComposer from "./chat-composer"

export default function ChatModal({
  isOpen,
  onClose,
  messages,
  quickReplies,
  isLoading,
  onSendMessage,
  onQuickReplyClick,
  unreadCount,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
        className="fixed inset-0 md:bottom-6 md:right-6 md:inset-auto md:max-w-sm md:h-[70vh] md:rounded-lg z-50 flex flex-col bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <ChatHeader onClose={onClose} unreadCount={unreadCount} />
        <MessageList
          messages={messages}
          quickReplies={quickReplies}
          isLoading={isLoading}
          onQuickReplyClick={onQuickReplyClick}
        />
        <ChatComposer onSendMessage={onSendMessage} isLoading={isLoading} />
      </div>
    </>
  )
}
