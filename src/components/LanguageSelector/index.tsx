import {
  Dispatch,
  Fragment,
  HTMLProps,
  ReactElement,
  SetStateAction,
  useContext,
} from 'react'
import LangContext, { availableLanguages } from 'contexts/LangContext'

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
        {availableLanguages.map((avLang) => {
          const isActive = lang._code === avLang._code
          return (
            <Fragment>
              <input
                type="radio"
                className="btn-check"
                id={`btn-lang-${avLang._code}`}
                autoComplete="off"
                checked={isActive}
                onClick={() => setLanguage(avLang)}
              />
              <label
                // className="btn btn-sm btn-outline-light border-0 rounded shadow-none me-1"
                className={`
                  transition-all
                  py-1 px-2 me-1
                  rounded
                  bg-white
                  ${isActive ? 'bg-opacity-50' : 'bg-opacity-0'}
                  hover-bg-opacity-75 hover-text-dark
                  text-white
                  small
                  d-flex flex-row flex-nowrap align-items-center
                `}
                htmlFor={`btn-lang-${avLang._code}`}
              >
                <div className="h5 m-0 p-0">{avLang._flag}</div>
                <div className="ms-1">{avLang._name}</div>
              </label>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageSelector
