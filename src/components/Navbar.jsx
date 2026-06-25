import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" className="text-lg font-semibold text-emerald-400">
          AR
        </a>
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive = activeId === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-1 text-sm transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-1/2 top-full h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400 transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
