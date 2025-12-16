import Link from "next/link"

export const metadata = {
  title: "Industries We Serve | TopCertifier Nigeria",
  description:
    "TopCertifier serves various industries including manufacturing, healthcare, food & beverage, IT, energy, and more.",
  keywords: "Industries, ISO certification by industry, manufacturing, healthcare, food safety",
}

export default function IndustriesPage() {
  const industries = [
    {
      name: "Manufacturing",
      description: "Improve product quality and operational efficiency with ISO 9001 and ISO 14001 certifications.",
      certifications: ["ISO 9001", "ISO 14001", "ISO 45001"],
    },
    {
      name: "Healthcare",
      description: "Ensure patient safety and regulatory compliance with ISO 45001 and ISO 27001 certifications.",
      certifications: ["ISO 45001", "ISO 27001", "ISO 9001"],
    },
    {
      name: "Food & Beverage",
      description: "Guarantee food safety and consumer protection with ISO 22000 and ISO 9001 certifications.",
      certifications: ["ISO 22000", "ISO 9001", "ISO 14001"],
    },
    {
      name: "Information Technology",
      description: "Protect sensitive data and ensure business continuity with ISO 27001 and ISO 22301 certifications.",
      certifications: ["ISO 27001", "ISO 22301", "ISO 9001"],
    },
    {
      name: "Energy & Utilities",
      description: "Enhance safety and environmental performance with ISO 45001 and ISO 14001 certifications.",
      certifications: ["ISO 45001", "ISO 14001", "ISO 9001"],
    },
    {
      name: "Retail & Commerce",
      description:
        "Streamline operations and improve customer satisfaction with ISO 9001 and ISO 27001 certifications.",
      certifications: ["ISO 9001", "ISO 27001", "ISO 45001"],
    },
    {
      name: "Construction",
      description: "Ensure workplace safety and quality standards with ISO 45001 and ISO 9001 certifications.",
      certifications: ["ISO 45001", "ISO 9001", "ISO 14001"],
    },
    {
      name: "Education",
      description: "Improve service quality and data security with ISO 9001 and ISO 27001 certifications.",
      certifications: ["ISO 9001", "ISO 27001", "ISO 45001"],
    },
    {
      name: "Agriculture",
      description: "Improve service quality and data security with ISO 9001 and ISO 22001 certifications.",
      certifications: ["ISO 9001", "ISO 22001", "ISO 14001"],
    },
    {
      name: "Research Institues",
      description: "Improve service quality and data security with ISO 9001 and ISO 71025 certifications.",
      certifications: ["ISO 9001", "ISO 71025", "ISO 14001"],
    },
    {
      name: "Cosmetics",
      description: "Ensure product safety, quality consistency, and regulatory compliance across cosmetic manufacturing and distribution.",
      certifications: ["ISO 22716", "ISO 9001", "ISO 14001"],
    },
    {
      name: "Textiles, Fabrics & Fashion",
      description: "Enhance product quality, sustainability, and ethical production across textile and fashion supply chains.",
      certifications: ["ISO 9001", "ISO 14001", "ISO 45001"],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-200">Tailored ISO certification solutions for diverse industries</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#427869] mb-3">{industry.name}</h3>
                <p className="text-gray-700 text-sm mb-6">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600">Relevant Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.certifications.map((cert, i) => (
                      <span key={i} className="bg-[#e4f1da] text-[#89C45A] text-xs px-3 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#427869]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Don't See Your Industry?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We work with organizations across all sectors. Contact us to discuss your specific certification needs.
          </p>
          <Link href="/contact" className="btn-primary">
            CONTACT US
          </Link>
        </div>
      </section>
    </main>
  )
}
