"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Twitter, Menu, X } from "lucide-react"

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    if (isMobile) {
      setIsMobileMenuOpen(false)
    }
  }

  // Desktop Navigation (your original design)
  const DesktopNav = () => (
    <nav className="fixed left-0 top-0 hidden h-screen w-80 flex-col justify-between p-12 lg:flex">
      <div>
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Profile Photo */}
          <img 
            src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile.png`} 
            alt="Profile" 
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
        onClick={() => handleNavClick(id)}
        className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest transition-colors"
      >
        <span
          className={`h-px ${
            activeSection === id
              ? "w-16 bg-foreground"
              : "w-8 bg-muted-foreground group-hover:bg-foreground"
          }`}
        />
        <span
          className={`${
            activeSection === id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
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
          href="https://github.com/untsabe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-colors hover:text-accent"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/umenelisi-shadrack-ntsabe-6716a1281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
          href="mailto:untsabe@gmail.com"
          className="text-foreground transition-colors hover:text-accent"
          aria-label="Email"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </nav>
  )

  // Mobile Navigation
  const MobileNav = () => (
    <>
      {/* Mobile Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border lg:hidden">
        <div className="flex items-center justify-between p-4">
          {/* Mobile Profile Info */}
          <div className="flex items-center space-x-3">
            <img 
              src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile.png`} 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold text-foreground">Umenelisi</h1>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="p-4">
              <ul className="space-y-3">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => handleNavClick(id)}
                      className={`block py-2 px-4 text-sm font-medium uppercase tracking-widest transition-colors rounded-md ${
                        activeSection === id 
                          ? "bg-accent text-accent-foreground" 
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links for Mobile */}
              <div className="flex gap-4 justify-center mt-6 pt-6 border-t border-border">
                <a
                  href="https://github.com/untsabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-accent"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umenelisi-shadrack-ntsabe-6716a1281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                 
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              
                <a
                  href="mailto:untsabe@gmail.com"
                  className="text-foreground transition-colors hover:text-accent"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for mobile header */}
      <div className="h-16 lg:hidden" />
    </>
  )

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  )
}
