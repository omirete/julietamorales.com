import { useContext } from 'react'
import LangContext from '../../contexts/LangContext'

const About: React.FC = () => {
  const lang = useContext(LangContext)
  return (
    <div className="mt-4">
      <p>{lang.about_1}</p>
      <p>{lang.about_2}</p>
      <p>{lang.about_3}</p>
      <p>{lang.about_4}</p>
      <p>{lang.about_5}</p>
    </div>
  )
}

export default About
