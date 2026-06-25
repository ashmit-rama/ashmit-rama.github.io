import Navbar from './components/Navbar'
import AuroraBackground from './components/AuroraBackground'
import BootIntro from './components/BootIntro'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <BootIntro />
      <AuroraBackground />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Ticker />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
