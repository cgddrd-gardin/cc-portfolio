export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--light-gray)',
      marginTop: '4rem',
      padding: '2rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        color: 'var(--gray)',
      }}>
        <div>
          © {new Date().getFullYear()} Your Name
        </div>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
        }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
