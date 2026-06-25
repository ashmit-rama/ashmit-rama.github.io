import { Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [headshotFailed, setHeadshotFailed] = useState(false)

  return (
    <section id="about" className="min-h-screen pt-16">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)]">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-20 -inset-y-16 bg-[radial-gradient(circle_at_20%_45%,rgba(52,211,153,0.16),transparent_46%)]" />
          <div className="relative">
            <p
              className="animate-fade-up mb-4 text-sm font-medium uppercase text-emerald-400 opacity-0"
              style={{ animationDelay: '0ms' }}
            >
              Hi, I'm
            </p>
            <h1
              className="animate-fade-up mb-4 bg-gradient-to-r from-neutral-50 via-white to-emerald-300 bg-clip-text text-6xl font-bold text-transparent opacity-0 md:text-8xl"
              style={{ animationDelay: '100ms' }}
            >
              Ashmit Rama
            </h1>
            <h2
              className="animate-fade-up mb-8 text-xl font-normal text-neutral-400 opacity-0 md:text-2xl"
              style={{ animationDelay: '200ms' }}
            >
              CS + Commerce @ UVA
            </h2>
            <p
              className="animate-fade-up mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 opacity-0"
              style={{ animationDelay: '300ms' }}
            >
              Interested in AI, startups, software engineering, and product development.
              I build things at the intersection of intelligent systems and real-world impact.
            </p>
            <div
              className="animate-fade-up flex flex-wrap gap-4 opacity-0"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="https://github.com/ashmit-rama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-neutral-950 transition-colors hover:bg-emerald-300"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashmit-rama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-100"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div
          className="animate-fade-in relative mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-neutral-950 p-3 opacity-0 ring-2 ring-emerald-300/70 ring-offset-8 ring-offset-neutral-950 md:h-80 md:w-80 lg:mx-0 lg:justify-self-end"
          style={{ animationDelay: '500ms' }}
        >
          <div className="animate-pulse-glow absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="animate-float-soft relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-emerald-300/20 bg-neutral-900">
            {headshotFailed ? (
              <span className="text-6xl font-bold text-emerald-300 md:text-7xl">AR</span>
            ) : (
              <img
                src="/headshot.jpg"
                alt="Ashmit Rama"
                className="h-full w-full object-cover"
                onError={() => setHeadshotFailed(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
