import { Dispatch, Fragment, SetStateAction, useContext } from 'react'
import LangContext, { availableLanguages } from '../../contexts/LangContext'

export interface LanguageSelectorProps {
  setLanguage: Dispatch<SetStateAction<typeof availableLanguages[0]>>
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
  const lang = useContext(LangContext)
  return (
    <div className="d-flex justify-content-center">
        <div
          className="btn-group ps-1"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          {availableLanguages.map((avLang) => 
            <Fragment>
              <input
                type="radio"
                className="btn-check"
                id={`btn-lang-${avLang._code}`}
                autoComplete="off"
                checked={lang._code === avLang._code}
                onClick={() => setLanguage(avLang)}
              />
              <label
                className="btn btn-sm btn-outline-secondary border-0 rounded shadow-none me-1"
                htmlFor={`btn-lang-${avLang._code}`}
              >
                {avLang._flag} {avLang._name}
              </label>
            </Fragment>
          )}
        </div>
    </div>
  )
}

export default LanguageSelector
