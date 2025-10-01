export function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 lg:px-24">
      <div className="max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold text-foreground">Get In Touch</h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just
            want to say hi, I'll try my best to get back to you!
          </p>
          <div>
            <a
              href="mailto:untsabe@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Say Hello
            </a>
          </div>
        </div>
        <footer className="mt-24 border-t border-border pt-8 text-center text-sm text-foreground">
          <p>© 2025 Umenelisi. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
