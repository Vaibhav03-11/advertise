import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Package, ClipboardList, Users, Brain } from 'lucide-react'

const screens = [
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Package,
    color: '#D4AF37',
    title: 'Smart Inventory',
    items: [
      { name: '22K Gold Necklace',  stock: 8,  value: '₹1,24,000', badge: 'In Stock' },
      { name: 'Diamond Solitaire',  stock: 3,  value: '₹3,68,000', badge: 'Low Stock' },
      { name: '18K Gold Ring',      stock: 15, value: '₹48,500',   badge: 'In Stock' },
      { name: 'Pearl Earrings Set', stock: 6,  value: '₹22,000',   badge: 'In Stock' },
    ],
    metric: { label: 'Total Value', value: '₹24.5L' },
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: ClipboardList,
    color: '#F0A500',
    title: 'Order Management',
    items: [
      { name: 'Custom Gold Ring',      stock: null, value: '₹32,000', badge: 'Processing' },
      { name: 'Wedding Set – Sharma',  stock: null, value: '₹1,85,000', badge: 'Ready' },
      { name: 'Diamond Pendant Chain', stock: null, value: '₹68,000', badge: 'Delivered' },
      { name: 'Bangle Set – Patel',    stock: null, value: '₹54,000', badge: 'Processing' },
    ],
    metric: { label: 'This Month Revenue', value: '₹3.4L' },
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: Users,
    color: '#B4A0E5',
    title: 'Customer Records',
    items: [
      { name: 'Priya Sharma',   stock: 12, value: '₹4.2L',  badge: 'Premium' },
      { name: 'Ravi Kumar',     stock: 7,  value: '₹1.8L',  badge: 'Regular' },
      { name: 'Meena Patel',    stock: 15, value: '₹6.1L',  badge: 'VIP' },
      { name: 'Suresh Reddy',   stock: 4,  value: '₹92K',   badge: 'Regular' },
    ],
    metric: { label: 'Active Customers', value: '248' },
  },
  {
    id: 'ml',
    label: 'ML Dashboard',
    icon: Brain,
    color: '#A8D8EA',
    title: 'AI Dashboard',
    items: [
      { name: '1ct F/VS1 Round',     stock: null, value: '₹4,82,000', badge: '98% conf.' },
      { name: '0.75ct G/VS2 Oval',   stock: null, value: '₹2,95,000', badge: '96% conf.' },
      { name: '1.25ct E/VVS1 Pear',  stock: null, value: '₹7,14,000', badge: '97% conf.' },
      { name: '0.5ct H/SI1 Cushion', stock: null, value: '₹1,38,000', badge: '94% conf.' },
    ],
    metric: { label: 'Model Accuracy', value: '98.4%' },
  },
]

export default function AppShowcase() {
  const [idx, setIdx] = useState(0)
  const screen        = screens[idx]

  const prev = () => setIdx((idx - 1 + screens.length) % screens.length)
  const next = () => setIdx((idx + 1) % screens.length)

  return (
    <section id="showcase" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="glow-orb w-[600px] h-96 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">✦ App Showcase</span>
          <h2 className="font-display font-bold mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            See JewelStack{' '}
            <span className="text-gold-gradient">In Action</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Every screen is designed for the jewelry professional — intuitive, fast, and beautiful.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          {/* Tab pills */}
          <div className="flex gap-3 flex-wrap justify-center">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIdx(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  idx === i ? 'text-obsidian shadow-gold' : 'glass text-white/50 hover:text-white/80'
                }`}
                style={idx === i ? { background: `linear-gradient(135deg, ${s.color}, #A07820)` } : {}}
              >
                <s.icon size={14} />
                {s.label}
              </button>
            ))}
          </div>

          {/* Phone mockup carousel */}
          <div className="relative flex items-center gap-8">
            <button
              onClick={prev}
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-gold-DEFAULT transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <ShowcasePhone screen={screen} />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={next}
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-gold-DEFAULT transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`transition-all duration-300 rounded-full ${
                  idx === i ? 'w-6 h-2 bg-gold-DEFAULT' : 'w-2 h-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ShowcasePhone({ screen }) {
  const badgeColors = {
    'In Stock':   '#4CAF82',
    'Low Stock':  '#F0A500',
    'Processing': '#F0A500',
    'Ready':      '#4CAF82',
    'Delivered':  '#A8D8EA',
    'Premium':    '#D4AF37',
    'VIP':        '#FFD700',
    'Regular':    '#888',
  }

  return (
    <div
      className="w-64 h-[520px] rounded-[3rem] overflow-hidden relative"
      style={{
        background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
        border: `2px solid ${screen.color}50`,
        boxShadow: `0 0 60px ${screen.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-10" />

      {/* Screen content */}
      <div className="absolute inset-0 flex flex-col pt-10 px-4 pb-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pt-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${screen.color}20`, border: `1px solid ${screen.color}30` }}>
            <screen.icon size={14} style={{ color: screen.color }} />
          </div>
          <span className="text-white font-semibold text-sm">{screen.title}</span>
        </div>

        {/* Metric card */}
        <div className="rounded-2xl p-3 mb-4"
          style={{ background: `${screen.color}10`, border: `1px solid ${screen.color}20` }}>
          <p className="text-white/40 text-[10px] mb-1">{screen.metric.label}</p>
          <p className="font-bold text-lg" style={{ color: screen.color }}>{screen.metric.value}</p>
        </div>

        {/* Items */}
        <div className="space-y-2 flex-1">
          {screen.items.map((item, i) => {
            const bc = badgeColors[item.badge] || '#888'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 p-2.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: screen.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[9px] truncate">{item.name}</p>
                  {item.stock !== null && (
                    <p className="text-white/30 text-[8px]">Qty: {item.stock}</p>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[9px] font-medium" style={{ color: screen.color }}>{item.value}</p>
                  <span className="text-[7px] px-1.5 py-0.5 rounded-full"
                    style={{ color: bc, background: `${bc}20` }}>
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
