import type { ImageMetadata } from 'astro';

export interface Experience {
  year: number;
  organization: string;
  role: string;
}

/** Shown on the About page, in this order. */
export const experience: Experience[] = [
  { year: 2025, organization: 'Rocket Mortgage', role: 'Product Design Intern' },
  { year: 2025, organization: 'Pratt Institute Libraries', role: 'Digital Designer (GA)' },
  { year: 2024, organization: 'Center for Digital Experiences', role: 'Product Consultant' },
  { year: 2024, organization: 'Asian CineVision', role: 'Product Design Intern' },
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
