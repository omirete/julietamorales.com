import Header from './sections/Header'
import About from './sections/About'
import ActionButtons from './sections/ActionButtons'
import Footer from './sections/Footer'
import LanguageSelector from './components/LanguageSelector'

function App() {
  return (
    <div className="w-100 row g-0 py-4 px-3 justify-content-center">
      <div className="my-4 col-sm-12 col-md-10 col-lg-8 p-4">
        <LanguageSelector />
        <Header />
        <About />
        <ActionButtons />
        <Footer />
      </div>
    </div>
  )
}

export default App
