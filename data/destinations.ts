export interface Destination {
  title: string
  location: string
  description: string
  image: string
  imageAlt: string
}

export const destinations: Destination[] = [
  {
    title: 'Hundred Islands National Park',
    location: 'Alaminos City',
    description:
      'A famous collection of islands surrounded by blue waters, offering scenic views and outdoor activities.',
    image: '/images/hundred-islands.jpg',
    imageAlt: 'Aerial view of the limestone islands and turquoise water of Hundred Islands National Park'
  },
  {
    title: 'Patar Beach',
    location: 'Bolinao',
    description:
      'A relaxing coastal destination known for its sandy shore, clear water, and beautiful sunsets.',
    image: '/images/patar-beach.jpg',
    imageAlt: 'Sandy shoreline and sunset view at Patar Beach in Bolinao'
  },
  {
    title: 'Minor Basilica of Our Lady of the Rosary of Manaoag',
    location: 'Manaoag',
    description:
      'A well-known pilgrimage destination visited by people who come to pray, attend Mass, and experience its religious heritage.',
    image: '/images/manaoag.jpg',
    imageAlt: 'Facade of the Minor Basilica of Our Lady of the Rosary of Manaoag'
  },
  {
    title: 'Bolinao Falls',
    location: 'Bolinao',
    description:
      'A natural attraction with refreshing pools and lush surroundings that offers visitors a peaceful outdoor escape.',
    image: '/images/bolinao-falls.jpg',
    imageAlt: 'Waterfall cascading into a natural pool at Bolinao Falls'
  },
  {
    title: 'Cabongaoan Beach',
    location: 'Burgos',
    description:
      'A scenic coastal destination featuring clear water, rock formations, and a quieter beach atmosphere.',
    image: '/images/cabongaoan-beach.jpg',
    imageAlt: 'Coastline and rock formations at Cabongaoan Beach'
  }
]
