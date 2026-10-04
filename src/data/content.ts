export interface Testimonial {
  quote: string;
  name: string;
  locality: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'We had been through two designers before we found Manhhattan Studio. The difference was not just in the design — it was in the clarity. They told us what would work and what would not, and they were right about almost everything.',
    name: 'A. Mehta',
    locality: 'DLF Phase 5, Gurugram',
  },
  {
    quote:
      'The turnkey model saved us. We both work full-time and could not have managed separate contractors. One team, one timeline, and the home was delivered exactly as promised.',
    name: 'S. & R. Khanna',
    locality: 'DLF Magnolia, Gurugram',
  },
  {
    quote:
      'What surprised us most was the restraint. They kept removing things rather than adding them, and the house kept getting better. It feels calm in a way we did not know a home could.',
    name: 'P. Bhandari',
    locality: 'Sushant Lok, Gurugram',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We meet, listen, and understand how you live. This first conversation shapes everything that follows.',
  },
  {
    number: '02',
    title: 'Concept & Moodboards',
    description:
      'We translate the brief into a design direction — palette, materiality, spatial logic — and refine it with you.',
  },
  {
    number: '03',
    title: 'Design Development',
    description:
      'Drawings, 3D visualisation, material samples and detailed specifications. Every decision is made before execution begins.',
  },
  {
    number: '04',
    title: 'Turnkey Execution',
    description:
      'Our in-house team builds it. Civil works, custom joinery, MEP, procurement — all under one contract and one timeline.',
  },
  {
    number: '05',
    title: 'Styling & Handover',
    description:
      'Furniture, lighting, art and the final layer of objects. You receive a home that is ready to be lived in.',
  },
];

export interface ValueItem {
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    title: 'Restraint over excess',
    description:
      'We believe a home should breathe. We remove before we add, and we trust that less — done well — is more.',
  },
  {
    title: 'One point of accountability',
    description:
      'Turnkey is not a service we offer, it is how we think. One team owns the outcome from sketch to styling.',
  },
  {
    title: 'Material honesty',
    description:
      'We choose materials for how they age, not just how they photograph. Oak deepens, stone quiets, linen softens.',
  },
  {
    title: 'Built to be lived in',
    description:
      'A home is not a stage set. Every surface, joint and corner is designed to be touched, used and loved daily.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Sabina Arora',
    role: 'Principal Designer & Founder',
    bio: "Sabina Arora's journey into interior design began unexpectedly, with a home of her own that became her first project. What started as a personal endeavour soon grew into a deeper appreciation for the art of shaping spaces. Working alongside celebrated designers Nikhil Varma and Monica Chawla, she found herself drawn to the nuances of interior and furniture design. After a stint at Essentia, she went on to establish her own studio in 2019, bringing with her an instinctive approach to design, shaped by curiosity, collaboration, and a love for thoughtful living.",
    image:
      'https://images.pexels.com/photos/5292201/pexels-photo-5292201.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Anju',
    role: 'Senior Interior Designer',
    bio: 'A graduate of CEPT University, Anju leads the design development phase, translating concepts into precise, buildable drawings with a particular sensitivity to lighting and spatial flow.',
    image:
      'https://images.pexels.com/photos/5292233/pexels-photo-5292233.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  // {
  //   name: '[Project Lead Name]',
  //   role: 'Head of Execution',
  //   bio: 'With fifteen years on site across Delhi NCR, [Name] runs the turnkey execution arm — the discipline that turns our drawings into finished homes, on time and to specification.',
  //   image:
  //     'https://images.pexels.com/photos/5292204/pexels-photo-5292204.jpeg?auto=compress&cs=tinysrgb&w=800',
  // },
];
