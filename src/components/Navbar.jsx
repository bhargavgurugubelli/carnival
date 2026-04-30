import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-blur shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-display text-2xl text-gold tracking-widest uppercase">Carnival</span>
          <span className="font-sans text-[9px] tracking-[0.35em] text-warm uppercase ml-0.5">Cafe & Patisserie</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-sans text-xs tracking-[0.2em] uppercase text-warm/70 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#menu"
          onClick={(e) => handleClick(e, '#menu')}
          className="hidden md:inline-flex items-center gap-2 border border-gold/50 text-gold font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-gold hover:text-espresso transition-all duration-300"
        >
          Reserve Table
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden navbar-blur border-t border-gold/10 transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-8 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-sans text-xs tracking-[0.25em] uppercase text-warm/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="inline-block border border-gold/50 text-gold font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 mt-2"
            >
              Reserve Table
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
