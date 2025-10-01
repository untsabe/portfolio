import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2025 — PRESENT",
    title: "FullStack Developer Intern",
    company: "InnovateSA",
    url: "https://innovatesa.tech/",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["React", "TypeScript", "React with Vite", "SpringBoot,PostreSQL,Tailwind css"],
  },
  {
    period: " 2025 january - May",
    title: "Student Front-end Developer",
    company: "Fluid Intellect",
    url: "https://fluidintellect.com/",
    description:
      " Collaborated with designers to implement responsive and accessible user interfaces. Built RESTful APIs and integrated third-party services.",
    technologies: ["React-Native", "python flask", "MySQL", "CSS"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24 lg:px-24">
      <div className="max-w-3xl">
        <h2 className="mb-12 text-3xl font-bold text-foreground">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8">
              <div className="z-10 mb-2 text-xs font-semibold uppercase tracking-wide text-foreground sm:col-span-2">
                {exp.period}
              </div>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {exp.title} ·{" "}
                      <span className="inline-block">
                        {exp.company}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{exp.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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
