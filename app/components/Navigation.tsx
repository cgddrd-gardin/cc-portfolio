import Link from 'next/link'

export default function Navigation() {
  return (
    <nav style={{
      borderBottom: '1px solid var(--light-gray)',
      padding: '1.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'var(--foreground)',
        }}>
          Your Name
        </Link>
        <div style={{
          display: 'flex',
          gap: '2rem',
        }}>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}
