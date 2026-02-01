import Link from 'next/link'
import { getAllPosts } from './lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <section style={{ marginBottom: 'var(--space-4xl)' }}>
        <h1 style={{ marginBottom: 'var(--space-lg)' }}>Your Name</h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-xl)',
          lineHeight: '1.5'
        }}>
          Developer, designer, and writer.
        </p>
        <p style={{
          maxWidth: '600px',
          color: 'var(--text-secondary)'
        }}>
          I work on design systems, digital products, and the spaces between them.
          This is my corner of the internet where I share thoughts on craft, process,
          and what I'm learning along the way.
        </p>
      </section>

      <section>
        <h2>Writing</h2>
        <div className="article-list">
          {posts.slice(0, 5).map((post) => (
            <article key={post.slug} className="article-item">
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h3 className="article-title">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              {post.excerpt && (
                <p className="article-excerpt">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
        {posts.length > 5 && (
          <p style={{ marginTop: 'var(--space-2xl)' }}>
            <Link href="/blog">View all posts →</Link>
          </p>
        )}
      </section>
    </div>
  )
}
