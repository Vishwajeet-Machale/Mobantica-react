import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import Services from './pages/Services/Services.jsx';
import CaseStudy from './pages/CaseStudy/CaseStudy.jsx';
import HireDev from './pages/Hire Developer/HireDev.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Careers from './pages/Careers/Careers.jsx'
import About from './pages/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
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
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App

