export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { id: 'experience', value: 20, suffix: '+', label: 'Years Experience' },
  { id: 'projects', value: 95, suffix: '+', label: 'Projects Done' },
  { id: 'clients', value: 200, suffix: '%', label: 'Satisfied Clients' },
]
