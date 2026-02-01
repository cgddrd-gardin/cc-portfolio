import RSS from 'rss'
import { getAllPosts } from '../lib/posts'

export async function GET() {
  const posts = getAllPosts()

  const feed = new RSS({
    title: 'Your Name - Blog',
    description: 'Personal blog about design, development, and more',
    site_url: 'https://yoursite.com',
    feed_url: 'https://yoursite.com/rss.xml',
    language: 'en',
    pubDate: new Date(),
  })

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt || '',
      url: `https://yoursite.com/blog/${post.slug}`,
      date: post.date,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
