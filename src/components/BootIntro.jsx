import { useEffect, useState } from 'react'

// Terminal-style boot sequence shown once on load.
// Skips instantly when prefers-reduced-motion is set, or on click.
export default function BootIntro() {
  const [phase, setPhase] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'gone' : 'in',
  )

  useEffect(() => {
    if (phase !== 'in') return undefined
    const t1 = setTimeout(() => setPhase('out'), 2100)
    return () => clearTimeout(t1)
  }, [phase])

  useEffect(() => {
    if (phase !== 'out') return undefined
    const t2 = setTimeout(() => setPhase('gone'), 600)
    return () => clearTimeout(t2)
  }, [phase])

  if (phase === 'gone') return null

  const line = '> '

  return (
    <div
      onClick={() => setPhase('out')}
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-[#08080a] p-6 transition-all duration-600"
      style={{
        opacity: phase === 'out' ? 0 : 1,
        transform: phase === 'out' ? 'translateY(-16px)' : 'none',
      }}
    >
      <div className="w-full max-w-[460px] font-mono text-sm leading-[1.9] text-neutral-400">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          <span className="text-emerald-400">{line}</span>booting portfolio.exe
        </div>
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '500ms' }}>
          <span className="text-emerald-400">{line}</span>module: computer-science{' '}
          <span className="text-neutral-700">···········</span> <span className="text-emerald-300">ok</span>
        </div>
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '900ms' }}>
          <span className="text-emerald-400">{line}</span>module: commerce{' '}
          <span className="text-neutral-700">·················</span> <span className="text-emerald-300">ok</span>
        </div>
        <div className="animate-fade-up text-neutral-100 opacity-0" style={{ animationDelay: '1300ms' }}>
          <span className="text-emerald-400">{line}</span>launching ashmit_rama
          <span className="animate-blink ml-1 inline-block h-[17px] w-[9px] translate-y-[3px] bg-emerald-400" />
        </div>
        <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-neutral-800">
          <div
            className="animate-progress h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #34d399, #6ee7b7)' }}
          />
        </div>
      </div>
    </div>
  )
}
