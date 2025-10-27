export default function Testimonials() {
  const testimonials = [
    {
      name: "Chioma Okafor",
      company: "Manufacturing Ltd",
      text: "TopCertifier made our ISO 9001 certification process seamless and efficient. Highly recommended!",
      rating: 5,
    },
    {
      name: "Adebayo Oluwaseun",
      company: "Tech Solutions Nigeria",
      text: "Professional team, excellent guidance, and quick turnaround. Great experience!",
      rating: 5,
    },
    {
      name: "Ngozi Eze",
      company: "Food & Beverage Co",
      text: "The ISO 22000 certification was handled with utmost professionalism. Thank you!",
      rating: 5,
    },
  ]

  return (
    <section className="section bg-gray-100">
      <div className="w-full px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">WHAT OUR CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
