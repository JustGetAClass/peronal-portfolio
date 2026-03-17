import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/data'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#22d3ee] transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#22d3ee] transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 hover:text-[#22d3ee] transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
