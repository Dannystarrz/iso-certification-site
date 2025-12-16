"use client"

export default function QuickReplies({ replies, onReplyClick, isLoading }) {
  if (!replies || replies.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {replies.map((reply, idx) => (
        <button
          key={idx}
          onClick={() => onReplyClick(reply)}
          disabled={isLoading}
          className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs px-3 py-1.5 rounded-full border border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {reply}
        </button>
      ))}
    </div>
  )
}
