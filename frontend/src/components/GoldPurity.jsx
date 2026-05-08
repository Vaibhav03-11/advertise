import { useState } from 'react'
import { motion } from 'framer-motion'

const purities = [
  {
    karat:    '24K',
    purity:   '99.9%',
    fineness: '999',
    alloy:    { gold: 99.9, silver: 0.1, copper: 0 },
    color:    '#FFD700',
    desc:     'Purest form of gold. Soft, bright yellow. Ideal for bullion & investment pieces.',
  },
  {
    karat:    '22K',
    purity:   '91.6%',
    fineness: '916',
    alloy:    { gold: 91.6, silver: 5.4, copper: 3 },
    color:    '#D4AF37',
    desc:     'Most popular for jewelry. Strong durability with rich gold color. Preferred by artisans.',
  },
  {
    karat:    '18K',
    purity:   '75.0%',
    fineness: '750',
    alloy:    { gold: 75, silver: 15, copper: 10 },
    color:    '#A07820',
    desc:     'Ideal for studded jewelry. Perfect balance of purity and durability for diamonds.',
  },
  {
    karat:    '14K',
    purity:   '58.3%',
    fineness: '585',
    alloy:    { gold: 58.3, silver: 20, copper: 21.7 },
    color:    '#8B6914',
    desc:     'Affordable everyday jewelry. High durability, great for active lifestyles.',
  },
]

export default function GoldPurity() {
  const [active, setActive] = useState(1)
  const purity = purities[active]

  return (
    <section id="purity" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb w-96 h-96 right-0 top-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">✦ Gold Purity Analysis</span>
          <h2 className="font-display font-bold mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Precision{' '}
            <span className="text-gold-gradient">Gold Purity</span>
            <br />at Your Fingertips
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Instant karat identification, fineness metrics, and alloy composition breakdowns —
            every detail a goldsmith needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Karat selector */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {purities.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active === i
                      ? 'shadow-gold text-obsidian'
                      : 'glass text-white/50 hover:text-white/80'
                  }`}
                  style={active === i ? {
                    background: `linear-gradient(135deg, ${p.color}, #A07820)`,
                  } : {}}
                >
                  {p.karat}
                </button>
              ))}
            </div>

            {/* Active purity card */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8"
            >
              {/* Big purity number */}
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <p className="text-white/40 text-sm mb-1">Gold Purity</p>
                  <p className="font-display font-bold text-5xl text-gold-gradient">
                    {purity.karat}
                  </p>
                </div>
                <div className="pb-2">
                  <p className="text-white/40 text-xs">Fineness</p>
                  <p className="text-white font-bold text-2xl">{purity.fineness}</p>
                </div>
                <div className="pb-2 ml-auto">
                  <p className="text-white/40 text-xs">Purity</p>
                  <p className="font-bold text-xl" style={{ color: purity.color }}>{purity.purity}</p>
                </div>
              </div>

              <p className="text-white/50 text-sm mb-8">{purity.desc}</p>

              {/* Alloy bars */}
              <div className="space-y-4">
                <AlloyBar label="Gold"   value={purity.alloy.gold}   color={purity.color} />
                <AlloyBar label="Silver" value={purity.alloy.silver} color="#C0C0C0" />
                <AlloyBar label="Copper" value={purity.alloy.copper} color="#B87333" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: circular visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <PurityRing purity={purity} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AlloyBar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white/60">{label}</span>
        <span className="font-medium" style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

function PurityRing({ purity }) {
  const r   = 110
  const cx  = 150
  const cy  = 150
  const circ= 2 * Math.PI * r
  const pct = parseFloat(purity.purity) / 100

  return (
    <div className="relative w-72 h-72 flex items-center justify-center">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `0 0 60px ${purity.color}40`, background: `radial-gradient(circle, ${purity.color}08 0%, transparent 70%)` }}
      />

      <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
        {/* Track */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16" />
        {/* Progress */}
        <motion.circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={purity.color}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ * (1 - pct) }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          transform={`rotate(-90 ${cx} ${cy})`}
          style={{ filter: `drop-shadow(0 0 8px ${purity.color})` }}
        />
      </svg>

      {/* Center text */}
      <div className="text-center z-10">
        <p className="font-display font-bold text-4xl" style={{ color: purity.color }}>
          {purity.karat}
        </p>
        <p className="text-white/40 text-sm mt-1">Pure Gold</p>
        <p className="text-white font-semibold text-xl mt-1">{purity.purity}</p>
      </div>
    </div>
  )
}
