import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { timeline } from '@/data'

export function Timeline() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#22d3ee] font-mono text-sm uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Experience &amp; Education</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700 md:hidden" />

          <div className="space-y-12">
            {timeline.map((entry, index) => {
              const isWork = entry.type === 'work'
              const isLeft = index % 2 === 0
              const Icon = isWork ? Briefcase : GraduationCap
              const accentColor = isWork ? '#22d3ee' : '#a78bfa'

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile layout: icon on left */}
                  <div
                    className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center md:hidden"
                    style={{ borderColor: accentColor, backgroundColor: '#0f172a' }}
                  >
                    <Icon className="h-4 w-4" style={{ color: accentColor }} />
                  </div>

                  {/* Desktop: spacer on one side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />

                  {/* Desktop: center icon */}
                  <div
                    className="relative z-10 hidden md:flex flex-shrink-0 w-10 h-10 rounded-full border-2 items-center justify-center mx-4"
                    style={{ borderColor: accentColor, backgroundColor: '#0f172a' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accentColor }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 md:w-[calc(50%-2rem)]">
                    <Card className="bg-[#1e293b] border-slate-700 hover:border-slate-600 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-slate-100 font-semibold text-lg">{entry.title}</h3>
                            <p className="font-medium" style={{ color: accentColor }}>{entry.org}</p>
                          </div>
                          <span className="text-slate-400 text-sm whitespace-nowrap font-mono">{entry.period}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">{entry.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
