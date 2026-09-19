export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description:
      'Understand the context, users, business goals, and constraints before anything is drawn.',
  },
  {
    id: 'define',
    number: '02',
    title: 'Define',
    description:
      'Synthesize the findings and frame the primary problem worth solving.',
  },
  {
    id: 'ideate',
    number: '03',
    title: 'Ideate',
    description:
      'Explore flows, concepts, and possible solutions without settling too early.',
  },
  {
    id: 'design',
    number: '04',
    title: 'Design',
    description:
      'Create structured interfaces and a clear visual hierarchy that supports the goal.',
  },
  {
    id: 'prototype',
    number: '05',
    title: 'Prototype',
    description:
      'Simulate the important interactions and user journeys to feel the product.',
  },
  {
    id: 'validate',
    number: '06',
    title: 'Validate',
    description:
      'Test assumptions, gather feedback, and refine toward what actually works.',
  },
]
