import { useEffect } from 'react'
import styles from './PaymentModal.module.css'

const RAZORPAY_URL = 'https://razorpay.me/@duddejaitej'

export default function PaymentModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handlePay = () => {
    window.open(RAZORPAY_URL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    /* Backdrop */
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal panel — stop clicks from closing */}
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>

        {/* Glow orb */}
        <div className={styles.glow} aria-hidden="true" />

        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" />
          </svg>
        </button>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.icon}>🎟️</span>
          <h2 id="modal-title" className={styles.title}>Entry Pass</h2>
          <p className={styles.subtitle}>Invincia 2026-2027 — Presidency University</p>
        </div>

        {/* Order summary */}
        <div className={styles.summary}>
          <div className={styles.row}>
            <span>Pass type</span>
            <span>Entry Pass (Visitor)</span>
          </div>
          <div className={styles.row}>
            <span>Event</span>
            <span>Invincia 2026-2027</span>
          </div>
          <div className={styles.row}>
            <span>Access</span>
            <span>Full Campus + Main Stage</span>
          </div>
          <div className={`${styles.row} ${styles.total}`}>
            <span>Total</span>
            <span className={styles.amount}>₹399</span>
          </div>
        </div>

        {/* Security note */}
        <p className={styles.secureNote}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Secured by Razorpay — UPI, Cards, Net Banking &amp; Wallets accepted
        </p>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={`btn btn-outline ${styles.cancelBtn}`} onClick={onClose}>
            Cancel
          </button>
          <button className={`btn btn-primary ${styles.payBtn}`} onClick={handlePay}>
            Pay ₹399
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
