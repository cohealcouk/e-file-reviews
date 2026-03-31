import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'E-file Reviews',
    short_name: 'E-file Reviews',
    description: 'Independent reviews of professional e-files and micromotors for beauty, podiatry and dental/prosthetic workflows.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f766e',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
