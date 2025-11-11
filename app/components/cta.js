import Link from "next/link"

export default function CTA() {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="w-full px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Get our free consultation today!</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our hassle free certification and documentation process has been designed to assist your company to achieve certification in
            just 7 - 30 days of time.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}
