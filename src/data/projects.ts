export type ProjectCategory = 'Villas' | 'Apartments' | 'Penthouses' | 'Styling';

export interface ProjectGalleryImage {
  url: string;
  alt: string;
  layout: 'full' | 'pair';
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  typology: string;
  year: string;
  size: string;
  scope: string;
  photography: string;
  cover: string;
  thumbnail: string;
  brief: string;
  approach: string;
  pullQuote: string;
  gallery: ProjectGalleryImage[];
}

export const projects: Project[] = [
  {
    slug: 'dlf-phase-5-penthouse',
    title: 'The Magnolia Penthouse',
    location: 'DLF Phase 5, Gurugram',
    category: 'Penthouses',
    typology: '3BHK Penthouse, DLF Phase 5',
    year: '2025',
    size: '3,800 sq ft',
    scope: 'Turnkey Interiors & Styling',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'A young family returning from a decade in London wanted a penthouse that felt grounded, warm and unmistakably theirs — not a showroom, but a home that could absorb the texture of daily life.',
    approach:
      'We softened the double-height volume with limewash walls and oak millwork, letting natural light do the heavy lifting. The living area reads as one continuous gesture — dining, lounge and kitchen in conversation rather than division. Every joinery detail was drawn in-house and built by our craftspeople.',
    pullQuote:
      'They handed us a shell and gave us back a home that feels like it was always ours.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Dining area with marble table and warm lighting',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/6903160/pexels-photo-6903160.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Kitchen with warm wood cabinetry',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/39759238/pexels-photo-39759238.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Primary bedroom in warm neutral tones',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/7722165/pexels-photo-7722165.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Marble bathroom with freestanding tub',
        layout: 'full',
      },
    ],
  },
  {
    slug: 'golf-course-villa',
    title: 'The Golf Course Road Villa',
    location: 'Golf Course Road, Gurugram',
    category: 'Villas',
    typology: '5BHK Independent Villa',
    year: '2024',
    size: '6,200 sq ft',
    scope: 'Architecture Refit & Full Turnkey',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'A multi-generational family with a deep collection of Indian art needed a villa that could hold both quiet weekends and large gatherings without compromising either.',
    approach:
      'We restructured the ground floor to create a single 40-foot living volume, anchored by a monolithic stone fireplace. The art collection dictated the wall palette — everything recedes so the work can speak. A separate service wing keeps the home running invisibly.',
    pullQuote:
      'The house finally has a pulse. It breathes with us.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Living room with beige sofas and elegant lighting',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/15758636/pexels-photo-15758636.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Minimalist staircase in warm wood',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/27164978/pexels-photo-27164978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Dining room with modern furniture',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/8146212/pexels-photo-8146212.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Marble kitchen with pendant lighting',
        layout: 'full',
      },
    ],
  },
  {
    slug: 'magnolia-apartment',
    title: 'The Magnolia Apartment',
    location: 'DLF Magnolia, Gurugram',
    category: 'Apartments',
    typology: '4BHK Apartment, DLF Magnolia',
    year: '2024',
    size: '2,900 sq ft',
    scope: 'Interior Design & Styling',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/34377945/pexels-photo-34377945.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/34377945/pexels-photo-34377945.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'Two doctors with irregular hours needed an apartment that felt restorative — a space that could be both sanctuary and practical family base.',
    approach:
      'We removed all overhead lighting in favour of layered indirect sources, creating a calm that carries from morning to night. Materiality was kept deliberately limited — oak, travertine, linen — so the eye never stumbles.',
    pullQuote:
      'Coming home now genuinely feels like exhaling.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/34377945/pexels-photo-34377945.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Living room with chandelier and contemporary furniture',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/13722860/pexels-photo-13722860.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bedroom with minimalist warm tones',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/7534564/pexels-photo-7534564.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bathroom with elegant sink and mirror',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Dining room with marble table',
        layout: 'full',
      },
    ],
  },
  {
    slug: 'aralias-residence',
    title: 'The Aralias Residence',
    location: 'DLF Aralias, Gurugram',
    category: 'Penthouses',
    typology: 'Penthouse, DLF Aralias',
    year: '2025',
    size: '4,500 sq ft',
    scope: 'Turnkey Interiors',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'A couple relocating from Singapore wanted a penthouse that bridged tropical modernism with the warmth of a North Indian home.',
    approach:
      'We introduced teak and cane detailing alongside large-format marble, creating a layered palette that feels both airy and rooted. The terrace was treated as an extension of the living room, with custom outdoor joinery and soft landscape lighting.',
    pullQuote:
      'It feels like a home that has travelled, which is exactly what we wanted.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Contemporary living room with minimalist furnishings',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bathroom with marble walls and clean bathtub',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/6903160/pexels-photo-6903160.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Kitchen with gray cupboards and flowers',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/28254549/pexels-photo-28254549.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Living room with luxurious decor and chandelier',
        layout: 'full',
      },
    ],
  },
  {
    slug: 'sushant-lok-townhouse',
    title: 'The Sushant Lok Townhouse',
    location: 'Sushant Lok, Gurugram',
    category: 'Villas',
    typology: '4BHK Townhouse, Sushant Lok',
    year: '2023',
    size: '3,100 sq ft',
    scope: 'Renovation & Turnkey',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/39829265/pexels-photo-39829265.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/39829265/pexels-photo-39829265.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'A writer and her family wanted to renovate a tired townhouse into something that felt curated rather than decorated — a backdrop for a life lived with intention.',
    approach:
      'We stripped back layers to reveal the structural bones, then rebuilt with honest materials: pigmented plaster, blackened steel, and reclaimed timber. The result is restrained but warm — a home that reads as a series of quiet moments.',
    pullQuote:
      'Every room has a stillness to it. It makes you want to slow down.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/39829265/pexels-photo-39829265.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Luxurious living room with stylish furniture',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/13722944/pexels-photo-13722944.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Bedroom with textured walls and ambient lighting',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/18517955/pexels-photo-18517955.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Curved staircase with warm wood tones',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/39829289/pexels-photo-39829289.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Dining room with marble table',
        layout: 'full',
      },
    ],
  },
  {
    slug: 'camellia-styling',
    title: 'The Camellia Styling Project',
    location: 'DLF Camellia, Gurugram',
    category: 'Styling',
    typology: 'Styling & Furnishing, DLF Camellia',
    year: '2025',
    size: '2,600 sq ft',
    scope: 'Furnishing, Styling & Art Curation',
    photography: '[Photography credit placeholder]',
    cover:
      'https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg?auto=compress&cs=tinysrgb&w=1920',
    thumbnail:
      'https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg?auto=compress&cs=tinysrgb&w=800',
    brief:
      'A family with a recently completed apartment wanted the finishing layer — furniture, textiles, lighting and art — to elevate the space from finished to felt.',
    approach:
      'We worked with the existing architectural shell, introducing a layered furniture plan, curated textiles, and a lighting scheme that transforms the space from day to evening. Six pieces of original art were sourced from emerging Delhi-based artists.',
    pullQuote:
      'It is the same apartment, but it finally has a soul.',
    gallery: [
      {
        url: 'https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Elegant living room with minimalist decor and warm lighting',
        layout: 'full',
      },
      {
        url: 'https://images.pexels.com/photos/39828898/pexels-photo-39828898.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Living room with elegant decor and chandelier',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/6782568/pexels-photo-6782568.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'Light bedroom with flowers and lamps',
        layout: 'pair',
      },
      {
        url: 'https://images.pexels.com/photos/27164978/pexels-photo-27164978.jpeg?auto=compress&cs=tinysrgb&w=1600',
        alt: 'Modern dining room',
        layout: 'full',
      },
    ],
  },
];

export const projectFilters: ('All' | ProjectCategory)[] = [
  'All',
  'Villas',
  'Apartments',
  'Penthouses',
  'Styling',
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
