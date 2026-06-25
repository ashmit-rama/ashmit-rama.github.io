import { useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="relative z-[1] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className={isInView ? 'animate-fade-up' : 'opacity-0'}>
          <p className="mb-1.5 font-mono text-xs uppercase tracking-[2px] text-emerald-400">
            04 — Get in touch
          </p>
          <h2
            className="mb-7 text-[34px] font-bold tracking-[-0.5px] text-neutral-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact
          </h2>
        </div>
        <p
          className={`mx-auto mb-8 max-w-md leading-relaxed text-neutral-400 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '100ms' }}
        >
          I&apos;m always open to new opportunities, collaborations, or just a good conversation.
          Feel free to reach out.
        </p>
        <a
          href="mailto:ashmitrama@gmail.com"
          className={`mb-5 block font-mono text-sm text-emerald-300 transition-colors hover:text-emerald-200 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          ashmitrama@gmail.com
        </a>
        <a
          href="mailto:ashmitrama@gmail.com"
          className={`mb-12 inline-block rounded-lg border border-emerald-400 px-8 py-3 text-emerald-400 transition-colors hover:bg-emerald-500/[0.12] ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '300ms' }}
        >
          Say Hello
        </a>
        <div
          className={`flex justify-center gap-8 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
        >
          <a
            href="https://github.com/ashmit-rama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashmit-rama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:ashmitrama@gmail.com"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div
        className={`mx-auto mt-16 max-w-5xl border-t border-neutral-800 px-6 pt-6 text-center ${
          isInView ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '500ms' }}
      >
        <p className="font-mono text-xs text-neutral-700">Built by Ashmit Rama</p>
      </div>
    </section>
  )
}
