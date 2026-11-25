export const site = {
  name: 'Matt Thien',
  url: 'https://matthewthien.com',
  footer: 'Matthew Thien © 2026',
  description:
    'Matt Thien is a product designer who designs and builds products that make complicated things easier to understand.',
  bio: [
    'is a product designer who designs and builds products that make complicated things easier to understand.',
    'Currently, working on Thoughtscape and solving problems at GMC Technologies. Previously, worked on products across Rocket Mortgage, Rocket Pro, and Hooked on Phonics.',
  ],
} as const;

export const nav = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Thoughtscape', href: '/thoughtscape' },
] as const;

/** "Work" stays active on case study pages (/work/[slug]). */
export function isActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (href === '/') return path === '/' || path === '/work' || path.startsWith('/work/');
  return path === href || path.startsWith(`${href}/`);
}
