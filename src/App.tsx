import Header from './sections/Header'
import About from './sections/About'
import ActionButtons from './sections/ActionButtons'
import Footer from './sections/Footer'
import LanguageSelector from './components/LanguageSelector'
import LangContext from './contexts/LangContext'
import SectionDivider from 'components/SectionDivider'
import useLanguage from 'hooks/useLanguage'

function App() {
  const [language, setLanguage] = useLanguage()
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
