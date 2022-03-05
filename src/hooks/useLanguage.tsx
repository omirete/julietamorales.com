import { availableLanguages } from 'contexts/LangContext'
import en from 'lang/en'
import { useEffect, useState } from 'react'
const DEFAULT_LANGUAGE = en

const useLanguage = (): [typeof en, React.Dispatch<React.SetStateAction<string>>] => {
  const [langCode, setLangCode] = useState<string>(
    localStorage.getItem('langCode') || DEFAULT_LANGUAGE._code,
  )

  useEffect(() => {
    localStorage.setItem('langCode', langCode)
  }, [langCode])

  return [
    availableLanguages.find((avLang) => avLang._code === langCode) || DEFAULT_LANGUAGE,
    setLangCode,
  ]
}

export default useLanguage
