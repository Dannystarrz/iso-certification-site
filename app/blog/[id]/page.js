import Link from "next/link"
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.id)
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }
  return {
    title: `${post.title} | TopCertifier Blog`,
    description: post.excerpt,
    keywords: `${post.category}, ISO certification, ${post.title}`,
  }
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.id)
  const relatedPosts = getRelatedPosts(params.id)

  if (!post) {
    return (
      <main className="section">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-secondary">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-blue-900 text-white py-20">
        <div className="container max-w-3xl">
          <Link href="/blog" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-200">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-gray-100">
        <div className="container max-w-3xl py-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((item) => item.startsWith("- "))
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gray-200 overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Certified?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your organization achieve certification.
          </p>
          <Link href="/contact" className="btn-primary">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </main>
  )
}
