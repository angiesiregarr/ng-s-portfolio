export interface Capability {
  id: string
  title: string
  description: string
}

export const capabilities: Capability[] = [
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Editorial, conversion-focused pages that feel intentional.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Interfaces that balance craft with clear, usable logic.',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Logos, color, and type systems with a distinct point of view.',
  },
  {
    id: 'prototyping',
    title: 'Product Prototyping',
    description: 'High-fidelity flows that simulate real journeys.',
  },
  {
    id: 'front-end',
    title: 'Front-end & Framer',
    description: 'From design to shipped, interactive implementation.',
  },
  {
    id: 'ai-exploration',
    title: 'AI-assisted Exploration',
    description: 'Using AI to broaden concepts and speed up iteration.',
  },
]
