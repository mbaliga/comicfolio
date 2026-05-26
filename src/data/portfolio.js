// ----------------------------------------------------------------------------
// Edit this file to swap in real content. Everything the page renders — the
// designer's name, the work, the utility links, the contact info — lives here.
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

export const contact = {
  email: 'hello@novakane.design',
  links: [
    { label: 'Dribbble', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Read.cv', href: '#' },
  ],
}

// The comic page is one ordered list of panels. Array order = reading order =
// the order panels pop in on scroll. Each panel has a `kind`:
//   'project' — a case study in a speech/thought bubble (the default)
//   'cta'     — a utility "button" panel (résumé, LinkedIn, email)
//   'about'   — an origin-story narration box
//   'fx'      — a decorative sound-effect burst (purely cosmetic)
//
// Presentation hints shared by every kind:
//   size : 'sm' | 'md' | 'lg' | 'wide'  → grid spans 2 / 3 / 4 / 6 columns
//   tilt : degrees of static rotation (keep small for content; bold for fx)
//   shape: 'fold-tr' | 'fold-tl'        → clips a top corner into an angled panel
export const items = [
  {
    kind: 'project',
    id: 'aurora',
    title: 'Project Aurora',
    blurb: 'Reimagined the onboarding flow and lifted activation by 38%.',
    tags: ['New', 'AI'],
    bubble: 'speech',
    size: 'lg',
    tilt: -2,
    shape: 'fold-tr',
  },
  {
    kind: 'cta',
    id: 'cta-resume',
    variant: 'resume',
    label: 'GRAB THE CV',
    sublabel: 'PDF · 1 page',
    href: '#', // placeholder — drop in a real /resume.pdf later
    ariaLabel: 'Download résumé (PDF)',
    size: 'sm',
    tilt: 2,
  },
  {
    kind: 'project',
    id: 'ledger',
    title: 'Ledger OS',
    blurb: 'A finance dashboard that 12,000 analysts log into every morning.',
    tags: ['Enterprise'],
    bubble: 'speech',
    size: 'md',
    tilt: 1.5,
  },
  {
    kind: 'project',
    id: 'pocket',
    title: 'Pocket Atlas',
    blurb: 'Offline-first travel companion for the wandering kind.',
    tags: ['Mobile', '0→1'],
    bubble: 'thought',
    size: 'md',
    tilt: -1.5,
  },
  {
    kind: 'fx',
    id: 'fx-boom',
    text: 'BOOM!',
    color: '#e63946',
    size: 'sm',
    tilt: -8,
  },
  {
    kind: 'about',
    id: 'about-origin',
    title: 'ORIGIN STORY',
    body: 'Bitten by a radioactive Figma file at 22 — now I turn product chaos into clean, shippable design, one issue at a time.',
    size: 'md',
    tilt: 1,
  },
  {
    kind: 'project',
    id: 'forge',
    title: 'Forge',
    blurb: 'The design system that unified 9 product teams under one language.',
    tags: ['Design System', 'Enterprise'],
    bubble: 'speech',
    size: 'wide',
    tilt: -1,
    shape: 'fold-tl',
  },
  {
    kind: 'project',
    id: 'echo',
    title: 'Echo',
    blurb: 'Voice-driven notes app — research, prototyping, and a shiny award.',
    tags: ['AI', 'Award'],
    bubble: 'thought',
    size: 'md',
    tilt: 2,
  },
  {
    kind: 'cta',
    id: 'cta-linkedin',
    variant: 'linkedin',
    label: "LET'S CONNECT",
    sublabel: 'LinkedIn',
    href: '#', // placeholder — swap for your profile URL
    ariaLabel: 'Nova Kane on LinkedIn',
    size: 'sm',
    tilt: -2,
  },
  {
    kind: 'fx',
    id: 'fx-zap',
    text: 'ZAP!',
    color: '#1d75c9',
    size: 'sm',
    tilt: 7,
    overlap: true,
  },
  {
    kind: 'project',
    id: 'tidepool',
    title: 'Tidepool',
    blurb: 'Field study that reshaped how clinicians read patient data.',
    tags: ['Research'],
    bubble: 'speech',
    size: 'sm',
    tilt: 1.5,
  },
  {
    kind: 'cta',
    id: 'cta-email',
    variant: 'email',
    label: 'SAY HELLO',
    sublabel: contact.email,
    href: `mailto:${contact.email}`,
    ariaLabel: `Email ${contact.email}`,
    size: 'sm',
    tilt: -1.5,
  },
  {
    kind: 'fx',
    id: 'fx-pow',
    text: 'POW!',
    color: '#2a9d4a',
    size: 'sm',
    tilt: -6,
  },
]
