export const metadata = {
  title: 'About - Your Name',
  description: 'Learn more about me and what I do',
}

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>

      <section style={{ marginTop: '2rem' }}>
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

      <section style={{ marginTop: '3rem' }}>
        <h2>Get in Touch</h2>
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

      <section style={{ marginTop: '3rem' }}>
        <h2>This Site</h2>
        <p>
          This site is built with Next.js and TypeScript. The source code is
          available on GitHub under the MIT license.
        </p>
      </section>
    </div>
  )
}
