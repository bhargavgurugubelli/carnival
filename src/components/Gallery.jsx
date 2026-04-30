import React from 'react'
import { useReveal } from '../hooks/useReveal'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85',
    alt: 'Coffee art',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=600&q=85',
    alt: 'Pastry display',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85',
    alt: 'Gourmet food',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85',
    alt: 'Espresso pour',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=85',
    alt: 'Cafe interior',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=85',
    alt: 'Cafe ambiance',
    span: '',
  },
]

export default function Gallery() {
  useReveal()

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 reveal">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="gold-line w-10 block" />
              <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Visual Journey</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
              Moments of<br />
              <span className="italic text-gold-gradient">Pure Indulgence</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="font-body text-warm/55 text-lg italic leading-relaxed">
              Every frame tells the story of a cafe that lives for the love of food, art, and the joy of togetherness.
            </p>
          </div>
        </div>

        {/* Masonry-inspired grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden group reveal ${img.span}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-espresso-dark/0 group-hover:bg-espresso-dark/40 transition-all duration-500" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />

              {/* Corner accents on hover */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-14 reveal">
          <p className="font-sans text-xs text-warm/40 tracking-[0.3em] uppercase mb-4">
            Follow our story
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-warm/60 hover:text-gold font-sans text-sm tracking-wider transition-colors duration-300 group"
          >
            <span className="text-xl">◈</span>
            @carnivalcafe
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
