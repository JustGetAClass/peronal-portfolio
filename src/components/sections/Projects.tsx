import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data'

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#22d3ee] font-mono text-sm uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full bg-[#1e293b] border-slate-700 hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] flex flex-col">
                <CardContent className="p-6 flex-1">
                  <h3 className="text-slate-100 font-semibold text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-slate-800 text-slate-300 border-slate-600 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-[#22d3ee] transition-colors text-sm"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-[#22d3ee] transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
