import React from 'react'
import { useReveal } from '../hooks/useReveal'

const menuItems = [
  {
    id: 1,
    name: 'Velvet Black Espresso',
    category: 'Signature Coffee',
    description: 'Triple-shot single-origin espresso with notes of dark chocolate and toasted hazelnut.',
    price: '₹380',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=85',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Saffron Cardamom Latte',
    category: 'Specialty Drink',
    description: 'Steamed oat milk infused with hand-ground cardamom and pure saffron threads.',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=85',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Truffle Mushroom Toast',
    category: 'Savoury Bites',
    description: 'Sourdough topped with whipped ricotta, wild mushroom ragù and shaved black truffle.',
    price: '₹620',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=85',
    tag: 'Chef\'s Pick',
  },
  {
    id: 4,
    name: 'Gold Leaf Croissant',
    category: 'Patisserie',
    description: 'Laminated butter croissant with crème pâtissière, edible gold and caramelised almonds.',
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85',
    tag: 'Premium',
  },
  {
    id: 5,
    name: 'Cold Brew Tiramisu',
    category: 'Desserts',
    description: 'Deconstructed tiramisu with 18-hour cold brew jelly, mascarpone mousse and espresso dust.',
    price: '₹520',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85',
    tag: 'Seasonal',
  },
  {
    id: 6,
    name: 'Carnival Brunch Plate',
    category: 'Full Meals',
    description: 'Avocado eggs benedict, smoked salmon, grilled asparagus with hollandaise on brioche.',
    price: '₹890',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=85',
    tag: 'Weekend Special',
  },
]

const tagColors = {
  'Bestseller': 'bg-gold/20 text-gold border-gold/30',
  'New': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  "Chef's Pick": 'bg-amber-700/20 text-amber-400 border-amber-600/20',
  'Premium': 'bg-gold/15 text-gold-light border-gold/20',
  'Seasonal': 'bg-rose-500/10 text-rose-300 border-rose-400/20',
  'Weekend Special': 'bg-purple-500/10 text-purple-300 border-purple-400/20',
}

export default function Menu() {
  useReveal()

  return (
    <section id="menu" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)]" />

      {/* Top divider */}
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line w-12 block" />
            <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Curated Selection</span>
            <span className="gold-line w-12 block" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-5">
            Menu <span className="italic text-gold-gradient">Highlights</span>
          </h2>
          <p className="font-body text-warm/60 text-lg max-w-lg mx-auto italic">
            Crafted with the finest ingredients, each dish is a celebration of flavour and artistry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className="menu-card group relative glass border border-white/5 hover:border-gold/25 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] reveal overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-img w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark via-espresso-dark/20 to-transparent" />

                {/* Tag */}
                <div className={`absolute top-4 right-4 border font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1 ${tagColors[item.tag] || 'bg-gold/20 text-gold border-gold/30'}`}>
                  {item.tag}
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-warm/50">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-300 leading-tight pr-4">
                    {item.name}
                  </h3>
                  <span className="font-display text-gold text-lg whitespace-nowrap">{item.price}</span>
                </div>

                <p className="font-body text-warm/55 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-200">
                    Add to Order →
                  </button>
                </div>
              </div>

              {/* Bottom gold shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-gold/40 text-gold font-sans text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold hover:text-espresso-dark transition-all duration-300"
          >
            View Full Menu
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  )
}
