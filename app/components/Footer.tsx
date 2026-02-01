export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: 'var(--space-4xl)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-2xl)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        color: 'var(--text-tertiary)',
      }}>
        <div>
          © {new Date().getFullYear()}
        </div>
        <div style={{
          display: 'flex',
          gap: 'var(--space-lg)',
        }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
