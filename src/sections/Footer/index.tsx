import SocialRow from "../../components/SocialRow"

const Footer: React.FC = () => {
  return (
    <div className="d-flex mt-3 justify-content-center">
      <h3 className="text-decoration-none me-2 mt-0">
        <SocialRow className="ms-2" iconClassName="text-muted"/>
      </h3>
    </div>
  )
}

export default Footer
