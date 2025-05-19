// components/Icons.tsx
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  tab?: string
  // You can add any custom props here if needed
  // For example:
  // color?: string;
  // size?: number;
}

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
  </svg>
);

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5a11.5 11.5 0 00-3.65 22.42c.58.11.79-.25.79-.56v-1.95c-3.2.7-3.88-1.54-3.88-1.54a3.07 3.07 0 00-1.28-1.68c-1.04-.71.08-.7.08-.7a2.42 2.42 0 011.76 1.19 2.45 2.45 0 003.34.95 2.45 2.45 0 01.73-1.53c-2.56-.29-5.25-1.28-5.25-5.7a4.47 4.47 0 011.19-3.1 4.16 4.16 0 01.11-3.06s.97-.31 3.18 1.18a10.93 10.93 0 015.69 0c2.21-1.5 3.18-1.18 3.18-1.18a4.16 4.16 0 01.11 3.06 4.47 4.47 0 011.19 3.1c0 4.43-2.7 5.41-5.26 5.7a2.73 2.73 0 01.78 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"/>
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.95 4.57a10 10 0 01-2.82.77 4.94 4.94 0 002.17-2.72 9.94 9.94 0 01-3.13 1.2 4.92 4.92 0 00-8.4 4.48A14 14 0 011.64 3.16 4.92 4.92 0 003.2 9.72a4.9 4.9 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.94 4.94 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.89 9.89 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14v-.6a10 10 0 002.4-2.58z"/>
  </svg>
);