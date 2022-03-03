import { ReactElement, useContext } from 'react'
import LangContext from 'contexts/LangContext'

const About: React.FC = () => {
  const lang = useContext(LangContext)

  const aboutContent: Array<{icon: string | ReactElement, text: string | ReactElement}> = [
    { icon: '🇦🇷', text: lang.about_1 },
    { icon: '📚', text: lang.about_2 },
    { icon: '👩🏻‍💻', text: lang.about_3 },
    { icon: '🌎', text: lang.about_4 },
    { icon: '⚖️', text: lang.about_5 },
    { icon: '✈️', text: lang.about_6 },
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
                transition-all
                border-${i % 2 !== 0 ? 'end' : 'start'}
                border-3 border-white
                rounded-${i % 2 !== 0 ? 'start' : 'end'}
                text-${i % 2 !== 0 ? 'end' : 'start'}
                px-2 py-1
                shadow-sm hover-shadow
                hover-enlarge
                w-100
                bg-white bg-opacity-25
                text-white
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
