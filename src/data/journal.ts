export interface JournalEntry {
  id: string
  title: string
  date: string
  readTime: string
  image: string
  href?: string
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'design-thinking',
    title: 'Design thinking without the theatre',
    date: 'Aug 2026',
    readTime: '6 min read',
    image: '/images/journal/cover.jpg',
  },
  {
    id: 'usability-over-decoration',
    title: 'Why usability beats decoration',
    date: 'Jul 2026',
    readTime: '5 min read',
    image: '/images/journal/sagara.jpg',
  },
  {
    id: 'wireframe-to-launch',
    title: 'From wireframe to launch: a product walkthrough',
    date: 'Jun 2026',
    readTime: '7 min read',
    image: '/images/journal/landing.jpg',
  },
  {
    id: 'fewer-better-screens',
    title: 'The case for fewer, better screens',
    date: 'May 2026',
    readTime: '4 min read',
    image: '/images/journal/poster.jpg',
  },
]
