import SocialRow from 'components/SocialRow'
import { ReactComponent as Signature } from 'images/svg/signature.svg'

const Footer: React.FC = () => {
  return (
    <div className="h3 text-decoration-none me-2 mt-3 text-center">
      <SocialRow className="ms-2" iconClassName="text-muted" />
      <Signature className="mt-4" style={{ fill: '#6C757D' }} />
    </div>
  )
}

export default Footer
