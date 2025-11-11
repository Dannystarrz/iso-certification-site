export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CertiDoc",
    url: "https://iso-certification-nigeria.com",
    logo: "https://iso-certification-nigeria.com/logo.png",
    description: "International ISO Certification and Consulting Company",
    address: {
      "@type": "PostalAddress",
      streetAddress: "38 Ewenla street, Egbe-Idimu Lagos.",
      addressLocality: "Lagos",
      addressRegion: "LGA",
      postalCode: "900001",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+234-706-202-4758, +234-803-232-0932",
      email: "info@certidocsolutions.com, support@certidocsolutions.com",
    },
    sameAs: [
      "https://www.facebook.com/certidoc",
      "https://www.twitter.com/certidoc",
      "https://www.linkedin.com/company/certidoc",
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Certidoc",
    // image: "https://iso-certification-nigeria.com/logo.png",
    description: "ISO Certification and Consulting Services Across the Globe",
    address: {
      "@type": "PostalAddress",
      streetAddress: "38 Ewenla street, Egbe-Idimu Lagos.",
      addressLocality: "Lagos",
      addressRegion: "LGA",
      postalCode: "900001",
      addressCountry: "NG",
    },
    telephone: "+234-813-529-3329",
    email: "info@certidocsolutions.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ISO certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ISO certification is an independent verification that your organization meets the requirements of an International Organization for Standardization (ISO) standard.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the certification process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline varies depending on the ISO standard and your organization's readiness. Typically, the process takes 8-16 weeks from initial assessment to final certification.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of ISO certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on several factors including the ISO standard, organization size, complexity, and current state of readiness.",
        },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
