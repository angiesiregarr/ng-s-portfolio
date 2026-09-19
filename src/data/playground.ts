export interface PlaygroundItem {
  id: string
  title: string
  subtitle: string
  image: string
  objectPosition?: string
  href?: string
}

export const playgroundItems: PlaygroundItem[] = [
  {
    id: 'capital-flex',
    title: 'Capital Flex',
    subtitle: 'Brand identity',
    image: '/images/playground/capital-flex.jpg',
    objectPosition: 'center',
  },
  {
    id: 'aralia-flow',
    title: 'Aralia',
    subtitle: 'Flow & system mapping',
    image: '/images/playground/aralia-flow.jpg',
    objectPosition: 'left center',
  },
  {
    id: 'fave',
    title: 'Fave',
    subtitle: 'Pattern library',
    image: '/images/playground/fave.jpg',
    objectPosition: 'center',
  },
  {
    id: 'im-perfect',
    title: "I'm Perfect",
    subtitle: 'Beauty app concept',
    image: '/images/playground/im-perfect.png',
    objectPosition: 'center top',
  },
  {
    id: 'aaron',
    title: 'Aaron',
    subtitle: 'Character study',
    image: '/images/playground/aaron.png',
    objectPosition: 'center',
  },
  {
    id: 'zephyr',
    title: 'Zephyr',
    subtitle: 'Visual exploration',
    image: '/images/playground/zephyr.png',
    objectPosition: 'center',
  },
]
