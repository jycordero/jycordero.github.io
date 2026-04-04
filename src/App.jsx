import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Jobs from './components/Jobs'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">

      {/* ── Left panel — white, sticky ── */}
      <aside
        className="w-full md:w-[42%] md:sticky md:top-0 md:h-screen flex-shrink-0"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Header />
      </aside>

      {/* ── Right panel — blue, scrollable ── */}
      <main
        className="right-panel w-full md:w-[58%] md:h-screen md:overflow-y-auto"
        style={{ backgroundColor: '#C8DCF0' }}
      >
        <About />
        <Experience />
        <Projects />
        <Jobs />
        <Leadership />
        <Awards />
        <Education />
        <Interests />
        <Footer />
      </main>

    </div>
  )
}
