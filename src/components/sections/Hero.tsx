import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#22d3ee] font-mono text-lg mb-2"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold text-[#22d3ee] mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee] text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22d3ee] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22d3ee]" />
            </span>
            Open to Opportunities
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects">
            <Button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-slate-900 font-semibold px-8 py-6 text-base">
              View Projects
            </Button>
          </a>
          <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#22d3ee] text-[#22d3ee] hover:bg-[#22d3ee]/10 px-8 py-6 text-base"
            >
              Download CV
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <a href="#skills" className="text-slate-400 hover:text-[#22d3ee] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
