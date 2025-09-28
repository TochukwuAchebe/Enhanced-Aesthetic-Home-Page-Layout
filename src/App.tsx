import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Creator } from './pages/Creator';
import { Resume } from './pages/Resume';
import { Trust } from './pages/Trust';
import { ThisIs30 } from './pages/blogposts/ThisIs30';
import { AcceptingPayments } from './pages/blogposts/AcceptingPayments';
import { WhatIsAnAPI } from './pages/blogposts/WhatIsAnAPI';
import { CreatingForFuture } from './pages/blogposts/CreatingForFuture';
import { IntentionalLiving } from './pages/blogposts/IntentionalLiving';
import { StopTheKilling } from './pages/blogposts/StopTheKilling';
import { PowerOfDreams } from './pages/blogposts/PowerOfDreams';
import { APIIntegration101 } from './pages/blogposts/APIIntegration101';
import { APIAsProduct } from './pages/blogposts/APIAsProduct';
import { SeedToolSteward } from './pages/blogposts/SeedToolSteward';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/blog/this-is-30" element={<ThisIs30 />} />
          <Route path="/blog/accepting-payments" element={<AcceptingPayments />} />
          <Route path="/blog/what-is-an-api" element={<WhatIsAnAPI />} />
          <Route path="/blog/creating-for-future" element={<CreatingForFuture />} />
          <Route path="/blog/intentional-living" element={<IntentionalLiving />} />
          <Route path="/blog/stop-the-killing" element={<StopTheKilling />} />
          <Route path="/blog/power-of-dreams" element={<PowerOfDreams />} />
          <Route path="/blog/api-integration-101" element={<APIIntegration101 />} />
          <Route path="/blog/api-as-product" element={<APIAsProduct />} />
          <Route path="/blog/seed-tool-steward" element={<SeedToolSteward />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>;
}