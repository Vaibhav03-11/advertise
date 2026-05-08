import ParticleCanvas  from './components/ParticleCanvas'
import Navbar          from './components/Navbar'
import GoldTicker      from './components/GoldTicker'
import Hero            from './components/Hero'
import Features        from './components/Features'
import GoldPurity      from './components/GoldPurity'
import AIInsights      from './components/AIInsights'
import AppShowcase     from './components/AppShowcase'
import WhyJewelStack   from './components/WhyJewelStack'
import Download        from './components/Download'
import Testimonials    from './components/Testimonials'
import FAQ             from './components/FAQ'
import Footer          from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808]">
      {/* Global particle canvas */}
      <ParticleCanvas />

      {/* Sticky nav */}
      <Navbar />

      {/* Scrolling live rate ticker — just below nav */}
      <div className="pt-[72px]">
        <GoldTicker />
      </div>

      {/* Page sections */}
      <main>
        <Hero />
        <Features />
        <GoldPurity />
        <AIInsights />
        <AppShowcase />
        <WhyJewelStack />
        <Download />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
