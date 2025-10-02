import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Document Explainer App",
    description:
      "Extracted text from documents using Tesseract OCR. Users highlight complex words to get simplified explanations via OpenAI API.",
    image: "/lumora.png",
    technologies: ["Python", "Tesseract OCR", "OpenAI API", "React-Native"],
    url: "#",
  },
  {
    title: "Mood-Based Music Web App",
    description:
      "Built a full-stack app suggesting music based on emotion detected via facial recognition.",
    image: "/moodemo.png",
    technologies: ["Node.js", "HTML", "CSS", "JavaScript", "MySQL"],
    url: "#",
  },
  {
    title: "School Bus Tracking App",
    description:
      "Real-time tracking for students/parents with backend integration using Java EE and GPS APIs.",
    image: "/task-management-app.png",
    technologies: ["Java EE", "GPS APIs"],
    url: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 lg:px-24">
      <div className="max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold text-foreground">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8">
              <div className="z-10 sm:col-span-3">
                <div className="overflow-hidden rounded-lg border border-border bg-card transition-all group-hover:border-accent/50">
                  <img
                    src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${project.image}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="z-10 sm:col-span-5">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-baseline text-lg font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {project.title}
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}