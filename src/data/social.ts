export interface SocialLink {
  label: string;
  href: string;
  /** Open in a new tab (web profiles). Email opens the mail app instead. */
  external: boolean;
}

/** Contact links at the bottom of the sidebar and the mobile menu, in this order. */
export const social: SocialLink[] = [
  { label: 'Email', href: 'mailto:mthien819@gmail.com', external: false },
  { label: 'Twitter', href: 'https://x.com/uxdmatthew', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mthien819/', external: true },
];
