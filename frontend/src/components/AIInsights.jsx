import { motion } from 'framer-motion'
import { Brain, TrendingUp, Diamond, BarChart2, Sparkles } from 'lucide-react'

const insights = [
  { label: 'Diamond Price Prediction', value: '98.4%', sub: 'ML Accuracy', icon: Diamond, color: '#A8D8EA' },
  { label: 'Market Trend Analysis',    value: '+24K',  sub: 'Data Points',  icon: TrendingUp, color: '#4CAF82' },
  { label: 'Smart Recommendations',   value: '3.2x',  sub: 'ROI Average',  icon: Sparkles,   color: '#D4AF37' },
  { label: 'Business Analytics',       value: '360°',  sub: 'View Coverage', icon: BarChart2,  color: '#B4A0E5' },
]

const predictions = [
  { carat: '1.00', cut: 'Ideal',   clarity: 'VS1', color: 'F', price: '₹4,82,000' },
  { carat: '0.75', cut: 'Premium', clarity: 'VS2', color: 'G', price: '₹2,95,000' },
  { carat: '1.25', cut: 'Excellent',clarity:'VVS1', color: 'E', price: '₹7,14,000' },
]

export default function AIInsights() {
  return (
    <section id="ai" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Futuristic grid BG */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="glow-orb w-[500px] h-96 left-0 top-1/3"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">
            <Brain size={12} />
            AI-Powered Insights
          </span>
          <h2 className="font-display font-bold mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            The Future of{' '}
            <span className="text-gold-gradient">Jewelry Intelligence</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Machine learning models trained on millions of jewelry transactions give you
            predictive superpowers — from diamond pricing to market trend forecasting.
          </p>
        </motion.div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center group hover:border-gold-DEFAULT/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                <item.icon size={18} style={{ color: item.color }} />
              </div>
              <p className="font-display font-bold text-2xl mb-1" style={{ color: item.color }}>
                {item.value}
              </p>
              <p className="text-white/40 text-xs mb-1">{item.sub}</p>
              <p className="text-white/60 text-xs">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main dashboard mock */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Diamond Prediction Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-blue-400/10 flex items-center justify-center border border-blue-400/20">
                <Diamond size={16} className="text-blue-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Diamond Price Predictor</h3>
                <p className="text-white/40 text-xs">ML Model — 98.4% accuracy</p>
              </div>
              <span className="ml-auto flex items-center gap-1 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Live
              </span>
            </div>

            <div className="space-y-3">
              {predictions.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-2xl"
                  style={{ background: 'rgba(168,216,234,0.04)', border: '1px solid rgba(168,216,234,0.1)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-300" />
                  <div className="flex-1 grid grid-cols-4 gap-2 text-xs">
                    <span className="text-white/60">{p.carat}ct</span>
                    <span className="text-white/40">{p.cut}</span>
                    <span className="text-white/40">{p.clarity}/{p.color}</span>
                    <span className="text-gold-DEFAULT font-semibold text-right">{p.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini confidence bar */}
            <div className="mt-6">
              <div className="flex justify-between text-xs text-white/40 mb-2">
                <span>Model Confidence</span>
                <span className="text-emerald-400">98.4%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98.4%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #4CAF82, #A8D8EA)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Market Trend Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gold-DEFAULT/10 flex items-center justify-center border border-gold-DEFAULT/20">
                <TrendingUp size={16} className="text-gold-DEFAULT" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Gold Market Trends</h3>
                <p className="text-white/40 text-xs">30-day live forecast</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-gold-DEFAULT font-bold text-sm">₹6,842/g</p>
                <p className="text-emerald-400 text-xs">+2.1%</p>
              </div>
            </div>

            {/* SVG trend chart */}
            <svg viewBox="0 0 300 120" className="w-full mb-4">
              <defs>
                <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              {[30,60,90].map(y => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              ))}
              {/* Area */}
              <path
                d="M0,90 C15,85 25,70 40,68 C55,66 65,80 80,72 C95,64 105,50 120,45 C135,40 145,55 160,48 C175,41 185,30 200,25 C215,20 230,35 245,28 C260,21 275,10 300,8 L300,120 L0,120Z"
                fill="url(#goldFill)"
              />
              {/* Line */}
              <motion.path
                d="M0,90 C15,85 25,70 40,68 C55,66 65,80 80,72 C95,64 105,50 120,45 C135,40 145,55 160,48 C175,41 185,30 200,25 C215,20 230,35 245,28 C260,21 275,10 300,8"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.8))' }}
              />
              {/* Dot at latest */}
              <circle cx="300" cy="8" r="4" fill="#D4AF37"
                style={{ filter: 'drop-shadow(0 0 6px #D4AF37)' }} />
            </svg>

            {/* AI recommendation */}
            <div className="p-3 rounded-2xl"
              style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <div className="flex items-start gap-2">
                <Brain size={14} className="text-gold-DEFAULT mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-xs leading-relaxed">
                  <span className="text-gold-DEFAULT font-medium">AI Recommendation: </span>
                  Gold prices expected to rise 3–5% over next 15 days. Consider purchasing inventory now.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
