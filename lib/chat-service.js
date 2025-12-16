// Initialize UUID function (simple implementation if uuid not available)
const generateUUID = () => {
  if (typeof window === "undefined") return ""
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const STORAGE_KEY = "certidocs_chat_v1"

// Canned response flows
const RESPONSE_FLOWS = {
  greeting: {
    keywords: ["hi", "hello", "hey", "start"],
    response: "Hey! I'm CertiBot. How can I help today? Choose a topic or type your question.",
    quickReplies: ["Get a Quote", "Support", "Integration", "Timeline"],
  },
  price: {
    keywords: ["price", "cost", "quote", "pricing", "how much"],
    response:
      "Great question! Pricing depends on your specific service and complexity. What service are you interested in?",
    quickReplies: ["ISO 9001", "ISO 14001", "ISO 45001", "Other"],
  },
  quote: {
    keywords: ["quote", "request quote", "get quote"],
    response: "Perfect! I'd love to help you get a quote. What service are you looking for, and what's your industry?",
    quickReplies: ["Manufacturing", "Healthcare", "Tech", "Other"],
  },
  timeline: {
    keywords: ["timeline", "how long", "turnaround", "duration", "days"],
    response:
      "Typical turnaround is 3–10 business days depending on complexity. For priority service, we offer expedited options.",
    quickReplies: ["Standard", "Express", "Tell me more"],
  },
  integration: {
    keywords: ["integrate", "integration", "api", "system", "connect"],
    response: "We can integrate with your LMS or payment gateway. Which system are you using?",
    quickReplies: ["Stripe", "Moodle", "Custom", "Other"],
  },
  support: {
    keywords: ["help", "support", "issue", "problem", "error"],
    response: "I'm here to help! Can you tell me more about what you need assistance with?",
    quickReplies: ["Technical Issue", "Documentation", "Account", "Other"],
  },
  demo: {
    keywords: ["demo", "see", "show", "example", "try"],
    response: "I'd love to show you a demo! Would you like to schedule a call or see a quick walkthrough?",
    quickReplies: ["Schedule Call", "Video Demo", "Screenshots"],
  },
}

const FALLBACK_RESPONSE = {
  response: "Thanks for your message! I didn't quite catch that. Would you like to:",
  quickReplies: ["Get a Quote", "Talk to Support", "Schedule Call"],
}

class ChatService {
  constructor() {
    this.sessionId = this.getOrCreateSessionId()
  }

  getOrCreateSessionId() {
    if (typeof window === "undefined") return ""
    const stored = this.getFromStorage()
    if (stored?.sessionId) {
      return stored.sessionId
    }
    const newId = generateUUID()
    const current = this.getFromStorage() || {}
    this.saveToStorage({ ...current, sessionId: newId })
    return newId
  }

  getFromStorage() {
    if (typeof window === "undefined") return null
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : null
    } catch (e) {
      console.error("[v0] Failed to read from localStorage:", e)
      return null
    }
  }

  saveToStorage(data) {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.error("[v0] Failed to write to localStorage:", e)
    }
  }

  getMessages() {
    const stored = this.getFromStorage()
    return stored?.messages || []
  }

  addMessage(message) {
    const stored = this.getFromStorage() || { messages: [], sessionId: this.sessionId, tickets: [] }
    stored.messages = stored.messages || []
    stored.messages.push(message)
    this.saveToStorage(stored)
  }

  clearChat() {
    if (typeof window === "undefined") return
    const stored = this.getFromStorage() || {}
    this.saveToStorage({ ...stored, messages: [] })
  }

  getMatchedFlow(userMessage) {
    const lowerMessage = userMessage.toLowerCase()

    for (const [key, flow] of Object.entries(RESPONSE_FLOWS)) {
      if (flow.keywords.some((keyword) => lowerMessage.includes(keyword))) {
        return flow
      }
    }

    return null
  }

  async generateBotResponse(userMessage) {
    const flow = this.getMatchedFlow(userMessage)
    const responseData = flow || FALLBACK_RESPONSE

    // Simulate typing delay
    const delay = Math.random() * (1800 - 300) + 300 // 300-1800ms
    await new Promise((resolve) => setTimeout(resolve, delay))

    return {
      text: responseData.response,
      quickReplies: responseData.quickReplies || [],
      timestamp: new Date().toISOString(),
    }
  }

  async createQuoteRequest(userEmail, topic) {
    const stored = this.getFromStorage() || { messages: [], sessionId: this.sessionId, tickets: [] }
    const ticketId = generateUUID()

    const ticket = {
      id: ticketId,
      type: "quote_request",
      email: userEmail,
      topic,
      sessionId: this.sessionId,
      createdAt: new Date().toISOString(),
      status: "sent",
    }

    stored.tickets = stored.tickets || []
    stored.tickets.push(ticket)
    this.saveToStorage(stored)

    return ticket
  }

  getTickets() {
    const stored = this.getFromStorage()
    return stored?.tickets || []
  }

  exportTranscript() {
    const messages = this.getMessages()
    const transcript = messages.map((m) => `[${m.timestamp}] ${m.sender}: ${m.text}`).join("\n")
    return transcript
  }
}

export default ChatService
