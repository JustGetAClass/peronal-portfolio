import { useState, useEffect } from 'react'
import { Github, Linkedin, Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-[#22d3ee] hover:opacity-80 transition-opacity">
          {personalInfo.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-100">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-100">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-slate-900 font-semibold gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100"
          onClick={() => setMobileOpen(prev => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 px-4 pb-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-800 mt-2">
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-400 hover:text-slate-100" />
            </a>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-slate-100" />
            </a>
            <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" className="ml-auto">
              <Button size="sm" className="bg-[#22d3ee] hover:bg-[#06b6d4] text-slate-900 font-semibold gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
