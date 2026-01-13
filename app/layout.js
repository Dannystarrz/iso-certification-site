import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingButton from "@/components/floating-button"
import { OrganizationSchema, LocalBusinessSchema } from "@/components/schema-markup"
import ChatWidget from "./components/chat-widget/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Global ISO Certification | CertiDoc Solutions",
  description:
    "Get ISO Certification with CertiDoc Solutions. Expert ISO consultants offering ISO 9001, ISO 14001, ISO 45001, and more.",
  keywords: "ISO certification, ISO consultants, Certification, certifications, certidoc, certidoc solutions, ISO 9001, ISO 14001, ISO 45001, ISO",
  openGraph: {
    title: "Global ISO Certification | CertiDoc Solutions",
    description: "Get ISO Certification with CertiDoc Solutions. Expert ISO consultants.",
    url: "/",
    siteName: "CertiDoc Solutions",
    images: [
      {
        url: "/certidoc-logo.jpeg",
        width: 213,
        height: 155,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  canonical: "/",
  robots: "index, follow",
  author: "CertiDoc Solutions",
  creator: "CertiDoc Solutions",
  publisher: "CertiDoc Solutions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e2d39" />
        <meta
          name="description"
          content="Get ISO certification with CertiDoc Solutions. Expert ISO consultants offering ISO 9001, ISO 14001, ISO 45001, and more."
        />
        <meta name="keywords" content="ISO certification, ISO consultants, Certification, certifications, certidoc, certidoc solutions, ISO 9001, ISO 14001, ISO 45001, ISO" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/" />
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} bg-white w-full`}>
        <Navigation />
        <main className="w-full">{children}</main>
        <Footer />
        {/* <FloatingButton /> */}
        {/* <ChatWidget/> */}
      </body>
    </html>
  )
}
