import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className={isInView ? 'animate-fade-up' : 'opacity-0'}>
          <h2 className="text-3xl font-bold text-neutral-100 mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-teal-400 mb-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col hover:border-teal-400/30 hover:-translate-y-1 transition-all duration-200 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-neutral-100 font-semibold">{project.name}</h3>
                  {project.subtitle && (
                    <p className="text-neutral-500 text-xs mt-0.5">{project.subtitle}</p>
                  )}
                </div>
                <div className="flex gap-3 ml-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-200 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
