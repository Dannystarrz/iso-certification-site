import Link from "next/link"

export const metadata = {
  title: "About CertiDoc | ISO Certification Nigeria",
  description:
    "Learn about CertiDoc, an internationally recognized ISO certification, documentation and consulting company with 3+ years of experience.",
  keywords: "About CertiDoc, ISO consultants Nigeria, certification company",
}

export default function AboutPage() {
  const team = [
    { name: "Dr. Chukwu Okafor", role: "Chief Consultant", expertise: "ISO 9001, ISO 14001" },
    { name: "Amara Adeyemi", role: "Senior Consultant", expertise: "ISO 45001, ISO 22000" },
    { name: "Tunde Oluwaseun", role: "Compliance Specialist", expertise: "ISO 27001, ISO 22301" },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery.",
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of professional integrity and ethics.",
    },
    {
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge certification solutions.",
    },
    {
      title: "Customer Focus",
      description: "We prioritize customer satisfaction and success above all else.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">About CertiDoc</h1>
          <p className="text-xl text-gray-200">Your trusted global partner for ISO certification, documentation and compliance.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              CertiDoc is an internationally recognized Consulting & Certification Company. We specialize
              in helping organizations achieve ISO certification and other international compliance standards. With over
              3 years of experience, we have successfully guided more than 1,000 organizations through their
              certification journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our team of experienced consultants is dedicated to providing customized solutions that meet the unique
              needs of each client. We work closely with organizations to ensure a smooth and successful certification
              process, from initial assessment through final audit and beyond.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We pride ourselves on our commitment to quality, customer satisfaction, and continuous improvement. Our
              goal is to help our clients enhance their operations, increase efficiency, and strengthen their reputation
              through implementing ISO and other international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-[#427869] mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-24 h-24 bg-[#427869] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#89C45A] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CertiDocs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="text-[#89C45A] text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Consultants</h3>
                <p className="text-gray-700">
                  Our team has extensive experience in ISO certification across multiple industries.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#89C45A] text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-700">
                  We help organizations achieve certification in 7-30 days with our efficient process.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#89C45A] text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-700">
                  We offer competitive pricing without compromising on quality and service.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#89C45A] text-3xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  Over 1,000 successful certifications across 11 countries and multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#427869] text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how CertiDocs can help your organization achieve its certification goals.
          </p>
          <Link href="/contact" className="btn-primary">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  )
}
