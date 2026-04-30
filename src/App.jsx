import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-espresso-dark text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
