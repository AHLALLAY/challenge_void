import Footer from './components/Footer.tsx'
import NavBar from './components/Navbar.tsx'
import HeroSection from './views/HeroSection.tsx'
import SolutionSection from './views/SolutionSection.tsx'
import ParcoursClientSection from './views/ParcoursClientSection.tsx'
import TransformationSection from './views/TransformationSection.tsx'
import GestionSection from './views/GestionSection.tsx'
import CapacitesSection from './views/CapacitesSection.tsx'
import FormulesSection from './views/FormulesSection.tsx'
import CatalogueSection from './views/CatalogueSection.tsx'
import KpisSection from './views/KpisSection.tsx'
import CtaSection from './views/CtaSection.tsx'

function App() {
  return (
    <>
      <a href="#album" className="skip-link">
        Aller au contenu
      </a>
      <NavBar />
      <main id="main-content" role="main">
        <HeroSection />
        <SolutionSection />
        <ParcoursClientSection />
        <TransformationSection />
        <GestionSection />
        <CapacitesSection />
        <FormulesSection />
        <CatalogueSection />
        <KpisSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
