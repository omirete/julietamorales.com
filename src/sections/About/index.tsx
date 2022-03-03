import { ReactElement, useContext } from 'react'
import LangContext from 'contexts/LangContext'
import { ReactComponent as IconFlagArg } from 'assets/twemoji/flag_argentina.svg'
import { ReactComponent as IconBooks } from 'assets/twemoji/books.svg'
import { ReactComponent as IconGirlLaptop } from 'assets/twemoji/girl_laptop.svg'
import { ReactComponent as IconWorld } from 'assets/twemoji/world.svg'
import { ReactComponent as IconScale } from 'assets/twemoji/scale.svg'
import { ReactComponent as IconAirplane } from 'assets/twemoji/airplane.svg'

const About: React.FC = () => {
  const lang = useContext(LangContext)

  const iconStyles = { width: '2ch' }
  const aboutContent = [
    { icon: <IconFlagArg style={iconStyles} />, text: lang.about_1 },
    { icon: <IconBooks style={iconStyles} />, text: lang.about_2 },
    { icon: <IconGirlLaptop style={iconStyles} />, text: lang.about_3 },
    { icon: <IconWorld style={iconStyles} />, text: lang.about_4 },
    { icon: <IconScale style={iconStyles} />, text: lang.about_5 },
    { icon: <IconAirplane style={iconStyles} />, text: lang.about_6 },
  ]
  const iconClasses =
    'd-flex align-items-center justify-content-center h1 px-3 m-0 py-0 transition-all hover-enlarge-2'
  const CardIcon: React.FC<{ icon: string | ReactElement }> = ({ icon }) => (
    <div className={iconClasses} style={{ minWidth: '15%' }}>
      {icon}
    </div>
  )
  return (
    <div>
      {aboutContent.map((card, i) => (
        <div className="d-flex flex-row flex-nowrap mt-5 pt-4 justify-content-center">
          {i % 2 === 0 && (
            <CardIcon icon={card.icon} />
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
            <CardIcon icon={card.icon} />
          )}
        </div>
      ))}
    </div>
  )
}

export default About
