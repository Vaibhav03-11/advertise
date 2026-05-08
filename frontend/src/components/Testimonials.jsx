import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name:     'Rajesh Mehta',
    role:     'Jewelry Shop Owner, Surat',
    initials: 'RM',
    color:    '#D4AF37',
    rating:   5,
    text:     'JewelStack has completely transformed how I run my shop. Earlier I used to spend 2 hours daily on inventory — now it\'s done in minutes. The gold purity scanner alone saved me from multiple costly errors.',
  },
  {
    name:     'Priya Goldsmith',
    role:     'Master Goldsmith & Artisan, Jaipur',
    initials: 'PG',
    color:    '#B4A0E5',
    rating:   5,
    text:     'As a goldsmith, tracking which alloy compositions I use for different orders was a nightmare. JewelStack\'s purity module is incredibly accurate. I recommend it to every artisan I know.',
  },
  {
    name:     'Suresh Kumar',
    role:     'Retail Jewelry Store, Chennai',
    initials: 'SK',
    color:    '#4CAF82',
    rating:   5,
    text:     'The AI diamond price prediction feature is mind-blowing. I was skeptical at first, but it\'s been within 2-3% of actual market value every time. My customers trust my quotes now because they\'re data-backed.',
  },
  {
    name:     'Meena Shah',
    role:     'Online Jewelry Retailer, Mumbai',
    initials: 'MS',
    color:    '#F0A500',
    rating:   5,
    text:     'Managing 300+ SKUs manually was killing me. JewelStack\'s inventory tracking with real-time alerts changed everything. I finally have confidence that my books match my physical stock.',
  },
  {
    name:     'Arun Pandey',
    role:     'Traditional Goldsmith, Varanasi',
    initials: 'AP',
    color:    '#A8D8EA',
    rating:   5,
    text:     'I was reluctant to use digital tools — I\'m 58 years old! But JewelStack is so simple and intuitive. My grandson helped me set it up and I haven\'t looked back. It\'s perfect for traditional jewelers like me.',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((idx + 1) % testimonials.length)

  const t = testimonials[idx]

  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="glow-orb w-96 h-96 right-0 top-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">✦ Testimonials</span>
          <h2 className="font-display font-bold mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Trusted by{' '}
            <span className="text-gold-gradient">Real Jewelry Professionals</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-4xl p-8 lg:p-12"
              style={{ border: '1px solid rgba(212,175,55,0.15)' }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-gold-DEFAULT/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-DEFAULT text-gold-DEFAULT" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-light italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-obsidian text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #A07820)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-white/60 hover:text-gold-DEFAULT transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === i ? 'w-6 h-2 bg-gold-DEFAULT' : 'w-2 h-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="glass w-11 h-11 rounded-full flex items-center justify-center text-white/60 hover:text-gold-DEFAULT transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
