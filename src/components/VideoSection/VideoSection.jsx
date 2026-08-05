import { useState, useCallback } from 'react'
import styles from './VideoSection.module.css'

const VIDEOS = [
  { id: 'jX0ilDCI7Os', title: 'Invincia 2026' },
  { id: 'JfrNhN9R020', title: 'Invincia 2026' },
  { id: 'cTINIci3JjM', title: 'INVINCIA 2026-2027 — Biggest Events' },
  { id: 'p14_2fkoPQ8', title: 'Invincia — One Campus. One Pulse.' },
]

function VideoCard({ video, isActive, onToggleSound }) {
  const src = `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&modestbranding=1&showinfo=0&rel=0&disablekb=1&enablejsapi=1`

  return (
    <div className={styles.card}>
      <div className={styles.iframeWrap}>
        <iframe
          id={`yt-${video.id}`}
          className={styles.frame}
          src={src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <div className={styles.overlay} />
      </div>

      {/* Sound toggle */}
      <button
        className={`${styles.soundBtn} ${isActive ? styles.soundOn : ''}`}
        onClick={() => onToggleSound(video.id)}
        aria-label={isActive ? 'Mute' : 'Unmute'}
      >
        {isActive ? (
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  )
}

export default function VideoSection() {
  const [current, setCurrent]   = useState(0)
  const [activeId, setActiveId] = useState(null)
  const total = VIDEOS.length

  const postToFrame = useCallback((videoId, mute) => {
    const frame = document.getElementById(`yt-${videoId}`)
    if (!frame) return
    frame.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: mute ? 'mute' : 'unMute', args: [] }),
      '*'
    )
  }, [])

  const handleToggleSound = useCallback((clickedId) => {
    if (activeId === clickedId) {
      postToFrame(clickedId, true)
      setActiveId(null)
    } else {
      if (activeId) postToFrame(activeId, true)
      postToFrame(clickedId, false)
      setActiveId(clickedId)
    }
  }, [activeId, postToFrame])

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section className={styles.section} id="video">

      <div className="container">
        <span className="section-tag reveal">Watch It Live</span>
        <h2 className="section-title reveal">
          Have A <span className="gradient-text">Look</span>
        </h2>

        {/* ── Carousel ── */}
        <div className={styles.carousel}>

          {/* Prev arrow */}
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Viewport — clipped to container width */}
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(calc(-${current} * (100% + 20px)))` }}
            >
              {VIDEOS.map((v) => (
                <VideoCard
                  key={v.id}
                  video={v}
                  isActive={activeId === v.id}
                  onToggleSound={handleToggleSound}
                />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
