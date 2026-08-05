import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const dots = Array.from({ length: 40 }, () => {
      const d = document.createElement('div')
      d.className = styles.dot
      const size = Math.random() * 4 + 2
      d.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${Math.random() * 12 + 8}s;
        animation-delay:${Math.random() * 10}s;
        opacity:${Math.random() * 0.5 + 0.15};
        background:${Math.random() > 0.5 ? '#ff6b35' : '#a855f7'};
      `
      container.appendChild(d)
      return d
    })
    return () => dots.forEach((d) => d.remove())
  }, [])

  return (
    <section className={styles.hero} id="home">

      {/* ── background stack ── */}
      <div className={styles.bg}>
        {/* real photo */}
        <div className={styles.heroImg} />
        {/* dark gradient overlays so text stays readable */}
        <div className={styles.overlayBottom} />
        <div className={styles.overlayTop} />
        <div className={styles.overlayCenter} />
        {/* animated layers on top of the photo */}
        <div ref={particlesRef} className={styles.particles} />
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      {/* ── main content ── */}
      <div className={styles.content}>
        <img src="/Assets/Invincia Logo.png" alt="Invincia" className={`${styles.heroLogo} reveal`} />
        <p className={`${styles.eyebrow} reveal`}>Presidency University Presents</p>

        <h1 className={styles.title}>
          <span className={`${styles.titleText} reveal`}>INVINCIA</span>
        </h1>

        <p className={`${styles.year} reveal`}>2026-2027</p>
        <p className={`${styles.tagline} reveal`}>One Campus. One Pulse.</p>

        <p className={`${styles.desc} reveal`}>
          Presidency University&apos;s annual inter-collegiate cultural festival<br />
          where creativity, talent and energy collide.
        </p>

        <div className={`${styles.btns} reveal`}>
          <a href="#events" className="btn btn-primary">Explore Events</a>
          <a href="#passes" className="btn btn-outline">Get Your Pass</a>
        </div>

        <div className={`${styles.dateTag} reveal`}>
          <span>📅</span>
          <span>Two Electrifying Days &nbsp;|&nbsp; Bengaluru, India</span>
        </div>
      </div>

      {/* ── scroll hint ── */}
      <div className={styles.scrollHint}>
        <div className={styles.mouse}><div className={styles.wheel} /></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
