import React from 'react'
import en from 'lang/en'
import es from 'lang/es'

const LangContext = React.createContext(en)

export const availableLanguages = [en, es]

export default LangContext
