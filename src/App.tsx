import Header from './sections/Header'
import About from './sections/About'
import ActionButtons from './sections/ActionButtons'
import Footer from './sections/Footer'
import LanguageSelector from './components/LanguageSelector'
import LangContext from './contexts/LangContext'
import en from './lang/en'
import { useState } from 'react'
import SectionDivider from 'components/SectionDivider'

function App() {
  const [language, setLanguage] = useState(en)
  return (
    <LangContext.Provider value={language}>
      <div className="w-100 row g-0 py-4 px-3 justify-content-center app-background">
        <div className="col-sm-12 col-md-10 col-lg-8">
          <div className="min-vh-100 d-flex flex-column">
            <LanguageSelector setLanguage={setLanguage} />
            <Header />
          </div>
          <About />
          <SectionDivider />
          <ActionButtons />
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  )
}

export default App
