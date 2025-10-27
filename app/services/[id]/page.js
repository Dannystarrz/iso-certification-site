import Link from "next/link"

const servicesData = {
  "iso-9001": {
    name: "ISO 9001",
    title: "Quality Management System",
    description:
      "ISO 9001 is the most widely recognized quality management standard in the world. It helps organizations ensure that products and services consistently meet customer and regulatory requirements.",
    overview:
      "ISO 9001:2015 specifies requirements for a quality management system. Organizations use it to demonstrate the ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements, and to enhance customer satisfaction.",
    benefits: [
      "Improved product and service quality",
      "Enhanced customer satisfaction and loyalty",
      "Increased operational efficiency and reduced waste",
      "Better risk management and decision making",
      "Competitive advantage in the market",
      "Improved employee engagement and morale",
      "Regulatory compliance and legal protection",
    ],
    requirements: [
      "Context of the organization",
      "Leadership and commitment",
      "Planning for quality management system",
      "Support (resources, competence, awareness)",
      "Operation (planning and control)",
      "Performance evaluation",
      "Improvement",
    ],
    timeline: "8-12 weeks",
    cost: "Contact for quote",
  },
  "iso-14001": {
    name: "ISO 14001",
    title: "Environmental Management System",
    description:
      "ISO 14001 helps organizations minimize their environmental impact and demonstrate environmental responsibility to stakeholders.",
    overview:
      "ISO 14001:2015 specifies requirements for an environmental management system that an organization can use to enhance its environmental performance. It is designed to help organizations achieve the intended outcomes of their environmental management system.",
    benefits: [
      "Reduced environmental impact and pollution",
      "Cost savings through resource efficiency",
      "Enhanced brand reputation and market position",
      "Regulatory compliance and legal protection",
      "Improved stakeholder and community relations",
      "Competitive advantage in green markets",
      "Better risk management",
    ],
    requirements: [
      "Environmental policy",
      "Planning (aspects, impacts, objectives)",
      "Implementation and operation",
      "Performance evaluation",
      "Management review",
      "Continual improvement",
    ],
    timeline: "10-14 weeks",
    cost: "Contact for quote",
  },
  "iso-45001": {
    name: "ISO 45001",
    title: "Occupational Health & Safety Management",
    description:
      "ISO 45001 helps organizations create a safe and healthy workplace by implementing comprehensive occupational health and safety standards.",
    overview:
      "ISO 45001:2018 specifies requirements for an occupational health and safety (OH&S) management system, and gives guidance for its use, to enable organizations to provide safe and healthful workplaces.",
    benefits: [
      "Reduced workplace accidents and injuries",
      "Improved employee morale and productivity",
      "Lower insurance and workers compensation costs",
      "Legal compliance and regulatory protection",
      "Enhanced company reputation and brand",
      "Better employee retention and recruitment",
      "Reduced absenteeism and lost productivity",
    ],
    requirements: [
      "OH&S policy",
      "Planning (hazard identification, risk assessment)",
      "Implementation and operation",
      "Performance evaluation",
      "Management review",
      "Continual improvement",
    ],
    timeline: "10-14 weeks",
    cost: "Contact for quote",
  },
  "iso-22000": {
    name: "ISO 22000",
    title: "Food Safety Management System",
    description:
      "ISO 22000 ensures food safety throughout your supply chain with a comprehensive food safety management system.",
    overview:
      "ISO 22000:2018 specifies requirements for a food safety management system where an organization in the food chain needs to demonstrate its ability to control food safety hazards.",
    benefits: [
      "Enhanced food safety and quality",
      "Consumer confidence and trust",
      "Regulatory compliance and legal protection",
      "Reduced food safety incidents and recalls",
      "Market access expansion and competitive advantage",
      "Improved supply chain management",
      "Better traceability and transparency",
    ],
    requirements: [
      "Food safety policy",
      "Planning (hazard analysis, control measures)",
      "Implementation and operation",
      "Performance evaluation",
      "Management review",
      "Continual improvement",
    ],
    timeline: "12-16 weeks",
    cost: "Contact for quote",
  },
  "iso-27001": {
    name: "ISO 27001",
    title: "Information Security Management System",
    description:
      "ISO 27001 helps protect your organization's sensitive information with a robust information security management system.",
    overview:
      "ISO 27001:2022 specifies requirements for an information security management system (ISMS). It is designed to help organizations manage the security of assets such as financial information, intellectual property, employee details or information entrusted to it by third parties.",
    benefits: [
      "Enhanced data security and protection",
      "Protection against cyber threats and attacks",
      "Regulatory compliance and legal protection",
      "Customer trust and confidence",
      "Reduced security incidents and breaches",
      "Improved business continuity",
      "Competitive advantage in digital markets",
    ],
    requirements: [
      "Information security policy",
      "Planning (risk assessment, treatment)",
      "Implementation and operation",
      "Performance evaluation",
      "Management review",
      "Continual improvement",
    ],
    timeline: "12-16 weeks",
    cost: "Contact for quote",
  },
  "iso-22301": {
    name: "ISO 22301",
    title: "Business Continuity Management System",
    description:
      "ISO 22301 ensures business continuity and resilience with a comprehensive business continuity management system.",
    overview:
      "ISO 22301:2019 specifies requirements for a business continuity management system (BCMS) to protect against, reduce the likelihood of occurrence, prepare for, respond to, and recover from disruptions.",
    benefits: [
      "Improved business resilience and continuity",
      "Reduced downtime and financial losses",
      "Enhanced stakeholder and investor confidence",
      "Regulatory compliance and legal protection",
      "Competitive advantage and market position",
      "Better risk management and preparedness",
      "Improved reputation and brand value",
    ],
    requirements: [
      "Business continuity policy",
      "Planning (business impact analysis, risk assessment)",
      "Implementation and operation",
      "Performance evaluation",
      "Management review",
      "Continual improvement",
    ],
    timeline: "10-14 weeks",
    cost: "Contact for quote",
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id,
  }))
}

export function generateMetadata({ params }) {
  const service = servicesData[params.id]
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }
  return {
    title: `${service.name} - ${service.title} | TopCertifier Nigeria`,
    description: service.description,
    keywords: `${service.name}, ${service.title}, ISO certification Nigeria`,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.id]

  if (!service) {
    return (
      <main className="section">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="btn-secondary">
            Back to Services
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-blue-900 text-white py-20">
        <div className="container">
          <Link href="/services" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-2xl text-gray-200">{service.title}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.overview}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-yellow-400 text-2xl flex-shrink-0">✓</div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Key Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.requirements.map((requirement, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Cost Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Timeline</h3>
              <p className="text-lg text-gray-700">{service.timeline}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Investment</h3>
              <p className="text-lg text-gray-700">{service.cost}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help your organization achieve {service.name} certification.
          </p>
          <Link href="/contact" className="btn-primary">
            REQUEST CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  )
}
