import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, decimals = 0, duration = 2 }) {
  const [val, setVal] = useState(0)
  const ref           = useRef(null)
  const started       = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start     = performance.now()
        const step      = (ts) => {
          const progress = Math.min((ts - start) / (duration * 1000), 1)
          const eased    = 1 - Math.pow(1 - progress, 3)
          setVal(parseFloat((eased * end).toFixed(decimals)))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, decimals, duration])

  return <span ref={ref}>{val.toFixed(decimals)}</span>
}
