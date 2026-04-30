import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (el) {
      setTimeout(() => el.classList.add('visible'), 100)
    }
  }, [])

  const handleScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=90"
          alt="Carnival Cafe Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlays for richness */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/80 via-espresso/70 to-espresso-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-dark/60 via-transparent to-espresso-dark/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Floating orbs */}
      <div className="absolute top-32 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-amber-800/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Pre-heading */}
        <div
          className="reveal visible mb-6 flex items-center justify-center gap-4"
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="gold-line w-12 block" />
          <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">
            Est. 2018 · Premium Experience
          </span>
          <span className="gold-line w-12 block" />
        </div>

        {/* Main heading */}
        <div className="reveal" style={{ transitionDelay: '0.25s' }} ref={headingRef}>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-tight mb-2">
            <span className="block text-cream/95 italic">Carnival</span>
            <span className="block text-gold-gradient font-bold">Cafe</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="reveal" style={{ transitionDelay: '0.45s' }}>
          <p className="font-body text-xl md:text-2xl text-warm/80 italic tracking-wide mt-6 mb-2">
            Where Taste Meets Celebration
          </p>
        </div>

        {/* Decorative line */}
        <div className="reveal flex justify-center mt-6 mb-10" style={{ transitionDelay: '0.55s' }}>
          <div className="gold-line w-24" />
        </div>

        {/* Sub-description */}
        <div className="reveal" style={{ transitionDelay: '0.65s' }}>
          <p className="font-sans text-sm text-cream/50 tracking-[0.15em] uppercase max-w-md mx-auto mb-12">
            Artisanal brews · Handcrafted pastries · Curated dining
          </p>
        </div>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.8s' }}>
          <a
            href="#menu"
            onClick={(e) => handleScroll(e, '#menu')}
            className="group relative inline-flex items-center justify-center gap-3 bg-gold text-espresso-dark font-sans text-xs font-semibold tracking-[0.3em] uppercase px-10 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10">Explore Menu</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div className="absolute inset-0 bg-gold-light translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>

          <a
            href="#about"
            onClick={(e) => handleScroll(e, '#about')}
            className="inline-flex items-center justify-center gap-3 border border-cream/20 text-cream/70 font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 reveal" style={{ transitionDelay: '1s' }}>
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-warm">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-warm to-transparent animate-pulse" />
      </div>
    </section>
  )
}
