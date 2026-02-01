import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export const metadata = {
  title: 'Blog - Your Name',
  description: 'Articles and thoughts on design, development, and more',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1>Blog</h1>
      <p style={{ color: 'var(--gray)', marginBottom: '3rem' }}>
        {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>

      <div>
        {posts.length === 0 ? (
          <p>No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ margin: '0.5rem 0' }}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <time style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.excerpt && (
                <p style={{ marginTop: '0.75rem' }}>{post.excerpt}</p>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  )
}
