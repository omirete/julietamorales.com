import SocialRow from 'components/SocialRow'
import { ReactComponent as Signature } from 'assets/svg/signature.svg'

const Footer: React.FC = () => {
  return (
    <div className="text-decoration-none mt-4 text-center">
      <SocialRow className="h3" iconClassName='text-white opacity-50 hover-opacity-100 transition-all' />
      <Signature className="my-4 opacity-50" style={{ fill: '#ffffff' }} />
    </div>
  )
}

export default Footer
