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
  const iconClasses =
    'd-flex align-items-center justify-content-center h1 px-3 m-0 py-0 transition-all hover-enlarge-2'
  return (
    <div className="">
      {aboutContent.map((card, i) => (
        <div className="d-flex flex-row flex-nowrap mt-4">
          {i % 2 === 0 && (
            <div className={iconClasses} style={{ minWidth: '15%' }}>
              {card.icon}
            </div>
          )}
          <div
            className={`
                border-${i % 2 !== 0 ? 'end' : 'start'}
                rounded-${i % 2 !== 0 ? 'start' : 'end'}
                text-${i % 2 !== 0 ? 'end' : 'start'}
                px-2 py-1
                border-3 bg-light
                shadow-sm
                transition-all
                hover-enlarge
                hover-shadow
                w-100
              `}
          >
            {card.text}
          </div>
          {i % 2 !== 0 && (
            <div className={iconClasses} style={{ minWidth: '15%' }}>
              {card.icon}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default About
