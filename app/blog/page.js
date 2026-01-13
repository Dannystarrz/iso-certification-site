import Link from "next/link"
import { blogPosts } from "../../lib/blog-data"

export const metadata = {
  title: "Blog | ISO Certification Tips & Insights | Certidoc Solutions",
  description:
    "Read our blog for insights, tips, and best practices on ISO certification, quality management, and business compliance.",
  keywords: "ISO blog, certification tips, quality management, business compliance",
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-[#427869] text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-200">
            Insights, tips, and best practices for ISO certification and business compliance
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#e4f1da] text-[#89C45A] text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">By {post.author}</span>
                    <span className="text-[#427869] font-semibold">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#427869]">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get the latest insights and tips on ISO certification delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-200 rounded focus:outline-none focus:border-[#89C45A]"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
