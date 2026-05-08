import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas  = canvasRef.current
    const ctx     = canvas.getContext('2d')
    let particles = []
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x     = Math.random() * canvas.width
        this.y     = Math.random() * canvas.height
        this.size  = Math.random() * 1.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3 - 0.1
        this.opacity= Math.random() * 0.6 + 0.1
        this.color  = Math.random() > 0.5 ? '#D4AF37' : '#F5D67B'
        this.life   = 1
        this.decay  = Math.random() * 0.002 + 0.0005
      }
      update() {
        this.x    += this.speedX
        this.y    += this.speedY
        this.life -= this.decay
        if (this.life <= 0 || this.y < -10) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity * this.life
        ctx.fillStyle   = this.color
        ctx.shadowBlur  = 6
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" aria-hidden="true" />
}
