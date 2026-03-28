import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'E-file Reviews',
    short_name: 'E-file Reviews',
    description: 'Expert technical reviews of professional e-files and clinical equipment for UK healthcare professionals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#005EB8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
