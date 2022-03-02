import SocialRow from 'components/SocialRow'
import { ReactComponent as Signature } from 'images/svg/signature.svg'

const Footer: React.FC = () => {
  return (
    <div className="h3 text-decoration-none me-2 mt-3 text-center">
      <SocialRow className="ms-2" iconClassName='text-white opacity-50 hover-opacity-100 transition-all' />
      <Signature className="mt-4 opacity-50" style={{ fill: '#ffffff' }} />
    </div>
  )
}

export default Footer
