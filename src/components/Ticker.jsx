const items = [
  'Computer Science', 'Commerce', 'open source', 'git push origin main',
  'NASDAQ ▲ 1.24%', 'BTC/USD 67,420 ▲', 'pull request #128 merged',
  'S&P 500 ▲ 0.8%', 'npm publish', 'LLM agents', 'build passing',
  'fintech', 'yield 4.3%', 'fork & contribute', 'commit a3f9c2', 'ship to prod',
]

function Row({ ariaHidden = false }) {
  return (
    <div className="flex items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap font-mono text-[13px] text-neutral-400">{item}</span>
          <span className="mx-6 text-emerald-400">◆</span>
        </span>
      ))}
    </div>
  )
}

// Infinite marquee of fintech / open-source signals.
export default function Ticker() {
  return (
    <div className="ticker-mask relative z-[1] overflow-hidden border-y border-neutral-800 bg-neutral-950/60 py-3.5 backdrop-blur-sm">
      <div className="animate-ticker flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}
