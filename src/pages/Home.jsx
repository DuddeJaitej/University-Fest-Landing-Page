import Hero         from '../components/Hero/Hero'
import VideoSection from '../components/VideoSection/VideoSection'
import Intro        from '../components/Intro/Intro'
import About        from '../components/About/About'
import Events       from '../components/Events/Events'
import Schedule     from '../components/Schedule/Schedule'
import Artists      from '../components/Artists/Artists'
import Passes       from '../components/Passes/Passes'

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Intro />
      <About />
      <Events />
      <Schedule />
      <Artists />
      <Passes />
    </main>
  )
}
