export const personalInfo = {
  name: 'Mohamed Salat Gelle',
  title: 'Full Stack Developer & Software Engineer',
  bio: 'Full Stack Developer and Software Engineer with experience across web application development, IoT/telematics systems, and data analysis. Currently building asset-tracking and GPS-based solutions at WAW Technology. Microsoft intern alumnus. ALX-trained engineer. I bring a rare combination of deep technical skill and cross-domain perspective, from financial systems to connected hardware.',
  email: 'mohamedsalat62@gmail.com',
  githubUrl: 'https://github.com/JustGetAClass',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-salat/',
  cvUrl: '/cv.html',
}

export const skills = [
  'JavaScript', 'TypeScript', 'Python', 'React', 'Node.js', 'Next.js',
  'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'HTML', 'CSS',
  'TailwindCSS', 'GraphQL', 'REST APIs', 'Linux', 'AWS', 'Redis', 'Prisma',
]

export type TimelineEntry = {
  type: 'work' | 'education'
  title: string
  org: string
  period: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    type: 'work',
    title: 'Software & Solutions Engineer – Telematics',
    org: 'WAW Technology',
    period: 'Jan 2026 - Mar 2026',
    description: 'Telematics Solutions Engineer specializing in asset tracking and software development. Experienced in building and integrating IoT and GPS-based systems, developing backend services.',
  },
  {
    type: 'work',
    title: 'Lead IT and Forex Tech',
    org: 'Money Point Ltd.',
    period: 'Jun 2024 - Dec 2025',
    description: 'Led IT operations and forex technology initiatives. Applied IT management and data analysis skills to drive operational efficiency.',
  },
  {
    type: 'education',
    title: 'Software Engineering, Computer Software Engineering',
    org: 'ALX Academy',
    period: 'Jan 2022 - Apr 2023',
    description: 'Intensive software engineering program covering full-stack development, systems programming, and engineering best practices.',
  },
  {
    type: 'education',
    title: 'Google Data Analytics Professional Certificate',
    org: 'Google / Coursera',
    period: 'Apr 2024',
    description: 'Completed the Google Data Analytics Professional Certificate, covering data analysis, SQL, R programming, Tableau, and data-driven decision making.',
  },
  {
    type: 'work',
    title: 'Forex Trader & IT Tech',
    org: 'Money Point Ltd.',
    period: 'Sep 2023 - Jun 2024',
    description: 'Combined forex trading with IT technical support. Applied strong analytical skills to market analysis and system maintenance.',
  },
  {
    type: 'work',
    title: 'Freelance Full Stack Developer',
    org: 'Self Employed',
    period: 'Aug 2022 - Mar 2024',
    description: 'Developed fully responsive UI/UX web apps for clients and maintained them after deployment.',
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    org: 'Microsoft',
    period: 'Jan 2022 - Jun 2022',
    description: 'Software engineering internship at Microsoft, gaining experience in large-scale software development and engineering practices.',
  },
  {
    type: 'education',
    title: 'BASc, Computer Software Engineering',
    org: 'United States International University - Africa',
    period: 'Jan 2018 - Jan 2022',
    description: 'Bachelor of Applied Science in Computer Software Engineering. Gained a strong foundation in software design, algorithms, and systems development.',
  },
  {
    type: 'education',
    title: 'Bachelor of Medicine, Bachelor of Surgery – MBBS',
    org: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
    period: 'Jan 2017 - Dec 2017',
    description: 'Studied medicine with a focus on foundational medical sciences.',
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, payments via Stripe, and an admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop, team collaboration features, and real-time updates.',
    tags: ['Next.js', 'Prisma', 'TypeScript', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Real-time Chat',
    description: 'A scalable chat application supporting rooms, direct messages, file sharing, and emoji reactions.',
    tags: ['React', 'Socket.io', 'Express', 'Redis'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that generates beautiful portfolio sites from a simple JSON config. Built with Vite and React.',
    tags: ['Vite', 'React', 'TailwindCSS'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard with 7-day forecasts, location search, and animated weather icons.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
  {
    title: 'Blog CMS',
    description: 'A headless CMS for bloggers with MDX support, syntax highlighting, and SEO optimization built-in.',
    tags: ['Next.js', 'MDX', 'Vercel', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    featured: false,
  },
]
