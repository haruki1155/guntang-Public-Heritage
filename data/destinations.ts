export interface Destination {
  slug: string
  title: string
  location: string
  description: string
  details: string
  image: string
  imageAlt: string
}

export const destinations: Destination[] = [
  {
    slug: 'hundred-islands-national-park',
    title: 'Hundred Islands National Park',
    location: 'Alaminos City',
    description:
      'A famous collection of islands surrounded by blue waters, offering scenic views and outdoor activities.',
    details:
      'Hundred Islands National Park is Pangasinan’s best-known island destination. Cruise through its calm waters, visit the limestone islands, and enjoy a day of island hopping, swimming, kayaking, and panoramic viewpoints.',
    image: '/images/hundred-islands.jpg',
    imageAlt: 'Aerial view of the limestone islands and turquoise water of Hundred Islands National Park'
  },
  {
    slug: 'patar-beach',
    title: 'Patar Beach',
    location: 'Bolinao',
    description:
      'A relaxing coastal destination known for its sandy shore, clear water, and beautiful sunsets.',
    details:
      'Patar Beach is a favorite coastal escape in Bolinao, especially for its wide golden shore and memorable sunsets. Take a slow walk by the sea, explore nearby rock formations, or simply settle in for an unhurried afternoon.',
    image: '/images/patar-beach.jpg',
    imageAlt: 'Sandy shoreline and sunset view at Patar Beach in Bolinao'
  },
  {
    slug: 'manaoag-basilica',
    title: 'Minor Basilica of Our Lady of the Rosary of Manaoag',
    location: 'Manaoag',
    description:
      'A well-known pilgrimage destination visited by people who come to pray, attend Mass, and experience its religious heritage.',
    details:
      'The Minor Basilica of Our Lady of the Rosary of Manaoag is one of Pangasinan’s most important religious landmarks. Visitors come to pray, attend Mass, and appreciate the enduring faith and traditions that shape the town’s identity.',
    image: '/images/manaoag.jpg',
    imageAlt: 'Facade of the Minor Basilica of Our Lady of the Rosary of Manaoag'
  },
  {
    slug: 'bolinao-falls',
    title: 'Bolinao Falls',
    location: 'Bolinao',
    description:
      'A natural attraction with refreshing pools and lush surroundings that offers visitors a peaceful outdoor escape.',
    details:
      'Bolinao Falls welcomes visitors with cool natural pools, green surroundings, and the sound of falling water. It is a refreshing stop for travelers looking to connect with the quieter, more adventurous side of Pangasinan.',
    image: '/images/bolinao-falls.jpg',
    imageAlt: 'Waterfall cascading into a natural pool at Bolinao Falls'
  },
  {
    slug: 'cabongaoan-beach',
    title: 'Cabongaoan Beach',
    location: 'Burgos',
    description:
      'A scenic coastal destination featuring clear water, rock formations, and a quieter beach atmosphere.',
    details:
      'Cabongaoan Beach is a peaceful coastal destination in Burgos, known for its clear waters and striking rock formations. Its quieter atmosphere makes it a rewarding place to slow down, take photographs, and enjoy the coastline.',
    image: '/images/cabongaoan-beach.jpg',
    imageAlt: 'Coastline and rock formations at Cabongaoan Beach'
  }
]
