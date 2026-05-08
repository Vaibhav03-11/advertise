import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How do I install the JewelStack APK on my Android phone?',
    a: 'Download the APK file from the button above. Before installing, go to Settings → Security → Unknown Sources and enable it. Then tap the downloaded APK file and follow the on-screen instructions. Installation takes under 60 seconds.',
  },
  {
    q: 'Is my jewelry inventory data safe and secure?',
    a: 'Absolutely. JewelStack uses Firebase — Google\'s enterprise-grade cloud platform — with end-to-end encryption. Your data is backed up in real-time, protected by industry-standard security protocols, and you retain 100% ownership of your data.',
  },
  {
    q: 'How does the live gold pricing work?',
    a: 'JewelStack fetches live gold market rates and uses them for all pricing calculations. When you add an inventory item or create an order, pricing is automatically computed based on current gold rates for 24K, 22K, 18K and other purities.',
  },
  {
    q: 'How accurate is the AI diamond price prediction?',
    a: 'Our ML model achieves 98.4% accuracy, trained on hundreds of thousands of diamond transactions. It analyzes the 4Cs (Cut, Color, Clarity, Carat) plus additional parameters to give you a reliable market price estimate within seconds.',
  },
  {
    q: 'Does JewelStack work without an internet connection?',
    a: 'Yes! JewelStack is built offline-first. You can add inventory, manage orders, and track customers without internet. All data syncs automatically when you\'re back online. Perfect for shops in areas with unreliable connectivity.',
  },
  {
    q: 'Is JewelStack free to use?',
    a: 'Yes — JewelStack is completely free to download and use during our beta period. We believe every jewelry professional deserves access to modern tools. Future premium features may be available as optional upgrades.',
  },
  {
    q: 'Can I use JewelStack on iPhone or iPad?',
    a: 'Currently, JewelStack is available exclusively for Android devices (6.0 and above). An iOS version is in active development. Join our newsletter to be notified when the iOS release launches.',
  },
  {
    q: 'How many products can I add to my inventory?',
    a: 'There is no limit on the number of inventory items during the beta. Add as many products as your business needs — rings, necklaces, diamonds, earrings, bangles, and more — with full detail tracking.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">
            <HelpCircle size={12} />
            FAQ
          </span>
          <h2 className="font-display font-bold mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Questions?{' '}
            <span className="text-gold-gradient">We've Got Answers.</span>
          </h2>
          <p className="text-white/50">
            Everything you need to know before downloading JewelStack.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-2xl overflow-hidden"
              style={{ border: open === i ? '1px solid rgba(212,175,55,0.3)' : undefined }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`font-medium text-sm pr-4 transition-colors ${
                  open === i ? 'text-gold-DEFAULT' : 'text-white/80 group-hover:text-white'
                }`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={18} className={open === i ? 'text-gold-DEFAULT' : 'text-white/30'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), transparent)' }} />
                      <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
