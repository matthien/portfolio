/*
 * Videos in src/assets, bundled with hashed file names like images are.
 * Content entries refer to them by path relative to src/assets.
 */
const videos = import.meta.glob<string>('../assets/**/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** Public URL of a video in src/assets. Fails the build if the file is missing. */
export function videoUrl(path: string): string {
  const url = videos[`../assets/${path}`];
  if (!url) throw new Error(`Video not found: src/assets/${path}`);
  return url;
}
