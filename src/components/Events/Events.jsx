import { useState } from 'react'
import { eventCategories, tabLabels } from '../../data/events'
import styles from './Events.module.css'

const TAB_META = {
  cultural:  { accent: '#a855f7', label: 'Cultural',        count: null },
  technical: { accent: '#06b6d4', label: 'Technical',       count: null },
  sports:    { accent: '#ff6b35', label: 'Sports & Gaming', count: null },
  special:   { accent: '#ffd700', label: 'Special',         count: null },
}

function EventCard({ name, icon, color, index }) {
  return (
    <div
      className={styles.card}
      style={{ '--accent': color, animationDelay: `${index * 0.04}s` }}
    >
      {/* left colour bar */}
      <div className={styles.cardBar} />

      {/* icon bubble */}
      <div className={styles.cardIconWrap}>
        <span className={styles.cardIconBg} />
        <span className={styles.cardIconEmoji}>{icon}</span>
      </div>

      {/* name */}
      <span className={styles.cardName}>{name}</span>
    </div>
  )
}

export default function Events() {
  const [active, setActive] = useState('cultural')
  const meta = TAB_META[active]

  return (
    <section className={`${styles.events} section`} id="events">
      <div className={styles.topLine} />

      {/* ambient glow that shifts per tab */}
      <div className={styles.bgGlow} style={{ '--glow': meta.accent }} />

      <div className="container">
        <span className="section-tag reveal">Competitions &amp; Shows</span>

        <div className={styles.header}>
          <h2 className="section-title reveal">
            The <span className="gradient-text">Events</span>
          </h2>
          <p className={`${styles.count} reveal`}>
            {eventCategories[active].length} <span>events</span>
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div className={`${styles.tabBar} reveal`}>
          {tabLabels.map((t) => {
            const isActive = active === t.key
            const m = TAB_META[t.key]
            return (
              <button
                key={t.key}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                style={{ '--tc': m.accent }}
                onClick={() => setActive(t.key)}
              >
                <span className={styles.tabDot} />
                {t.label}
                <span className={styles.tabCount}>
                  {eventCategories[t.key].length}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Grid ── */}
        <div className={styles.grid} key={active}>
          {eventCategories[active].map((ev, i) => (
            <EventCard key={ev.name} {...ev} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
