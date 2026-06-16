export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" className="text-teal-400 font-semibold text-lg tracking-wide">
          AR
        </a>
        <div className="flex gap-8">
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-400 hover:text-neutral-100 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
