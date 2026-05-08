import { motion } from 'framer-motion'
import {
  Package, Zap, Diamond, ClipboardList,
  Users, BarChart3, Shield, Smartphone,
} from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Smart Inventory Tracking',
    desc:  'Real-time jewelry inventory with instant stock alerts, barcode scanning & multi-location support. Never miss a single piece.',
    color: '#D4AF37',
    glow:  'rgba(212,175,55,0.2)',
  },
  {
    icon: Zap,
    title: 'Gold Purity Analysis',
    desc:  'Automatic 24K, 22K, 18K purity analysis with alloy composition breakdowns & fineness metrics at your fingertips.',
    color: '#FFD700',
    glow:  'rgba(255,215,0,0.2)',
  },
  {
    icon: Diamond,
    title: 'AI Diamond Price Prediction',
    desc:  'Machine-learning powered diamond valuation using cut, color, clarity & carat. Get instant ML-driven market pricing.',
    color: '#A8D8EA',
    glow:  'rgba(168,216,234,0.2)',
  },
  {
    icon: ClipboardList,
    title: 'Order Management',
    desc:  'End-to-end order workflows from creation to delivery. Automated pricing, payment tracking & order history all in one view.',
    color: '#F0A500',
    glow:  'rgba(240,165,0,0.2)',
  },
  {
    icon: Users,
    title: 'Customer Management',
    desc:  'Build lasting relationships with rich customer profiles, purchase history, preferences & loyalty insights.',
    color: '#B4A0E5',
    glow:  'rgba(180,160,229,0.2)',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Insights',
    desc:  'Business analytics dashboard with live gold-rate based calculations, revenue trends & market intelligence.',
    color: '#4CAF82',
    glow:  'rgba(76,175,130,0.2)',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    desc:  'Firebase-backed enterprise-grade security with biometric login, encrypted data & role-based access control.',
    color: '#FF6B6B',
    glow:  'rgba(255,107,107,0.2)',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    desc:  'Designed for goldsmiths on-the-go. Offline support, Flutter-native performance & intuitive touch-first UI.',
    color: '#D4AF37',
    glow:  'rgba(212,175,55,0.2)',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">✦ Platform Features</span>
          <h2 className="font-display font-bold mt-4 mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Everything Your{' '}
            <span className="text-gold-gradient">Jewelry Business</span>
            <br />Needs in One App
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Purpose-built for goldsmiths, artisans &amp; retailers — JewelStack replaces
            10 manual processes with one intelligent platform.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc, color, glow }) {
  return (
    <div className="feature-card group h-full flex flex-col">
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: glow, border: `1px solid ${color}30` }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 20%, ${glow} 0%, transparent 60%)` }}
      />

      <h3 className="font-semibold text-white text-base mb-2 group-hover:text-gold-DEFAULT transition-colors">
        {title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed flex-1">{desc}</p>

      {/* Bottom accent line */}
      <div
        className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  )
}
