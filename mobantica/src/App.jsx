import React, { Suspense, lazy } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatBot from './components/ChatBot/ChatBot.jsx';

// Lazy loading the pages
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs.jsx'));
const Services = lazy(() => import('./pages/Services/Services.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy/CaseStudy.jsx'));
const HireDev = lazy(() => import('./pages/Hire Developer/HireDev.jsx'));
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'));
const Careers = lazy(() => import('./pages/Careers/Careers.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/caseStudy" element={<CaseStudy />} />
            <Route path="/hire-developer" element={<HireDev />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;


