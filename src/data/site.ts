export const site = {
  name: 'Carmelita Angelica',
  shortName: 'CA',
  email: 'angiesiregar804@gmail.com',
  role: 'UI/UX Designer',
  tagline: 'Design that makes people look twice.',
  heroVideo:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_031045_0e1165dd-ab48-46e3-ad3d-5fe77f217647.mp4',
  heroPoster: '/images/hero-poster.jpg',
  linkedin: 'https://www.linkedin.com/in/carmelitaas/',
  dribbble: 'https://dribbble.com/carmelitaas',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Resume', href: '#resume' },
  { label: 'Say Hi', href: `mailto:${site.email}` },
] as const
