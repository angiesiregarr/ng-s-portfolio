export interface JourneyEntry {
  id: string
  company: string
  role: string
  period: string
  location: string
  mode: string
  focus: string
}

export const journey: JourneyEntry[] = [
  {
    id: 'archipelago',
    company: 'Archipelago International',
    role: 'Executive, UI/UX Designer',
    period: 'June 2026 — Present',
    location: 'Jakarta, Indonesia',
    mode: 'Hybrid',
    focus: 'Web design, end-user training, and UI/UX delivery.',
  },
  {
    id: 'bisnis-indonesia',
    company: 'Bisnis Indonesia Group',
    role: 'UI/UX Designer',
    period: 'May 2025 — July 2026',
    location: 'Jakarta, Indonesia',
    mode: 'On-site',
    focus: 'Product design, graphic design, and user acceptance testing.',
  },
  {
    id: 'sagara',
    company: 'Sagara Technology',
    role: 'Project Manager / UI/UX Designer',
    period: 'July 2024 — July 2025',
    location: 'Jakarta, Indonesia',
    mode: 'Full-time',
    focus:
      'Research, wireframing, prototyping, project coordination, documentation, training, and UAT.',
  },
  {
    id: 'nematix',
    company: 'Nematix',
    role: 'Junior UI/UX Designer',
    period: 'January 2024 — October 2024',
    location: 'Selangor, Malaysia',
    mode: 'Full-time',
    focus: 'UI/UX design for digital products within a software-house environment.',
  },
]
