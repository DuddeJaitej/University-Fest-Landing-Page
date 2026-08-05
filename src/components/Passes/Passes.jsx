import { useState } from 'react'
import { passes } from '../../data/passes'
import styles from './Passes.module.css'
import PaymentModal from './PaymentModal'

function PassCard({ badge, popular, icon, name, desc, price, priceSub, perks, featured, onBookNow }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={`${styles.glow} ${featured ? styles.glowFeatured : ''}`} />
      <span className={`${styles.badge} ${popular ? styles.badgePopular : ''}`}>{badge}</span>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>

      <div className={styles.price}>
        {price}
        <span>{priceSub}</span>
      </div>

      <ul className={styles.perks}>
        {perks.map((p) => (
          <li key={p}>
            <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {p}
          </li>
        ))}
      </ul>

      {/* Entry pass — opens payment confirmation modal */}
      {featured && (
        <button
          onClick={onBookNow}
          className={`btn btn-primary ${styles.cta}`}
        >
          Book Now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default function Passes() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className={`${styles.passes} section`} id="passes">
      <div className="container">
        <span className="section-tag reveal">Your Ticket In</span>
        <h2 className="section-title reveal">
          Access <span className="gradient-text">Passes</span>
        </h2>
        <p className={`${styles.sub} reveal`}>Choose your experience and be part of the energy</p>
        <div className={`${styles.grid} reveal`}>
          {passes.map((p) => (
            <PassCard
              key={p.id}
              {...p}
              onBookNow={() => setModalOpen(true)}
            />
          ))}
        </div>
      </div>

      {modalOpen && <PaymentModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}
