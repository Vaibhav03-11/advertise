import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '918904064179'
const EMAIL_ADDRESS   = 'vaibhavsureshkurdekar@gmail.com'

const contacts = [
  {
    id:       'whatsapp',
    Icon:     MessageCircle,
    label:    'Chat on WhatsApp',
    sub:      '+91 89040 64179',
    href:     `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20JewelStack!`,
    gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    glow:     'rgba(37,211,102,0.25)',
    border:   'rgba(37,211,102,0.3)',
  },
  {
    id:       'email',
    Icon:     Mail,
    label:    'Send an Email',
    sub:      EMAIL_ADDRESS,
    href:     `mailto:${EMAIL_ADDRESS}?subject=JewelStack%20Inquiry`,
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #A07820 100%)',
    glow:     'rgba(212,175,55,0.25)',
    border:   'rgba(212,175,55,0.3)',
  },
]

export default function ContactUs() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.06) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-tag">✦ Get in Touch</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
        >
          We'd Love to{' '}
          <span className="text-gold-gradient">Hear From You</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/45 text-lg max-w-xl mx-auto mb-14"
        >
          Have a question or need support? Reach out to us instantly via WhatsApp or Email — we typically reply within minutes.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map(({ id, Icon, label, sub, href, gradient, glow, border }, i) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex flex-col items-center gap-5 p-10 rounded-3xl glass cursor-pointer"
              style={{ border: `1px solid ${border}` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 70%)` }}
              />

              {/* Icon circle */}
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: gradient }}
              >
                <Icon size={34} className="text-white drop-shadow" />
              </div>

              {/* Text */}
              <div className="relative">
                <p className="font-display font-bold text-xl text-white mb-1 group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {label}
                </p>
                <p className="text-white/40 text-sm break-all">{sub}</p>
              </div>

              {/* Arrow indicator */}
              <div
                className="relative mt-auto px-6 py-2 rounded-full text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${border}` }}
              >
                Open →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Divider note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/20 text-xs mt-10"
        >
          Response time: WhatsApp ~5 min · Email ~24 hrs
        </motion.p>

      </div>
    </section>
  )
}
