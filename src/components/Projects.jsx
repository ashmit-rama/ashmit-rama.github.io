import { useEffect, useRef } from 'react'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'

// 3D coverflow carousel: projects sit on a curved ring; the centered card
// scales up to full size while neighbors rotate back and fade. Navigate by
// dragging, scrolling over the stage, the arrow buttons, or the dots.
export default function Projects() {
  const stageRef = useRef(null)
  const ringRef = useRef(null)
  const dotsRef = useRef(null)
  const ctrl = useRef({
    pos: 0,
    target: 0,
    spacing: 240,
    running: false,
    raf: 0,
    snapT: 0,
    nav: null,
  }).current

  useEffect(() => {
    const stage = stageRef.current
    const ring = ringRef.current
    if (!stage || !ring) return undefined

    const cards = Array.from(ring.querySelectorAll('[data-card]'))
    const dots = dotsRef.current
      ? Array.from(dotsRef.current.querySelectorAll('[data-dot]'))
      : []
    const N = cards.length
    if (!N) return undefined

    const clamp = (v) => Math.max(0, Math.min(N - 1, v))

    const update = () => {
      const pos = ctrl.pos
      for (let i = 0; i < cards.length; i++) {
        const off = i - pos
        const a = Math.abs(off)
        const x = off * ctrl.spacing
        const ry = Math.max(-58, Math.min(58, -off * 40))
        const tz = -a * 180
        const scale = Math.max(0.62, 1 - a * 0.16)
        const op = Math.max(0, 1 - a * 0.4)
        const card = cards[i]
        card.style.transform =
          `translate(-50%, -50%) translateX(${x}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`
        card.style.opacity = String(op)
        card.style.zIndex = String(200 - Math.round(a * 10))
        card.style.pointerEvents = a < 0.5 ? 'auto' : 'none'
        card.style.filter = a > 0.5 ? `brightness(${Math.max(0.5, 1 - a * 0.22)})` : 'none'
      }
      const active = Math.round(pos)
      dots.forEach((d, i) => {
        const on = i === active
        d.style.background = on ? '#34d399' : '#3a3a40'
        d.style.width = on ? '26px' : '9px'
      })
    }

    const kick = () => {
      if (ctrl.running) return
      ctrl.running = true
      const tick = () => {
        const diff = ctrl.target - ctrl.pos
        if (Math.abs(diff) < 0.0006) {
          ctrl.pos = ctrl.target
          update()
          ctrl.running = false
          return
        }
        ctrl.pos += diff * 0.14
        update()
        ctrl.raf = requestAnimationFrame(tick)
      }
      ctrl.raf = requestAnimationFrame(tick)
    }

    const queueSnap = () => {
      clearTimeout(ctrl.snapT)
      ctrl.snapT = setTimeout(() => {
        ctrl.target = clamp(Math.round(ctrl.target))
        kick()
      }, 140)
    }

    const measure = () => {
      const w = cards[0] ? cards[0].offsetWidth : 340
      ctrl.spacing = Math.max(150, w * 0.58)
      update()
    }

    const onWheel = (e) => {
      const primary = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      const atStart = ctrl.target <= 0.001 && primary < 0
      const atEnd = ctrl.target >= N - 1.001 && primary > 0
      if (atStart || atEnd) return
      e.preventDefault()
      ctrl.target = clamp(ctrl.target + primary * 0.0032)
      queueSnap()
      kick()
    }

    let drag = null
    const onDown = (e) => {
      drag = { x: e.clientX, t: ctrl.target }
      stage.style.cursor = 'grabbing'
      try {
        stage.setPointerCapture(e.pointerId)
      } catch (_) {
        /* noop */
      }
    }
    const onMove = (e) => {
      if (!drag) return
      ctrl.target = clamp(drag.t - (e.clientX - drag.x) / ctrl.spacing)
      kick()
    }
    const onUp = () => {
      if (!drag) return
      drag = null
      stage.style.cursor = 'grab'
      ctrl.target = clamp(Math.round(ctrl.target))
      kick()
    }

    const dotHandlers = dots.map((d, i) => {
      const h = () => {
        ctrl.target = clamp(i)
        kick()
      }
      d.addEventListener('click', h)
      return h
    })

    ctrl.nav = (dir) => {
      ctrl.target = clamp(Math.round(ctrl.target) + dir)
      kick()
    }

    measure()
    window.addEventListener('resize', measure)
    stage.addEventListener('wheel', onWheel, { passive: false })
    stage.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    kick()

    return () => {
      cancelAnimationFrame(ctrl.raf)
      clearTimeout(ctrl.snapT)
      window.removeEventListener('resize', measure)
      stage.removeEventListener('wheel', onWheel)
      stage.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      dots.forEach((d, i) => d.removeEventListener('click', dotHandlers[i]))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nav = (dir) => ctrl.nav && ctrl.nav(dir)

  return (
    <section id="projects" className="relative z-[1] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-neutral-100">Projects</h2>
            <div className="h-0.5 w-12 bg-emerald-400" />
          </div>
          <div className="flex items-center gap-3.5">
            <span className="font-mono text-[11px] uppercase tracking-[1px] text-neutral-600">
              drag / scroll
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => nav(-1)}
                aria-label="Previous project"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => nav(1)}
                aria-label="Next project"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative cursor-grab overflow-hidden"
        style={{
          height: 'clamp(420px, 58vw, 520px)',
          perspective: '1500px',
          perspectiveOrigin: '50% 44%',
          touchAction: 'pan-y',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, #000 13%, #000 87%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 13%, #000 87%, transparent)',
        }}
      >
        <div ref={ringRef} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {projects.map((project, i) => (
            <article
              key={i}
              data-card
              className="absolute left-1/2 top-1/2 flex flex-col rounded-[18px] border border-neutral-700/80 p-7"
              style={{
                width: 'clamp(280px, 74vw, 380px)',
                height: 'clamp(360px, 60vw, 432px)',
                background: 'linear-gradient(160deg, rgba(30,28,37,0.96), rgba(15,15,18,0.96))',
                boxShadow: '0 30px 70px -30px rgba(0,0,0,0.85)',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <div className="mb-[18px] flex items-start justify-between">
                <span className="font-mono text-[34px] font-medium leading-none text-emerald-400/45">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition-colors hover:text-neutral-200"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 transition-colors hover:text-neutral-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mb-2 text-[22px] font-semibold leading-tight text-neutral-100">
                {project.name}
              </h3>
              {project.subtitle && (
                <p className="mb-4 text-[14.5px] font-medium leading-snug text-emerald-300">
                  {project.subtitle}
                </p>
              )}
              <p className="mb-5 flex-1 overflow-hidden text-[13.5px] leading-[1.6] text-neutral-400">
                {project.description}
              </p>
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="rounded-md bg-emerald-500/10 px-2.5 py-1 font-mono text-[11.5px] text-emerald-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <div
        ref={dotsRef}
        className="mx-auto mt-7 flex max-w-5xl items-center justify-center gap-[11px] px-6"
      >
        {projects.map((_, i) => (
          <button
            key={i}
            type="button"
            data-dot
            aria-label={`Go to project ${i + 1}`}
            className="h-[9px] cursor-pointer rounded-full border-0 p-0"
            style={{ width: '9px', background: '#3a3a40', transition: 'background 0.3s, width 0.3s' }}
          />
        ))}
      </div>
    </section>
  )
}
