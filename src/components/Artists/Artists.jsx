import { featuredArtists, pastArtists } from '../../data/artists'
import styles from './Artists.module.css'

/* ─── Featured card — image only, subtle zoom on hover ─── */
function FeaturedCard({ name, image, color1, color2, index }) {
  return (
    <div
      className={`${styles.featCard} reveal`}
      style={{ '--c1': color1, '--c2': color2, animationDelay: `${index * 0.1}s` }}
    >
      <img src={image} alt={name} className={styles.photo} loading="lazy" />
    </div>
  )
}

/* ─── Past lineup scrolling ticker — image cards ─── */
function PastTicker() {
  const doubled = [...pastArtists, ...pastArtists]
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.tickerTrack}>
        {doubled.map((a, i) => (
          <div className={styles.tickerItem} key={i}>
            <div className={styles.tickerCard}>
              <img
                src={a.image}
                alt={a.name}
                className={styles.tickerImg}
                loading="lazy"
              />
              <div className={styles.tickerInfo}>
                <span className={styles.tickerName}>{a.name}</span>
                <span className={styles.tickerGenre}>{a.genre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Artists() {
  return (
    <section className={`${styles.artists} section`} id="artists">
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className="container">
        <span className="section-tag reveal">Featuring Artists</span>
        <h2 className="section-title reveal">
          Meet The <span className="gradient-text">Artists</span>
        </h2>
        <p className={`${styles.sub} reveal`}>
          Handpicked performers ready to set Invincia 2026-2027 on fire
        </p>

        <div className={styles.featGrid}>
          {featuredArtists.map((a, i) => (
            <FeaturedCard key={a.name} {...a} index={i} />
          ))}
        </div>
      </div>

      <div className={styles.pastWrap}>
        <div className="container">
          <p className={styles.pastLabel}>Past Lineup</p>
        </div>
        <PastTicker />
      </div>
    </section>
  )
}
