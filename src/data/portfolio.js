// ----------------------------------------------------------------------------
// Edit this file to swap in real content. Everything the page renders — the
// designer's name, the projects, the tags, the contact links — lives here.
// ----------------------------------------------------------------------------

export const designer = {
  name: 'NOVA KANE',
  tagline: 'PRODUCT DESIGNER',
  issue: 'ISSUE #1',
  blurb: 'Ten years turning tangled problems into interfaces people actually enjoy.',
}

// Tag → color. Add or rename freely; unknown tags fall back to ink black.
export const tagColors = {
  New: '#e63946',
  AI: '#1d75c9',
  Enterprise: '#f1b211',
  Mobile: '#2a9d4a',
  'Design System': '#8a3ffc',
  '0→1': '#e63946',
  Research: '#1d75c9',
  Award: '#f1b211',
}

// size: 'sm' | 'md' | 'lg' | 'wide'  → grid spans (see ComicGrid)
// bubble: 'speech' | 'thought'
export const projects = [
  {
    id: 'aurora',
    title: 'Project Aurora',
    blurb: 'Reimagined the onboarding flow and lifted activation by 38%.',
    tags: ['New', 'AI'],
    bubble: 'speech',
    size: 'lg',
  },
  {
    id: 'ledger',
    title: 'Ledger OS',
    blurb: 'A finance dashboard that 12,000 analysts log into every morning.',
    tags: ['Enterprise'],
    bubble: 'speech',
    size: 'md',
  },
  {
    id: 'pocket',
    title: 'Pocket Atlas',
    blurb: 'Offline-first travel companion for the wandering kind.',
    tags: ['Mobile', '0→1'],
    bubble: 'thought',
    size: 'md',
  },
  {
    id: 'forge',
    title: 'Forge',
    blurb: 'The design system that unified 9 product teams under one language.',
    tags: ['Design System', 'Enterprise'],
    bubble: 'speech',
    size: 'wide',
  },
  {
    id: 'echo',
    title: 'Echo',
    blurb: 'Voice-driven notes app — research, prototyping, and a shiny award.',
    tags: ['AI', 'Award'],
    bubble: 'thought',
    size: 'md',
  },
  {
    id: 'tidepool',
    title: 'Tidepool',
    blurb: 'Field study that reshaped how clinicians read patient data.',
    tags: ['Research'],
    bubble: 'speech',
    size: 'sm',
  },
]

export const contact = {
  email: 'hello@novakane.design',
  links: [
    { label: 'Dribbble', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Read.cv', href: '#' },
  ],
}
