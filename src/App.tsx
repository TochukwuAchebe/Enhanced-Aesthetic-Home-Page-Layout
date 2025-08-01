import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Affiliations } from './components/Affiliations';
import { Skills } from './components/Skills';
import { YouTubeStats } from './components/YouTubeStats';
import { LearnWithTochii } from './components/LearnWithTochii';
import { SelectedWork } from './components/SelectedWork';
import { ContentSection } from './components/ContentSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Affiliations />
        <Skills />
        <YouTubeStats />
        <SelectedWork />
        <LearnWithTochii />
        <ContentSection />
        <Testimonials />
      </main>
      <Footer />
    </div>;
}