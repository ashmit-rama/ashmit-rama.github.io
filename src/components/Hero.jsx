import { useState } from 'react'
import { Github, Linkedin, Code2, TrendingUp } from 'lucide-react'
import MarketFeed from './MarketFeed'

export default function Hero() {
  const [headshotFailed, setHeadshotFailed] = useState(false)

  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <MarketFeed className="absolute inset-0 z-0 h-full w-full opacity-90" />

      <div className="relative z-[1] mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
        <div>
          <div
            className="animate-fade-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/[0.08] px-3.5 py-1.5 opacity-0"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-emerald-300">
              Computer Science × Commerce
            </span>
          </div>

          <h1
            className="animate-fade-up mb-[18px] bg-gradient-to-r from-neutral-50 via-white to-emerald-300 bg-clip-text text-[clamp(46px,7.5vw,84px)] font-bold leading-[1.02] tracking-[-2px] text-transparent opacity-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: '120ms' }}
          >
            Ashmit Rama
          </h1>

          <p
            className="animate-fade-up mb-[30px] max-w-[540px] text-[19px] leading-[1.6] text-neutral-300 opacity-0"
            style={{ animationDelay: '240ms' }}
          >
            Building at the intersection of <strong className="font-semibold text-white">code</strong> and{' '}
            <strong className="font-semibold text-white">capital</strong> — AI systems, fintech, and
            open-source tooling. CS + Commerce @ University of Virginia.
          </p>

          <div
            className="animate-fade-up mb-[34px] flex flex-wrap items-stretch gap-3.5 opacity-0"
            style={{ animationDelay: '360ms' }}
          >
            <div className="min-w-[200px] flex-1 rounded-2xl border border-neutral-800 bg-neutral-900/[0.65] p-[18px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/45">
              <div className="mb-2.5 flex items-center gap-2.5 text-emerald-400">
                <Code2 size={18} />
                <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-neutral-400">
                  Computer Science
                </span>
              </div>
              <p className="text-[13.5px] leading-[1.55] text-neutral-400">
                AI systems, software engineering &amp; open-source tooling.
              </p>
            </div>

            <div
              className="flex flex-none items-center justify-center text-2xl text-neutral-600"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ×
            </div>

            <div className="min-w-[200px] flex-1 rounded-2xl border border-neutral-800 bg-neutral-900/[0.65] p-[18px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/45">
              <div className="mb-2.5 flex items-center gap-2.5 text-emerald-400">
                <TrendingUp size={18} />
                <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-neutral-400">
                  Commerce
                </span>
              </div>
              <p className="text-[13.5px] leading-[1.55] text-neutral-400">
                Fintech, product management, strategy & entrepreneurship.
              </p>
            </div>
          </div>

          <div
            className="animate-fade-up flex flex-wrap gap-4 opacity-0"
            style={{ animationDelay: '480ms' }}
          >
            <a
              href="https://github.com/ashmit-rama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-neutral-950 transition-all hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashmit-rama"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:text-neutral-100"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-fade-in relative mx-auto opacity-0 lg:justify-self-end" style={{ animationDelay: '420ms' }}>
          <div
            className="animate-glow absolute -inset-7 z-0 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.35), transparent 68%)' }}
          />
          <div className="animate-float relative z-[1]">
            <div
              className="h-[clamp(250px,32vw,340px)] w-[clamp(250px,32vw,340px)] rounded-full p-[5px] shadow-[0_30px_80px_-20px_rgba(16,185,129,0.4)]"
              style={{ background: 'conic-gradient(from 140deg, #34d399, #080a09 45%, #080a09 60%, #6ee7b7)' }}
            >
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-emerald-300/15 bg-neutral-900">
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
        </div>
      </div>
    </section>
  )
}
