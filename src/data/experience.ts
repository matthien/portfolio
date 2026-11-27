import type { ImageMetadata } from 'astro';
import graduation from '../assets/about/graduation.jpg';
import charlieBrown from '../assets/about/charlie-brown.png';
import hood from '../assets/about/hood.png';
import popcorn from '../assets/about/popcorn.png';
import hanbok from '../assets/about/hanbok.png';
import cookies from '../assets/about/cookies.png';
import lake from '../assets/about/lake.png';
import amc from '../assets/about/amc.jpg';
import intermezzo from '../assets/about/intermezzo.png';

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
 * While this list is empty, the page shows 9 grey placeholder squares.
 *
 * Example:
 *   import subway from '../assets/about/subway.jpg';
 *   { src: subway, alt: 'Matt reading on the 7 train' },
 */
export const photos: Photo[] = [
  {
    src: graduation,
    alt: 'Matt in a graduation gown and hood, flashing a peace sign on Sixth Avenue with the Radio City Music Hall sign behind',
  },
  {
    src: charlieBrown,
    alt: 'A Charlie Brown figure in a red spacesuit waving from the porthole of a weathered white capsule',
  },
  { src: hood, alt: 'Close-up selfie of Matt with a grey hood pulled up under a tree' },
  { src: popcorn, alt: 'A cup of buttered popcorn from CGV on a wooden table' },
  {
    src: hanbok,
    alt: 'Matt smiling in a navy hanbok and a black gat hat beside a traditional Korean palace building',
  },
  { src: cookies, alt: 'A hand holding a box of Insomnia Cookies' },
  { src: lake, alt: 'Matt standing on a rocky shore in front of a lake and a mountain on an overcast day' },
  {
    src: amc,
    alt: 'The red AMC sign over a theater marquee showing Project Hail Mary, against a blue sky',
  },
  { src: intermezzo, alt: 'A hand holding a copy of Intermezzo by Sally Rooney in a bookstore' },
];
