import { useContext } from 'react'
import LangContext from 'contexts/LangContext'

const About: React.FC = () => {
  const lang = useContext(LangContext)

  const aboutContent = [
    { icon: '🇦🇷', text: lang.about_1 },
    { icon: '📚', text: lang.about_2 },
    { icon: '👩🏻‍💻', text: lang.about_3 },
    { icon: '🌎', text: lang.about_4 },
    { icon: '✈️', text: lang.about_5 },
  ]
  const iconClasses = 'col-2 d-flex align-items-center justify-content-center h1'
  return (
    <div className="mt-4 px-3 pt-2 pb-4 border border-secondary rounded shadow-sm">
      {aboutContent.map((card, i) => (
        <p className="row mx-3 mt-4">
          {i % 2 === 0 && (
            <div className={iconClasses}>
              {card.icon}
            </div>
          )}
          <div
            className={`
                col-10
                border-${i % 2 !== 0 ? 'end' : 'start'}
                rounded-${i % 2 !== 0 ? 'start' : 'end'}
                border-3 bg-light
                shadow-sm
              `}
          >
            {card.text}
          </div>
          {i % 2 !== 0 && (
            <div className={iconClasses}>
              {card.icon}
            </div>
          )}
        </p>
      ))}
    </div>
  )
}

export default About
