import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#22d3ee] font-mono text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10">
            Open to new opportunities, freelance projects, and collaborations. My inbox is always open.
          </p>

          <a href={`mailto:${personalInfo.email}`}>
            <Button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-slate-900 font-semibold px-8 py-6 text-base">
              <Mail className="h-5 w-5 mr-2" />
              Say Hello
            </Button>
          </a>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
