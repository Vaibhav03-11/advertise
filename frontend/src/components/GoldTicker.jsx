import { motion } from 'framer-motion'

const tickerItems = [
  '24K Gold · ₹6,842/g',
  '22K Gold · ₹6,272/g',
  '18K Gold · ₹5,132/g',
  '14K Gold · ₹3,991/g',
  'Silver · ₹86/g',
  'Platinum · ₹3,250/g',
  '1ct Diamond (F/VS1) · ₹4,82,000',
  '0.5ct Diamond (G/VS2) · ₹1,58,000',
]

export default function GoldTicker() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      className="relative overflow-hidden py-3 border-y border-gold-DEFAULT/15"
      style={{ background: 'rgba(212,175,55,0.04)' }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #080808, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, #080808, transparent)' }} />

      <div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ animation: 'ticker 30s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gold-DEFAULT/40">◆</span>
            <span className="text-white/60">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
