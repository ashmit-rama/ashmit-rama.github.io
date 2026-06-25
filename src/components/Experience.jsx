import { useRef } from 'react'
import { experience } from '../data/experience'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="experience" ref={sectionRef} className="relative z-[1] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className={isInView ? 'animate-fade-up' : 'opacity-0'}>
          <p className="mb-1.5 font-mono text-xs uppercase tracking-[2px] text-emerald-400">
            02 — Where I&apos;ve worked
          </p>
          <h2
            className="mb-12 text-[34px] font-bold tracking-[-0.5px] text-neutral-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Experience
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5"
            style={{ background: 'linear-gradient(180deg, #34d399, rgba(52,211,153,0.06))' }}
          />
          {experience.map((job, i) => (
            <div
              key={i}
              className={`relative pb-11 pl-11 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${100 + i * 120}ms` }}
            >
              <div className="animate-dot-pulse absolute left-0 top-[3px] h-4 w-4 rounded-full border-2 border-emerald-400 bg-neutral-950" />
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-[26px] backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:border-emerald-400/40">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-1.5">
                  <h3
                    className="text-xl font-semibold text-neutral-100"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {job.company}
                  </h3>
                  <p className="font-mono text-[12.5px] text-neutral-500">{job.period}</p>
                </div>
                <div className="mb-4 flex flex-wrap justify-between gap-1.5">
                  <p className="text-sm text-emerald-400">{job.role}</p>
                  {job.location && <p className="text-[13px] text-neutral-600">{job.location}</p>}
                </div>
                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[14.5px] leading-[1.65] text-neutral-400">
                      <span className="flex-shrink-0 text-emerald-400">▹</span>
                      {bullet}
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
