export interface SocialLink {
  label: string;
  href: string;
  /** Open in a new tab (web profiles). Email opens the mail app instead. */
  external: boolean;
}

/** Contact links at the bottom of the sidebar and the mobile menu, in this order. */
export const social: SocialLink[] = [
  { label: 'Email', href: 'mailto:[your email]', external: false },
  { label: 'Twitter', href: '[Twitter URL]', external: true },
  { label: 'LinkedIn', href: '[LinkedIn URL]', external: true },
];
