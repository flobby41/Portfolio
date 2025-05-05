import React from 'react';
import Work from '@/components/home/Work';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'My Work | Florian - Web Developer',
  description: 'From interaction design to scaleable design systems, single-page apps to more experimental projects. Learn about my approach to web development.',
}

export default function WorkPage() {
  <Navbar/>
  return <Work />;
}