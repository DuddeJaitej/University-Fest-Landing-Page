import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar/Navbar'
import Home   from './pages/Home'
import Footer  from './components/Footer/Footer'

export default function App() {
  // Wire up the global scroll-reveal observer after every render
  useScrollReveal()

  // Re-run reveal on tab switches (Events/Schedule render new .reveal nodes)
  useEffect(() => {
    // Small delay lets React paint the new nodes first
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) el.classList.add('visible')
      })
    }, 50)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
