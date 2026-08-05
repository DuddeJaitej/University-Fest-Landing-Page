import styles from './Intro.module.css'

export default function Intro() {
  return (
    <section className={styles.intro} id="intro">
      {/* no top/bottom dividers */}

      <div className="container">
        <div className={styles.layout}>

          {/* ── Left: copy ── */}
          <div className={styles.copy}>
            <div className={styles.pulse}>
              <span className={styles.dot} />
              One Campus One Pulse.
            </div>

            <h2 className={`${styles.heading} reveal`}>
              One Campus. <span className="gradient-text">One Pulse.</span>
            </h2>

            <p className={`${styles.body} reveal`}>
              Invincia is Presidency University&apos;s annual inter-collegiate
              cultural festival where creativity, talent and energy collide.
            </p>
            <p className={`${styles.body} reveal`}>
              Over two electrifying days, the campus transforms into a
              high-energy arena of performances, competitions and experiences,
              bringing together students from across India.
            </p>

            {/* 50 years image */}
            <div className={`${styles.legacyImg} reveal`}>
              <img src="/Assets/50years.png" alt="50 Years of Legacy" />
            </div>
          </div>

          {/* ── Right: local video — bigger ── */}
          <div className={`${styles.videoWrap} reveal`}>
            <video
              className={styles.video}
              src="/Assets/video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

        </div>
      </div>
    </section>
  )
}
