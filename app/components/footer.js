import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#89C45A]">CertiDoc</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted global partner for ISO certification, documentation and compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#89C45A]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#89C45A]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-[#89C45A]">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#89C45A]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#89C45A] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">+234 706 202 4758</span>
                  <span className="text-gray-400">+234 706 202 4758</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#89C45A] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">info@certidocsolutions.com, </span>
                  <span className="text-gray-400">support@certidocsolutions.com</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#89C45A] mt-1 flex-shrink-0" />
                <span className="text-gray-400">38 Ewanla street, Egbe-Idimu Lagos.</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-[#89C45A] mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Thu: 8AM - 8PM</p>
                  <p>Fri - Sun: 9AM - 6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 CertiDoc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#89C45A]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#89C45A]">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
