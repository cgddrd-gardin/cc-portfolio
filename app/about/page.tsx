export const metadata = {
  title: 'About - Your Name',
  description: 'Learn more about me and what I do',
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ marginBottom: 'var(--space-2xl)' }}>About</h1>

      <section>
        <p>
          Hi, I'm [Your Name]. I'm a developer and designer focused on creating
          thoughtful, accessible experiences on the web.
        </p>

        <p>
          I currently work at [Company], where I [what you do]. Previously, I've
          worked at [previous companies/projects].
        </p>

        <p>
          I'm passionate about [your interests], and I spend my free time
          [hobbies/activities].
        </p>
      </section>

      <section>
        <h2>Connect</h2>
        <p>
          You can find me on{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          ,{' '}
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          , or send me an email at{' '}
          <a href="mailto:your.email@example.com">your.email@example.com</a>.
        </p>
      </section>

      <section>
        <h2>Colophon</h2>
        <p>
          This site is built with Next.js, TypeScript, and MDX. It's deployed on
          GitHub Pages and the source code is available under the MIT license.
        </p>
      </section>
    </div>
  )
}
