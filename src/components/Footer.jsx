import React from 'react'

const socials = [
  { label: 'Instagram', href: '#', icon: '◈' },
  { label: 'Facebook', href: '#', icon: '◈' },
  { label: 'Twitter', href: '#', icon: '◈' },
  { label: 'Pinterest', href: '#', icon: '◈' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-espresso-dark border-t border-gold/10 overflow-hidden">
      {/* Top gold line */}
      <div className="gold-line" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid md:grid-cols-3 gap-14 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <span className="block font-display text-3xl text-gold tracking-widest uppercase">Carnival</span>
              <span className="block font-sans text-[9px] tracking-[0.35em] text-warm/40 uppercase mt-0.5 ml-0.5">Cafe & Patisserie</span>
            </div>
            <div className="gold-line w-12 mb-5" />
            <p className="font-body text-warm/45 text-sm italic leading-relaxed mb-8 max-w-xs">
              Where every cup tells a story and every bite is a celebration. Serving Chennai since 2018.
            </p>

            {/* Socials */}
            <div className="flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-warm/40 hover:border-gold/40 hover:text-gold transition-all duration-300 text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-sans text-xs text-warm/45 hover:text-gold tracking-wide transition-colors duration-300 uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-6">Stay Updated</h4>
            <p className="font-body text-warm/45 text-sm italic mb-5 leading-relaxed">
              Get early access to seasonal menus, events, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-white/10 text-cream font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/40 placeholder:text-warm/20 transition-colors duration-300"
              />
              <button className="border border-gold/40 border-l-0 px-5 text-gold text-xs font-sans tracking-widest uppercase hover:bg-gold hover:text-espresso-dark transition-all duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-line mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-warm/25 tracking-widest uppercase">
            © {new Date().getFullYear()} Carnival Cafe. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.slice(4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[10px] text-warm/25 hover:text-gold/60 tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-sans text-[10px] text-warm/20 tracking-widest uppercase">
            Crafted with ♥ in Chennai
          </p>
        </div>
      </div>
    </footer>
  )
}
