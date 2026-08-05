import { useState } from 'react'
import { scheduleData } from '../../data/schedule'
import styles from './Schedule.module.css'

export default function Schedule() {
  const [day, setDay] = useState(1)
  const rows = scheduleData[day]

  return (
    <section className={`${styles.schedule} section`} id="schedule">
      <div className={styles.topLine} />
      <div className="container">
        <span className="section-tag reveal">What&apos;s Happening</span>
        <h2 className="section-title reveal">
          Detailed <span className="gradient-text">Schedule</span>
        </h2>
        <div className={`${styles.tabs} reveal`}>
          {[1, 2].map((d) => (
            <button
              key={d}
              className={`${styles.tab} ${day === d ? styles.active : ''}`}
              onClick={() => setDay(d)}
            >
              Day 0{d}
            </button>
          ))}
        </div>
        <div className={`${styles.table} reveal`}>
          <div className={styles.header}>
            <span>Timings</span>
            <span>Main Stage Event</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`${styles.row} ${row.highlight ? styles.highlight : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.time}>{row.time}</div>
              <div className={styles.event}>{row.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
