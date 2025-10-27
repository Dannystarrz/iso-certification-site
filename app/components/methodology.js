export default function Methodology() {
  const steps = [
    { number: "01", title: "Assessment", description: "We assess your current processes and identify gaps." },
    { number: "02", title: "Planning", description: "We develop a customized implementation plan." },
    { number: "03", title: "Implementation", description: "We guide you through the implementation process." },
    { number: "04", title: "Audit", description: "We conduct internal audits to ensure compliance." },
    { number: "05", title: "Certification", description: "We prepare you for the final certification audit." },
  ]

  return (
    <section className="section bg-white">
      <div className="w-full px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICE METHODOLOGY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#427869] mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
