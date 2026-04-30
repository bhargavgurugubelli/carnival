import React from 'react'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: '⬡',
    title: 'Ethically Sourced Beans',
    desc: 'We partner directly with small-batch farms in Coorg, Chikmagalur, and Ooty — traceable from seed to cup.',
  },
  {
    icon: '⬡',
    title: 'Baked Fresh Every Day',
    desc: 'Our pastry team starts at 4 AM so every croissant, muffin, and cake is oven-fresh when you arrive.',
  },
  {
    icon: '⬡',
    title: 'Cosy, Curated Ambience',
    desc: 'Thoughtfully designed spaces — warm lighting, quiet corners, and handpicked music for your perfect escape.',
  },
  {
    icon: '⬡',
    title: 'Seasonal & Local Menu',
    desc: 'We update our menu every season to celebrate local harvests and give you something new to discover.',
  },
  {
    icon: '⬡',
    title: 'Expert Baristas',
    desc: 'Our baristas are trained in SCA-certified programs and participate in national competitions regularly.',
  },
  {
    icon: '⬡',
    title: 'Zero Compromise Service',
    desc: 'Warm, attentive, never hurried. We believe the experience of dining is as important as the food itself.',
  },
]

export default function WhyUs() {
  useReveal()

  return (
    <section id="why-us" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-espresso-dark" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            60deg,
            transparent,
            transparent 40px,
            rgba(201,168,76,1) 40px,
            rgba(201,168,76,1) 41px
          )`,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.07),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line w-12 block" />
            <span className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase">Our Promise</span>
            <span className="gold-line w-12 block" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-5">
            Why Guests <span className="italic text-gold-gradient">Choose Us</span>
          </h2>
          <p className="font-body text-warm/55 text-lg max-w-xl mx-auto italic">
            We don't just serve coffee. We craft rituals, create memories, and celebrate everyday moments.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group glass border border-white/5 p-8 hover:border-gold/25 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl text-gold/40 group-hover:text-gold transition-colors duration-500 mb-6">
                {r.icon}
              </div>
              <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                {r.title}
              </h3>
              <div className="w-8 h-px bg-gold/30 mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="font-body text-warm/55 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-20 reveal">
          <div className="glass border border-gold/15 px-8 md:px-16 py-10 grid md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/10">
            {[
              { num: '100%', label: 'Arabica Beans', sub: 'No blends, no compromises' },
              { num: '24/7', label: 'Freshness Guarantee', sub: 'Or we bake it again for you' },
              { num: '5★', label: 'Average Rating', sub: 'Across 2,800+ reviews' },
            ].map((s, i) => (
              <div key={i} className="text-center py-4 md:py-0 md:px-8">
                <div className="font-display text-4xl text-gold mb-2">{s.num}</div>
                <div className="font-sans text-xs text-cream/80 tracking-widest uppercase mb-1">{s.label}</div>
                <div className="font-body text-warm/40 text-sm italic">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  )
}
