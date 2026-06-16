import { Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-4">
          Hi, I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-neutral-100 mb-4 tracking-tight">
          Ashmit Rama
        </h1>
        <h2 className="text-xl md:text-2xl text-neutral-400 font-normal mb-8">
          CS + Commerce @ UVA
        </h2>
        <p className="text-neutral-400 text-lg max-w-2xl mb-10 leading-relaxed">
          Interested in AI, startups, software engineering, and product development.
          I build things at the intersection of intelligent systems and real-world impact.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/ashmit-rama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-teal-400 text-neutral-950 font-semibold rounded-lg hover:bg-teal-300 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashmit-rama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-300 rounded-lg hover:border-neutral-500 hover:text-neutral-100 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
