import { motion } from 'framer-motion'
import { Download as DownloadIcon, Shield, Smartphone, CheckCircle, Zap } from 'lucide-react'

const trustItems = [
  { icon: Shield,      text: 'Firebase Secured Data' },
  { icon: Smartphone,  text: 'Android 6.0+ Compatible' },
  { icon: Zap,         text: 'Offline Support' },
  { icon: CheckCircle, text: 'No Account Required' },
]

const stats = [
  { value: '500+',  label: 'Downloads' },
  { value: '4.9★',  label: 'Rating' },
  { value: '100%',  label: 'Free App' },
  { value: '24/7',  label: 'Sync' },
]

// Simple QR code SVG placeholder
function QRCode() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0D0D0D" />
      {/* Corner blocks */}
      {[[5,5],[65,5],[5,65]].map(([x,y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="30" height="30" fill="none" stroke="#D4AF37" strokeWidth="3" rx="3" />
          <rect x={x+7} y={y+7} width="16" height="16" fill="#D4AF37" rx="2" />
        </g>
      ))}
      {/* Data dots */}
      {[
        [42,5],[48,5],[55,5],[42,12],[55,12],[42,19],[48,19],[55,19],
        [65,42],[72,42],[79,42],[86,42],[65,49],[79,49],[65,56],[72,56],
        [79,56],[86,56],[5,42],[12,42],[19,42],[26,42],[33,42],[5,49],
        [19,49],[26,49],[5,56],[12,56],[19,56],[26,56],[33,56],
        [42,65],[55,65],[42,72],[48,72],[55,72],[42,79],[55,79],
        [42,86],[48,86],[55,86],[65,65],[72,65],[79,65],[86,65],
        [65,72],[72,72],[79,72],[65,79],[72,79],[79,79],[86,79],
        [65,86],[72,86],[86,86],
      ].map(([x,y], i) => (
        <rect key={i} x={x} y={y} width="6" height="6" fill="#D4AF37" rx="1" />
      ))}
    </svg>
  )
}

export default function Download() {
  return (
    <section id="download" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BG radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Scarcity banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ background: 'rgba(240,165,0,0.1)', border: '1px solid rgba(240,165,0,0.3)' }}>
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-400 font-medium">🔥 Limited Beta — Free for Early Users</span>
          </div>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-4xl p-10 lg:p-14 text-center"
          style={{ border: '1px solid rgba(212,175,55,0.25)' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="section-tag mb-6">✦ Download JewelStack</span>
            <h2 className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Start Digitizing Your{' '}
              <span className="text-gold-gradient">Jewelry Business</span>{' '}
              Today
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Join 500+ jewelry professionals who've transformed their operations with JewelStack.
              Free to download. No subscription. No hidden fees.
            </p>
          </motion.div>

          {/* Download + QR row */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-12">
            {/* Big download button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="http://localhost:8000/api/download"
                id="main-download-btn"
                download="JewelStack.apk"
                className="btn-gold flex items-center gap-4 text-lg px-10 py-5 shadow-gold-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center">
                  <DownloadIcon size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs opacity-70 font-normal">Download for Android</p>
                  <p className="font-bold">Get APK Free</p>
                </div>
              </a>
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="w-px h-16 bg-white/10 hidden lg:block" />
              <span className="text-white/30 text-sm lg:hidden">— or scan QR code —</span>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 h-28 rounded-2xl overflow-hidden p-1"
                style={{ border: '1px solid rgba(212,175,55,0.3)', background: '#0D0D0D' }}>
                <QRCode />
              </div>
              <p className="text-white/30 text-xs">Scan to download</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {trustItems.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                <t.icon size={14} className="text-gold-DEFAULT" />
                <span>{t.text}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-2xl"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}
              >
                <p className="font-display font-bold text-2xl text-gold-gradient">{s.value}</p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Android badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-2 text-white/30 text-sm">
              <Smartphone size={14} />
            <span>Compatible with Android 6.0 and above · APK size ~28MB</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
