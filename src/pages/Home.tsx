import React from 'react';
import { Hero } from '../components/Hero';
import { Affiliations } from '../components/Affiliations';
import { Skills } from '../components/Skills';
import { YouTubeStats } from '../components/YouTubeStats';
import { LearnWithTochii } from '../components/LearnWithTochii';
import { ContentSection } from '../components/ContentSection';
import { Testimonials } from '../components/Testimonials';
export function Home() {
  return <main className="flex-grow">
      <Hero />
      <Affiliations />
      <Skills />
      <YouTubeStats />
      <LearnWithTochii />
      <ContentSection />
      <Testimonials />
    </main>;
}