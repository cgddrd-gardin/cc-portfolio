import Link from 'next/link'

export default function Navigation() {
  return (
    <nav style={{
      borderBottom: '1px solid var(--border)',
      marginBottom: 'var(--space-4xl)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 'var(--space-xl)',
        paddingBottom: 'var(--space-xl)',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          Your Name
        </Link>
        <div style={{
          display: 'flex',
          gap: 'var(--space-xl)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
        }}>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            Writing
          </Link>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
