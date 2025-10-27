import Link from "next/link"

export default function WhoWeAre() {
  return (
    <section className="section w-full px-8 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="text-[#89C45A] font-semibold mb-2">ABOUT US</div>
            <h2 className="text-4xl font-bold mb-8">WHO WE ARE</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ISO Certification in Nigeria demonstrates your commitment to quality, customer satisfaction, and
              continuous improvement, enhancing your reputation and competitiveness in the market. TopCertifier is an
              internationally recognized Consulting & Certification Company in Nigeria. We offer our services for ISO,
              SOC, GDPR, PCI DSS, CE Mark, HACCP, HIPAA, HALAL, CMMI, VAPT and other Compliance Certifications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We specialize in helping organizations achieve ISO certification through expert guidance and support. Our
              team of experienced consultants is dedicated to providing customized solutions to meet the unique needs of
              each client, and we work closely with them to ensure a smooth and successful certification process. We
              pride ourselves on our commitment to quality and customer satisfaction, and our goal is to help our
              clients improve their operations, increase efficiency, and enhance their reputation through implementing
              ISO and other international standards.
            </p>
            <Link href="/about" className="bg-[#0E2D39] px-6 py-3 w-fit text-white font-semibold rounded hover:bg-[#427869] transition-colors">
              LEARN MORE
            </Link>
          </div>
          <div className="lg:w-1/2 lg:h-full">
            <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
              <img
                src="/about-us.jpg"
                alt="Image-Certidocs"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
   
    </section>
  )
}
