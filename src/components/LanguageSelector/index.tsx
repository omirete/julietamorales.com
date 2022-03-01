const LanguageSelector: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <small>
        Español
        <span> </span>|<span> </span>
        <a href="en.html" className="text-info">
          English
        </a>
      </small>
    </div>
  )
}

export default LanguageSelector
