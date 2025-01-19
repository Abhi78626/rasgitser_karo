// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './Component/Header';
import Section from './Component/Section';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import Home from './pages/home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Section/><div className="main-content">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
         
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
