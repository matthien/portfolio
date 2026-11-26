import type { ImageMetadata } from 'astro';

export interface Experience {
  organization: string;
  role: string;
}

/** Shown on the About page, in this order. */
export const experience: Experience[] = [
  { organization: 'Rocket Mortgage', role: 'Product Design Intern' },
  { organization: 'Pratt Institute Libraries', role: 'Digital Designer (GA)' },
  { organization: 'Center for Digital Experiences', role: 'Product Consultant' },
  { organization: 'Asian CineVision', role: 'Product Design Intern' },
];

export interface Photo {
  src: ImageMetadata;
  /** Describe what is in the photo. Required. */
  alt: string;
}

/*
 * About page photos. Put the files in src/assets/about/, import each one
 * here, and add it to the list with its alt text. Photos are cropped square.
 * While this list is empty, the page shows 8 grey placeholder squares.
 *
 * Example:
 *   import subway from '../assets/about/subway.jpg';
 *   { src: subway, alt: 'Matt reading on the 7 train' },
 */
export const photos: Photo[] = [];
