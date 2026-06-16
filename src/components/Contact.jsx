import { useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className={isInView ? 'animate-fade-up' : 'opacity-0'}>
          <h2 className="text-3xl font-bold text-neutral-100 mb-2">Contact</h2>
          <div className="w-12 h-0.5 bg-teal-400 mb-8 mx-auto" />
        </div>
        <p
          className={`text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '100ms' }}
        >
          I'm always open to new opportunities, collaborations, or just a good conversation.
          Feel free to reach out.
        </p>
        <a
          href="mailto:ashmitrama@gmail.com"
          className={`mb-5 block font-mono text-sm text-teal-300 transition-colors hover:text-teal-200 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          ashmitrama@gmail.com
        </a>
        <a
          href="mailto:ashmitrama@gmail.com"
          className={`inline-block px-8 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400/10 transition-colors mb-12 ${
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
            className="text-neutral-500 hover:text-neutral-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashmit-rama"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:ashmitrama@gmail.com"
            className="text-neutral-500 hover:text-neutral-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div
        className={`max-w-5xl mx-auto px-6 mt-16 pt-6 border-t border-neutral-800 text-center ${
          isInView ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '500ms' }}
      >
        <p className="text-neutral-700 text-sm">Built by Ashmit Rama</p>
      </div>
    </section>
  )
}
