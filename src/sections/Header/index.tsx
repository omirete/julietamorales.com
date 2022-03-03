import { useContext } from 'react'
import AudioPlayer from 'components/AudioPlayer'
import LangContext from 'contexts/LangContext'
import { ReactComponent as SignatureLine } from 'assets/svg/signature_line.svg'
import SocialRow from 'components/SocialRow'

const Header: React.FC = () => {
  const lang = useContext(LangContext)
  return (
    <div className="mt-4 d-flex flex-column flex-fill">
      <AudioPlayer
        title="Escuchame!"
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        className="text-white bg-white bg-opacity-25 rounded w-100 mt-4"
      >
        <div className="d-flex flex-row align-items-center">
          <img
            src="profile.jpg"
            alt="perfil"
            // width="100px"
            height="100px"
            className="rounded shadow-sm"
          />
          <div className="ms-2 flex-fill">
            <h5 className="mb-0">Julieta Morales</h5>
            <h6 className="mb-1">{lang.profile_card_subtitle}</h6>
            <p className="mb-0">{lang.profile_card_job_title}</p>
          </div>
        </div>
      </AudioPlayer>
      <div className="flex-fill d-flex flex-column justify-content-center">
        <SignatureLine className="w-100 mt-5 text-center align-center mt-3 fill-white opacity-75" />
        <SocialRow
          className="h3 text-decoration-none ms-2 me-2 mt-3 text-center"
          iconClassName="text-white opacity-50 hover-opacity-100 transition-all"
        />
      </div>
      <div className="mt-4 mb-5 pb-5 mb-md-3 pb-md-3">
        <div className="text-light opacity-75 text-center">
          {lang.scroll_down_to_see_more}
        </div>
        <i className="d-block text-center bi bi-chevron-compact-down text-light opacity-50 h1" />
      </div>
    </div>
  )
}

export default Header
