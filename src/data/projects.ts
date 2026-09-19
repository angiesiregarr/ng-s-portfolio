export interface Project {
  id: string
  name: string
  category: string
  description: string
  image: string
  objectPosition?: string
  tags: string[]
  year: string
}

export const projects: Project[] = [
  {
    id: 'aralia',
    name: 'Aralia',
    category: 'Product Design',
    description:
      'End-to-end revamp of a digital pawn and gold experience for Pegadaian — clearer flows, a calmer hierarchy, and a system built to scale.',
    image: '/images/projects/aralia.jpg',
    tags: ['UX Research', 'UI Design', 'Prototyping'],
    year: '2025',
  },
  {
    id: 'ceo-suite',
    name: 'CEO SUITE',
    category: 'Dashboard & Data',
    description:
      'An executive dashboard translating dense operational data into a focused, scannable surface for leadership decisions.',
    image: '/images/projects/ceo-suite.jpg',
    tags: ['Product Design', 'Data Viz', 'Design System'],
    year: '2024',
  },
  {
    id: 'ib-apps',
    name: 'IB APPS',
    category: 'Product Design',
    description:
      'Subscription and membership experience for Bisnis Indonesia — redesigning discovery, plans, and account management.',
    image: '/images/projects/ib-apps.jpg',
    tags: ['UI Design', 'Graphic Design', 'UAT'],
    year: '2026',
  },
  {
    id: 'sagara-learner',
    name: 'Sagara Learner',
    category: 'EdTech',
    description:
      'A learning platform concept focused on clarity and momentum — guiding learners from first lesson to real progress.',
    image: '/images/projects/sagara-learner.jpg',
    tags: ['Wireframing', 'Prototyping', 'Research'],
    year: '2025',
  },
  {
    id: 'vehicle-monitor',
    name: 'Vehicle Monitor',
    category: 'IoT & Mobility',
    description:
      'A monitoring dashboard for connected vehicles — live status, alerts, and controls surfaced with minimal friction.',
    image: '/images/projects/vehicle-monitor.jpg',
    objectPosition: 'center top',
    tags: ['UI Design', 'Interaction', 'Dashboard'],
    year: '2024',
  },
]
