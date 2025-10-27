import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Methodology from "@/components/methodology"

export const metadata = {
  title: "ISO Certification Nigeria | CertiDocs",
  description:
    "Get ISO certification in Nigeria with CertiDocs. Expert ISO consultants offering ISO 9001, ISO 14001, ISO 45001, and more.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Stats />
      <Services />
      <Testimonials />
      <Methodology />
      <CTA />
    </>
  )
}
