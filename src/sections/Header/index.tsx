import { useContext } from 'react'
import AudioPlayer from '../../components/AudioPlayer'
import SocialRow from '../../components/SocialRow'
import LangContext from '../../contexts/LangContext'

const Header: React.FC = () => {
  const lang = useContext(LangContext)
  return (
    <AudioPlayer
      title="Escuchame!"
      url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      className="mt-2 shadow-sm border rounded text-white app-background"
      // style={{backgroundColor: '#0c6229'}}
    >
      <div className="d-flex flex-row align-items-center">
        <img
          src="profile.jpg"
          alt="perfil"
          width="100px"
          height="100px"
          className="rounded shadow-sm"
        />
        <div className="ms-2 flex-fill">
          <h5 className="align-items-center mb-0">Julieta Morales</h5>
          <h6 className="mb-1">{lang.profile_card_subtitle}</h6>
          <p className="mb-0">{lang.profile_card_job_title}</p>
          <div className="mt-0">
            <SocialRow iconClassName="text-white" />
          </div>
        </div>
      </div>
    </AudioPlayer>
  )
}

export default Header
