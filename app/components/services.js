import Link from "next/link"

export default function Services() {
  const services = [
    { id: "iso-9001", name: "ISO 9001", description: "Quality Management System" },
    { id: "iso-14001", name: "ISO 14001", description: "Environmental Management" },
    { id: "iso-45001", name: "ISO 45001", description: "Occupational Health & Safety" },
    { id: "iso-22000", name: "ISO 22000", description: "Food Safety Management" },
    { id: "iso-27001", name: "ISO 27001", description: "Information Security" },
    { id: "iso-22301", name: "ISO 22301", description: "Business Continuity" },
  ]

  return (
    <section className="section bg-white">
      <div className="w-full px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 hover:border-[#427869]"
            >
              <h3 className="text-2xl font-bold text-[#427869] mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4 text-[#427869] font-semibold">Learn More →</div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="bg-[#0E2D39] px-6 py-3 text-white font-semibold rounded hover:bg-[#427869] transition-colors">
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}
