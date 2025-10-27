export default function Stats() {
  const stats = [
    { number: "1005", label: "Projects", icon: "⭐" },
    { number: "6", label: "International standards", icon: "🌍" },
    { number: "11", label: "Countries", icon: "🏆" },
    { number: "3", label: "Years experience", icon: "⏱️" },
  ]

  return (
    <section className="section bg-gray-100 py-12">
      <div className="w-full px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#0E2D39] mb-2">{stat.number}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
