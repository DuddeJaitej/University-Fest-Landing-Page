import { useCounter } from '../../hooks/useCounter'
import styles from './About.module.css'

const STATS = [
  { icon: '🏆', target: 10, prefix: '₹', suffix: 'L+', label: 'Prize Pool' },
  { icon: '👥', target: 10, prefix: '',  suffix: 'K+', label: 'Footfall'   },
  { icon: '⚡', target: 45, prefix: '',  suffix: '+',  label: 'Events'     },
  { icon: '🏫', target: 100,prefix: '',  suffix: '+',  label: 'Colleges'   },
]

function StatCard({ icon, target, prefix, suffix, label }) {
  const { ref, count } = useCounter(target, 1800)
  return (
    <div className={`${styles.card} reveal`} ref={ref}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.number}>{prefix}{count}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <span className="section-tag reveal">About the Fest</span>
        <h2 className="section-title reveal">
          What is <span className="gradient-text">Invincia?</span>
        </h2>
        <p className={`${styles.desc} reveal`}>
          Invincia is Presidency University&apos;s annual inter-collegiate cultural festival where
          creativity, talent and energy collide. Over two electrifying days, the campus transforms
          into a high-energy arena of performances, competitions and experiences, bringing together
          students from across India.
        </p>
        <div className={styles.grid}>
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
