import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { skills } from '@/data'

function TechPill({ name }: { name: string }) {
  return (
    <span className="mx-3 px-4 py-2 rounded-full bg-[#1e293b] border border-slate-700 text-slate-300 text-sm font-medium whitespace-nowrap">
      {name}
    </span>
  )
}

export function MarqueeSection() {
  return (
    <section id="skills" className="py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#22d3ee] font-mono text-sm uppercase tracking-widest mb-2">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technologies &amp; Tools</h2>
        </motion.div>
      </div>

      <div className="space-y-4" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
        <Marquee speed={40} className="py-2">
          {skills.map(skill => (
            <TechPill key={skill} name={skill} />
          ))}
        </Marquee>
        <Marquee speed={40} direction="right" className="py-2">
          {[...skills].reverse().map(skill => (
            <TechPill key={skill} name={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
