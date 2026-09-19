import { useEffect, useState } from 'react'
import CapabilitiesSection from './components/CapabilitiesSection'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import JournalSection from './components/JournalSection'
import JourneyTimeline from './components/JourneyTimeline'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import PlaygroundSection from './components/PlaygroundSection'
import ProcessSection from './components/ProcessSection'
import ProjectGrid from './components/ProjectGrid'
import StatsSection from './components/StatsSection'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loaded])

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ProjectGrid />
        <ProcessSection />
        <JournalSection />
        <JourneyTimeline />
        <PlaygroundSection />
        <StatsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
