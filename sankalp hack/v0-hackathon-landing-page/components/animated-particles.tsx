"use client"

import { useEffect, useRef } from "react"

export function AnimatedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
        this.hue = Math.random() > 0.5 ? 45 : 250 // Orange or Blue
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 70%, 65%, ${this.opacity})`
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    // Create flowing light streaks
    class LightStreak {
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      angle: number
      hue: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -50
        this.length = Math.random() * 100 + 50
        this.speed = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.3 + 0.2
        this.angle = Math.random() * 0.3 + 1.4 // Slight angle
        this.hue = Math.random() > 0.5 ? 45 : 250
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        if (this.y > canvas.height + 50) {
          this.y = -50
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length,
        )
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 65%, ${this.opacity})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 65%, 0)`)

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    const streaks: LightStreak[] = []
    for (let i = 0; i < 15; i++) {
      streaks.push(new LightStreak())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update streaks
      streaks.forEach((streak) => {
        streak.update()
        streak.draw()
      })

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Connect nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
