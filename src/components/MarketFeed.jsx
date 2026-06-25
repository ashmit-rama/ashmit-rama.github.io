import { useEffect, useRef } from 'react'

// Live, gently scrolling "market feed" line chart drawn on a canvas.
// Sits behind the hero content as ambient fintech texture.
export default function MarketFeed({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = null

    const N = 150
    const data = []
    let val = 0.5
    for (let i = 0; i < N; i++) {
      val += (Math.random() - 0.5) * 0.07
      val = Math.max(0.18, Math.min(0.82, val))
      data.push(val)
    }

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      const top = h * 0.46
      const band = h * 0.5
      const step = w / (N - 1)

      ctx.beginPath()
      for (let i = 0; i < N; i++) {
        const x = i * step
        const y = top + (1 - data[i]) * band
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      const stroke = ctx.createLinearGradient(0, 0, w, 0)
      stroke.addColorStop(0, 'rgba(52,211,153,0)')
      stroke.addColorStop(0.15, 'rgba(52,211,153,0.4)')
      stroke.addColorStop(1, 'rgba(110,231,183,0.45)')
      ctx.strokeStyle = stroke
      ctx.lineWidth = 2
      ctx.lineJoin = 'round'
      ctx.stroke()

      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()
      const fill = ctx.createLinearGradient(0, top, 0, h)
      fill.addColorStop(0, 'rgba(16,185,129,0.16)')
      fill.addColorStop(1, 'rgba(16,185,129,0)')
      ctx.fillStyle = fill
      ctx.fill()
    }

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    if (reduced) {
      render()
      return () => window.removeEventListener('resize', onResize)
    }

    let frame = 0
    const loop = () => {
      frame++
      if (frame % 5 === 0) {
        val += (Math.random() - 0.5) * 0.07
        val = Math.max(0.18, Math.min(0.82, val))
        data.push(val)
        data.shift()
      }
      render()
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
