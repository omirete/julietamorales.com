import { Dispatch, Fragment, SetStateAction, useContext } from 'react'
import LangContext from '../../contexts/LangContext'
import en from '../../lang/en'
import es from '../../lang/es'

export interface LanguageSelectorProps {
  setLanguage: Dispatch<SetStateAction<typeof en>>
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
  const lang = useContext(LangContext)
  return (
    <div className="d-flex justify-content-center">
      <small>
        {lang._current === 'en' && (
          <Fragment>
            <a href="#" className="text-info" onClick={() => setLanguage(es)}>
              Español
            </a>
            <span> </span>|<span> </span>
            English
          </Fragment>
        )}
        {lang._current === 'es' && (
          <Fragment>
            Español
            <span> </span>|<span> </span>
            <a href="#" className="text-info" onClick={() => setLanguage(en)}>
              English
            </a>
          </Fragment>
        )}
      </small>
    </div>
  )
}

export default LanguageSelector
