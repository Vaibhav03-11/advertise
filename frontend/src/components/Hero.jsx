import { motion } from 'framer-motion'
import { Download, Play, Shield, Star, Users, TrendingUp } from 'lucide-react'
import CountUp from './CountUp'

const stats = [
  { icon: Users,      value: 500,  suffix: '+', label: 'Jewelry Businesses' },
  { icon: Star,       value: 4.9,  suffix: '',  label: 'App Rating',         decimals: 1 },
  { icon: TrendingUp, value: 30,   suffix: '%', label: 'Avg Profit Increase' },
  { icon: Shield,     value: 100,  suffix: '%', label: 'Data Secure' },
]

const floatVariants = {
  initial: { y: 0 },
  animate: { y: [-12, 0, -12], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb w-[600px] h-[600px] -top-32 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
        <div className="glow-orb w-96 h-96 bottom-0 right-0"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="section-tag">
                <span className="w-1.5 h-1.5 bg-gold-DEFAULT rounded-full animate-pulse" />
                Now Available — Download Free
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Transform Your{' '}
              <span className="text-gold-gradient">Jewelry Business</span>{' '}
              with{' '}
              <span className="text-gold-shimmer">AI-Powered</span>{' '}
              Intelligence
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Inventory, Orders, Gold Purity Analysis, and ML Insights —&nbsp;
              all in one modern platform built for goldsmiths &amp; retailers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#download" id="hero-download-cta" className="btn-gold text-base px-8 py-4">
                <Download size={18} />
                Download APK Free
              </a>
              <a href="#showcase" className="btn-outline-gold text-base px-8 py-4">
                <Play size={16} className="fill-gold-DEFAULT" />
                Watch Demo
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 justify-center lg:justify-start text-sm text-white/40"
            >
              <Shield size={14} className="text-gold-DEFAULT" />
              <span>No account needed</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Free to download</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>Android 6.0+</span>
            </motion.div>
          </div>

          {/* Right: phone mockup */}
          <div className="relative flex justify-center items-center">
            {/* Glow rings */}
            <div className="absolute w-80 h-80 rounded-full"
              style={{
                border: '1px solid rgba(212,175,55,0.15)',
                animation: 'rotateRing 15s linear infinite',
              }} />
            <div className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                border: '1px solid rgba(212,175,55,0.08)',
                animation: 'counterRotate 20s linear infinite',
              }} />

            {/* Phone */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              <PhoneMockup />
            </motion.div>

            {/* Floating badges */}
            <FloatingBadge
              className="absolute -left-4 top-16 lg:-left-16"
              icon="⚡"
              title="AI Powered"
              sub="Diamond Prediction"
              delay={0.9}
            />
            <FloatingBadge
              className="absolute -right-4 bottom-24 lg:-right-12"
              icon="📊"
              title="Live Gold Rates"
              sub="Real-time tracking"
              delay={1.1}
            />
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center hover:border-gold-DEFAULT/30 transition-colors">
              <s.icon size={22} className="text-gold-DEFAULT mx-auto mb-3" />
              <div className="text-2xl font-bold font-display text-gold-gradient mb-1">
                <CountUp end={s.value} decimals={s.decimals ?? 0} duration={2} />
                {s.suffix}
              </div>
              <p className="text-white/40 text-xs">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Phone Mockup ─────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow under phone */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.4) 0%, transparent 70%)', filter: 'blur(16px)' }} />

      {/* Phone body */}
      <div
        className="relative w-56 h-[480px] rounded-[3rem] overflow-hidden shadow-gold-lg"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
          border: '2px solid rgba(212,175,55,0.4)',
          boxShadow: '0 0 60px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 flex flex-col pt-12 p-3">
          {/* App header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-gold-DEFAULT text-[10px] font-bold">JewelStack</span>
            <div className="flex gap-1">
              {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-gold-DEFAULT/60" />)}
            </div>
          </div>

          {/* Dashboard card */}
          <div className="glass rounded-2xl p-3 mb-2">
            <p className="text-white/40 text-[9px] mb-1">Total Inventory Value</p>
            <p className="text-gold-DEFAULT font-bold text-base">₹ 24,58,000</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp size={8} className="text-emerald-400" />
              <span className="text-emerald-400 text-[8px]">+12.4% this month</span>
            </div>
          </div>

          {/* Mini chart */}
          <div className="glass rounded-2xl p-3 mb-2 flex-1">
            <p className="text-white/40 text-[9px] mb-2">Gold Rate Trend</p>
            <svg viewBox="0 0 100 40" className="w-full">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,35 C10,30 20,15 30,20 C40,25 50,8 60,12 C70,16 80,5 100,3"
                fill="none" stroke="#D4AF37" strokeWidth="1.5" />
              <path d="M0,35 C10,30 20,15 30,20 C40,25 50,8 60,12 C70,16 80,5 100,3 L100,40 L0,40Z"
                fill="url(#chartGrad)" />
            </svg>
          </div>

          {/* Inventory items */}
          {[
            { name: '22K Gold Ring', qty: '14 pcs', color: '#FFD700' },
            { name: 'Diamond Pendant', qty: '6 pcs', color: '#A8D8EA' },
            { name: '18K Bracelet', qty: '9 pcs', color: '#D4AF37' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mb-1.5 glass rounded-lg p-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }} />
              <div className="flex-1 min-w-0">
                <p className="text-white text-[8px] truncate">{item.name}</p>
              </div>
              <span className="text-gold-DEFAULT text-[8px] font-medium">{item.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Floating badge ───────────────────────────────── */
function FloatingBadge({ icon, title, sub, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-gold-sm ${className}`}
      style={{ animation: `float ${4 + delay}s ease-in-out infinite` }}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-white text-xs font-semibold">{title}</p>
        <p className="text-white/40 text-[10px]">{sub}</p>
      </div>
    </motion.div>
  )
}
