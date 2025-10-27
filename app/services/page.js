import Link from "next/link"

export const metadata = {
  title: "ISO Certification Services | TopCertifier Nigeria",
  description:
    "Comprehensive ISO certification services including ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, and more.",
  keywords: "ISO services, ISO certification, ISO consultants Nigeria",
}

const services = [
  {
    id: "iso-9001",
    name: "ISO 9001",
    subtitle: "Quality Management System",
    description:
      "Establish and maintain a quality management system that ensures consistent product and service quality.",
    benefits: [
      "Improved product and service quality",
      "Enhanced customer satisfaction",
      "Increased operational efficiency",
      "Better risk management",
      "Competitive advantage in the market",
    ],
  },
  {
    id: "iso-14001",
    name: "ISO 14001",
    subtitle: "Environmental Management System",
    description: "Implement environmental management practices that reduce your organization's environmental impact.",
    benefits: [
      "Reduced environmental impact",
      "Cost savings through resource efficiency",
      "Enhanced brand reputation",
      "Regulatory compliance",
      "Improved stakeholder relations",
    ],
  },
  {
    id: "iso-45001",
    name: "ISO 45001",
    subtitle: "Occupational Health & Safety Management",
    description:
      "Create a safe and healthy workplace by implementing comprehensive occupational health and safety standards.",
    benefits: [
      "Reduced workplace accidents and injuries",
      "Improved employee morale and productivity",
      "Lower insurance costs",
      "Legal compliance",
      "Enhanced company reputation",
    ],
  },
  {
    id: "iso-22000",
    name: "ISO 22000",
    subtitle: "Food Safety Management System",
    description: "Ensure food safety throughout your supply chain with a comprehensive food safety management system.",
    benefits: [
      "Enhanced food safety",
      "Consumer confidence and trust",
      "Regulatory compliance",
      "Reduced food safety incidents",
      "Market access expansion",
    ],
  },
  {
    id: "iso-27001",
    name: "ISO 27001",
    subtitle: "Information Security Management System",
    description:
      "Protect your organization's sensitive information with a robust information security management system.",
    benefits: [
      "Enhanced data security",
      "Protection against cyber threats",
      "Regulatory compliance",
      "Customer trust and confidence",
      "Reduced security incidents",
    ],
  },
  {
    id: "iso-22301",
    name: "ISO 22301",
    subtitle: "Business Continuity Management System",
    description:
      "Ensure business continuity and resilience with a comprehensive business continuity management system.",
    benefits: [
      "Improved business resilience",
      "Reduced downtime and losses",
      "Enhanced stakeholder confidence",
      "Regulatory compliance",
      "Competitive advantage",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Our ISO Certification Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive ISO certification solutions tailored to your organization's needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="bg-gray-50 p-8 rounded-lg group hover:shadow-xl transition-all border border-gray-200 hover:border-[#427869] hover:bg-[#427869]"
              >
                <h3 className="text-3xl font-bold text-[#427869] group-hover:text-white mb-2">{service.name}</h3>
                <p className="text-[#89C45A] font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-700 group-hover:text-white mb-6">{service.description}</p>
                <div className="text-[#427869] group-hover:text-white font-semibold flex items-center gap-2">
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#427869]">
        <div className="container text-center mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Certified?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss which ISO certification is right for your organization.
          </p>
          <Link href="/contact" className="btn-primary">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  )
}
