"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { FAQSchema } from "@/components/schema-markup"

export default function FAQClientPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is ISO certification?",
      answer:
        "ISO certification is an independent verification that your organization meets the requirements of an International Organization for Standardization (ISO) standard. It demonstrates your commitment to quality, safety, environmental responsibility, and other important business practices.",
    },
    {
      question: "How long does the certification process take?",
      answer:
        "The timeline varies depending on the ISO standard and your organization's readiness. Typically, the process takes 8-16 weeks from initial assessment to final certification. Our efficient approach often helps organizations achieve certification in 7-30 days.",
    },
    {
      question: "What is the cost of ISO certification?",
      answer:
        "The cost depends on several factors including the ISO standard, organization size, complexity, and current state of readiness. We offer competitive pricing and can provide a customized quote after understanding your specific needs.",
    },
    {
      question: "Do I need to hire external consultants?",
      answer:
        "While it's possible to pursue certification independently, hiring experienced consultants like TopCertifier significantly increases your chances of success and reduces the time required. Our expertise helps you avoid costly mistakes and ensures compliance with all requirements.",
    },
    {
      question: "Which ISO certification should my organization pursue?",
      answer:
        "The right ISO certification depends on your industry, business objectives, and stakeholder requirements. ISO 9001 (Quality) is the most popular, but others like ISO 14001 (Environment), ISO 45001 (Safety), and ISO 27001 (Information Security) may be more relevant for your organization.",
    },
    {
      question: "Is ISO certification mandatory?",
      answer:
        "ISO certification is generally voluntary, but some industries, customers, or contracts may require it. Many organizations pursue certification to improve operations, enhance reputation, and gain competitive advantage.",
    },
    {
      question: "How long is ISO certification valid?",
      answer:
        "ISO certifications are typically valid for 3 years. During this period, you'll undergo surveillance audits (usually annually) to ensure continued compliance. After 3 years, you'll need to undergo a recertification audit.",
    },
    {
      question: "What happens if we fail the certification audit?",
      answer:
        "If non-conformities are found during the audit, you'll have an opportunity to address them. Minor non-conformities can usually be corrected within a specified timeframe. Major non-conformities may require a follow-up audit.",
    },
    {
      question: "Can we maintain certification after achieving it?",
      answer:
        "Yes, maintaining certification requires ongoing commitment to the ISO standard. You'll need to conduct internal audits, management reviews, and address any non-conformities found during surveillance audits.",
    },
    {
      question: "Do you offer training for our staff?",
      answer:
        "Yes, we provide comprehensive training for your staff on ISO requirements, implementation, and maintenance. Training can be customized to different roles and levels within your organization.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main>
      {/* <CHANGE> Added FAQ schema markup */}
      <FAQSchema />

      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200">Find answers to common questions about ISO certification</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#427869] flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-[#427869]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Still Have Questions?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Contact us for personalized answers to your specific questions.
          </p>
          <Link href="/contact" className="btn-primary">
            CONTACT US
          </Link>
        </div>
      </section>
    </main>
  )
}
