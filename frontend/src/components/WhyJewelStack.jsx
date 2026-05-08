import { motion } from 'framer-motion'
import { Clock, AlertTriangle, TrendingUp, Cpu, CheckCircle, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    headline: 'Save 3+ Hours Daily',
    body: 'Automate stock updates, pricing calculations & order entries. No more manual ledgers or spreadsheets.',
    stat: '180 min/day saved',
    color: '#D4AF37',
  },
  {
    icon: AlertTriangle,
    headline: 'Zero Inventory Errors',
    body: 'Real-time sync eliminates costly mismatches. Know exactly what you have — and what you\'re missing.',
    stat: '99.9% accuracy',
    color: '#F0A500',
  },
  {
    icon: TrendingUp,
    headline: 'Maximize Profit Margins',
    body: 'AI pricing recommendations + live gold rates ensure you never sell below optimal profit margins again.',
    stat: 'Avg +30% profit',
    color: '#4CAF82',
  },
  {
    icon: Cpu,
    headline: 'AI-Ready Business',
    body: 'Position your shop for the future. ML-powered insights keep you ahead of market trends and competition.',
    stat: 'Future-proof tech',
    color: '#A8D8EA',
  },
  {
    icon: CheckCircle,
    headline: 'Professional Image',
    body: 'Digital receipts, customer profiles & polished order management impress clients and build long-term trust.',
    stat: '4.9★ user rating',
    color: '#B4A0E5',
  },
  {
    icon: Zap,
    headline: 'Works Offline Too',
    body: 'No internet? No problem. JewelStack works fully offline and syncs when you\'re back online.',
    stat: '100% offline ready',
    color: '#FF8C00',
  },
]

export default function WhyJewelStack() {
  return (
    <section id="why" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">✦ Why JewelStack</span>
          <h2 className="font-display font-bold mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Why Hundreds of{' '}
            <span className="text-gold-gradient">Jewelry Businesses</span>
            <br />Trust JewelStack
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Every feature is designed around one goal: making your jewelry business more profitable,
            more professional, and more future-ready.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-7 group hover:border-gold-DEFAULT/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${r.color}12`, border: `1px solid ${r.color}25` }}
              >
                <r.icon size={22} style={{ color: r.color }} />
              </div>

              {/* Headline */}
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold-DEFAULT transition-colors">
                {r.headline}
              </h3>

              {/* Body */}
              <p className="text-white/50 text-sm leading-relaxed mb-5">{r.body}</p>

              {/* Stat pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ color: r.color, background: `${r.color}12`, border: `1px solid ${r.color}25` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: r.color }} />
                {r.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8 text-center"
          style={{ border: '1px solid rgba(212,175,55,0.2)' }}
        >
          <p className="text-white/40 text-sm mb-2">Join 500+ jewelry businesses already digitizing</p>
          <p className="font-display font-bold text-2xl text-white mb-6">
            The Traditional Way is Costing You{' '}
            <span className="text-gold-gradient">Time & Money</span>
          </p>
          <a href="#download" className="btn-gold inline-flex">
            Start For Free — Download APK
          </a>
        </motion.div>
      </div>
    </section>
  )
}
