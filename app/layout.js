import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingButton from "@/components/floating-button"
import { OrganizationSchema, LocalBusinessSchema } from "@/components/schema-markup"
import ChatWidget from "./components/chat-widget/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ISO Certification Nigeria | CertiDocs",
  description:
    "Get ISO certification in Nigeria with CertiDocs. Expert ISO consultants offering ISO 9001, ISO 14001, ISO 45001, and more.",
  keywords: "ISO certification Nigeria, ISO consultants, ISO 9001, ISO 14001, ISO 45001",
  openGraph: {
    title: "ISO Certification Nigeria | CertiDocs",
    description: "Get ISO certification in Nigeria with CertiDocs. Expert ISO consultants.",
    url: "/",
    siteName: "CertiDocs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  canonical: "/",
  robots: "index, follow",
  author: "CertiDocs",
  creator: "CertiDocs",
  publisher: "CertiDocs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#004AAD" />
        <meta
          name="description"
          content="Get ISO certification in Nigeria with CertiDocs. Expert ISO consultants offering ISO 9001, ISO 14001, ISO 45001, and more."
        />
        <meta name="keywords" content="ISO certification Nigeria, ISO consultants, ISO 9001, ISO 14001, ISO 45001" />
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
