import { motion } from 'framer-motion'
import { Gem, Share2, Globe, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const links = {
  Product:  ['Features', 'Gold Purity', 'AI Insights', 'Download APK', 'Changelog'],
  Company:  ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Support:  ['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-DEFAULT/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #A07820)' }}>
                <Gem size={18} className="text-obsidian-900" />
              </div>
              <span className="font-display font-bold text-xl text-gold-gradient">JewelStack</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered jewelry inventory management system for goldsmiths, artisans &amp; retailers.
              Digitize your jewelry business today.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { Icon: Share2,       href: '#', label: 'Social' },
                { Icon: Globe,        href: '#', label: 'Website' },
                { Icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { Icon: Mail,      href: 'mailto:vaibhavsureshkurdekar@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-gold-DEFAULT hover:border-gold-DEFAULT/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-semibold text-white/80 text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/35 text-sm hover:text-gold-DEFAULT transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap gap-6 mb-8 pt-8 border-t border-white/5">
          {[
            { Icon: Mail,    text: 'vaibhavsureshkurdekar@gmail.com' },
            { Icon: Phone,   text: '+91 89040 64179' },
            { Icon: MapPin,  text: 'India' },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/35 text-sm">
              <Icon size={14} className="text-gold-DEFAULT" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} JewelStack. All rights reserved. Built with ♦ for jewelry professionals.
          </p>
          <p className="text-gold-DEFAULT/60 text-xs font-semibold tracking-widest uppercase">
            Created by VAIBHAV
          </p>
          <div className="flex items-center gap-2 text-xs text-white/25">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
