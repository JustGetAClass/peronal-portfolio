import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5,  suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 3,  suffix: '',  label: 'Industries Served' },
]

function useCounter(target: number, started: boolean, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, started, duration])

  return count
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCounter(value, started)
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold" style={{ color: '#22d3ee' }}>
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm mt-2">{label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-12 border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-8"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
