import { useEffect, useRef, useState } from 'react'

// Returns a ref + `isVisible` flag that flips true the first time the element
// scrolls into view. Used to "pop" comic panels in. Motion itself is gated by
// CSS (prefers-reduced-motion), so this stays purely about visibility.
export function useReveal(options = { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
