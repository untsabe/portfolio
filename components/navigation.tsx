"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed left-0 top-0 hidden h-screen w-80 flex-col justify-between p-12 lg:flex">
      <div>
       <div className="mb-12 flex flex-col items-center text-center">
    {/* Profile Photo */}
    <img
      src="/profile.png" // replace with your actual photo path
      alt=""
      className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg"
    />

    <h1 className="mb-2 text-5xl font-bold tracking-tight text-foreground">
     Umenelisi
    </h1>
    <h2 className="mb-4 text-xl font-medium text-foreground">
      Full Stack Developer
    </h2>
    <p className="text-sm text-foreground max-w-md">
      I build accessible, pixel-perfect digital experiences for the web.
    </p>
  </div>

        <ul className="space-y-4">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest transition-all"
              >
                <span
                  className={`h-px transition-all ${
                    activeSection === id
                      ? "w-16 bg-accent"
                      : "w-8 bg-foreground group-hover:w-16 group-hover:bg-accent"
                  }`}
                />
                <span
                  className={`transition-colors ${
                    activeSection === id ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-accent"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-accent"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-foreground transition-colors hover:text-accent"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </nav>
  )
}
