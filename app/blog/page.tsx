import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export const metadata = {
  title: 'Writing - Your Name',
  description: 'Articles and thoughts on design, development, and more',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <header style={{ marginBottom: 'var(--space-4xl)' }}>
        <h1 style={{ marginBottom: 'var(--space-md)' }}>Writing</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </p>
      </header>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)' }}>
          No posts yet. Check back soon!
        </p>
      ) : (
        <div className="article-list">
          {posts.map((post) => (
            <article key={post.slug} className="article-item">
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="article-title">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && (
                <p className="article-excerpt">{post.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
