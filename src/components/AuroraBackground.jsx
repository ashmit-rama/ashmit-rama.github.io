// Fixed, full-viewport green grid field behind all content,
// fading out toward the edges (replaces the old aurora glow).
export default function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: '#080a09' }}
    >
      <div
        className="animate-grid-drift absolute -inset-0.5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 80% at 50% 30%, #000 28%, transparent 76%)',
          maskImage: 'radial-gradient(ellipse 95% 80% at 50% 30%, #000 28%, transparent 76%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(110,231,183,0.18) 1.3px, transparent 1.6px)',
          backgroundSize: '48px 48px',
          backgroundPosition: '24px 24px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 38%, #000 0%, transparent 68%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 38%, #000 0%, transparent 68%)',
        }}
      />
    </div>
  )
}
