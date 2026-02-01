import Link from 'next/link'
import { getAllPosts } from './lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <section style={{ marginBottom: '4rem' }}>
        <h1>Your Name</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
          Developer, designer, and writer.
        </p>
        <p>
          Welcome to my personal site. I write about design, development, and
          things I'm learning.
        </p>
      </section>

      <section>
        <h2>Recent Writing</h2>
        <div>
          {posts.slice(0, 5).map((post) => (
            <article key={post.slug} style={{ marginBottom: '2rem' }}>
              <h3 style={{ margin: '0.5rem 0' }}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <time style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.excerpt && (
                <p style={{ marginTop: '0.5rem' }}>{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
        <p>
          <Link href="/blog">View all posts →</Link>
        </p>
      </section>
    </div>
  )
}
