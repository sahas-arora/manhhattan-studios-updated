export interface Service {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: string[];
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Luxury Residential Interiors',
    shortDescription:
      'Bespoke interior design for homes that feel considered, not decorated.',
    description:
      'We design residences from first principle — understanding how a family lives, moves and rests before a single wall is drawn. Every plan, material and detail is tailored to the people who will inhabit it. From apartments to independent villas, the result is a home that feels inevitable, as though it could not have been designed any other way.',
    image:
      'https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1600',
    includes: [
      'Space planning and layout development',
      'Material and finish selection',
      'Custom furniture and joinery design',
      'Lighting design and specification',
      'Art and object curation',
      '3D visualisation and presentation drawings',
    ],
  },
  {
    number: '02',
    title: 'Turnkey Solutions',
    shortDescription:
      'Design, procurement, execution and styling — one team, one accountability.',
    description:
      'Turnkey means we take the project from an empty shell to a styled, move-in-ready home. Our in-house team of craftspeople, project managers and procurement specialists handle every stage, so there is never a gap between the design intent and what gets built. One contract, one timeline, one point of responsibility — and no finger-pointing.',
    image:
      'https://images.pexels.com/photos/6903160/pexels-photo-6903160.jpeg?auto=compress&cs=tinysrgb&w=1600',
    includes: [
      'Complete execution management',
      'Civil, electrical and plumbing works',
      'Custom furniture manufacturing',
      'Procurement and logistics',
      'Quality control and site supervision',
      'Defect liability and handover',
    ],
  },
  {
    number: '03',
    title: 'Modern Home Styling',
    shortDescription:
      'The finishing layer — furniture, textiles, lighting and art that elevate.',
    description:
      'For homes that are architecturally complete but feel unfinished, we provide the styling layer that turns a space into a home. This is about restraint — the right chair, the right lamp, the right object in the right place. We work with your existing architecture and furniture where possible, introducing curated pieces that bring warmth, depth and a sense of having been lived in.',
    image:
      'https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg?auto=compress&cs=tinysrgb&w=1600',
    includes: [
      'Furniture selection and sourcing',
      'Soft furnishings and textiles',
      'Lighting and ambiance design',
      'Art curation and placement',
      'Styling and accessorising',
      'Final photography coordination',
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What is your typical budget range?',
    answer:
      'Our projects typically range from ₹3,500 to ₹6,000 per square foot for full turnkey interiors, depending on the level of customisation and material specification. For styling-only engagements, budgets are structured per room. We are transparent about costs from the first conversation and provide a detailed estimate before any commitment.',
  },
  {
    question: 'What timelines should I expect?',
    answer:
      'A full turnkey apartment (2,500–4,000 sq ft) typically takes 5–7 months from design sign-off to handover. Villas and larger penthouses can take 8–14 months depending on scope. Styling-only projects are usually completed in 4–8 weeks. We provide a milestone-based schedule at the start of every project.',
  },
  {
    question: 'How does the turnkey model work?',
    answer:
      'Turnkey means we handle everything — design, procurement, execution, and final styling — under a single contract. You deal with one team, one timeline and one point of accountability. There are no separate contractors to coordinate and no gaps between design and execution. We hand you the keys to a finished, styled home.',
  },
  {
    question: 'Can you work with my existing furniture?',
    answer:
      'Yes. For styling projects, we frequently integrate existing pieces that have meaning or quality. We will assess what works, what can be reupholstered or refinished, and what should be replaced. The goal is a cohesive home, not a showroom of new things.',
  },
  {
    question: 'Do you take projects outside Gurugram?',
    answer:
      'Our primary focus is Delhi NCR and Gurugram, where our in-house execution team is based. We do take select projects in other cities for design-only or styling engagements, and we have completed turnkey projects in South Delhi and Noida. Please reach out to discuss your location.',
  },
];
