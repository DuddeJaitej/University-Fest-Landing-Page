import styles from './Footer.module.css'

const QUICK_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#events',   label: 'Events'   },
  { href: '#schedule', label: 'Schedule' },
  { href: '#artists',  label: 'Artists'  },
  { href: '#passes',   label: 'Passes'   },
]


const CONTACT = [
  {
    label: 'Presidency University, Bengaluru',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'invincia@presidencyuniversity.in',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'presidencyuniversity.in',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className="container">
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="./Assets/Invincia-Logo.png" alt="Invincia" className={styles.logoImg} />
            </div>
            <p>One Campus. One Pulse.<br />Presidency University&apos;s Annual Cultural Extravaganza.</p>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <svg className={styles.linkArrow} viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              {CONTACT.map((c) => (
                <li key={c.label}>
                  <span className={styles.contactIcon}>{c.svg}</span>
                  {c.label}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>© 2026-2027 Presidency University — INVINCIA. All rights reserved.</p>
          <p>Crafted with passion for the spirit of fest</p>
        </div>
      </div>
    </footer>
  )
}
