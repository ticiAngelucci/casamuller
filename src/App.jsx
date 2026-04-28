import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import translations from './data/translations'
import images from './data/images'

function App() {
  const [language, setLanguage] = useState('es')
  const [isLoading, setIsLoading] = useState(true)
  const t = translations[language]

  useEffect(() => {
    let timeoutId

    const finishLoading = () => {
      timeoutId = window.setTimeout(() => setIsLoading(false), 1400)
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="bg-sand-50 text-stone-800">
      <AnimatePresence>{isLoading && <LoadingScreen t={t} />}</AnimatePresence>
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} images={images.hero} />
        <About t={t} images={images.gallery} />
        <Services t={t} />
        <Gallery t={t} images={images.gallery} />
        <Experience t={t} images={images.experience} />
        <Location t={t} />
        <Contact t={t} />
      </main>
      <FloatingWhatsApp t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App
