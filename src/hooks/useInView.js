import { useEffect, useState } from 'react'

export function useInView(
  ref,
  { threshold = 0.18, rootMargin = '0px 0px -12% 0px' } = {},
) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [ref, rootMargin, threshold])

  return isInView
}
