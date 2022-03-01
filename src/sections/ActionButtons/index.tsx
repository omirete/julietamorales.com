import { useContext } from 'react'
import ActionButton from '../../components/ActionButton'
import LangContext from '../../contexts/LangContext'

const ActionButtons: React.FC = () => {
  const lang = useContext(LangContext)
  return (
    <div className="d-flex flex-column mt-4">
      <ActionButton
        href={lang.download_cv_link}
        download={lang.download_cv_link}
        className="btn btn-outline-dark mb-3"
        text={lang.download_cv}
        iconClass="bi-download"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://articulo.mercadolibre.com.ar/mla-1122176278-libro-santa-carolina-julieta-morales-_jm"
        className="btn btn-outline-dark mb-3"
        text={lang.get_my_book_arg}
        iconClass="bi-book"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://www.casadellibro.com/libro-santa-carolina/9788497439299/12350828"
        className="btn btn-outline-dark mb-3"
        text={lang.get_my_book_eu}
        iconClass="bi-book"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://lahistoriadelaconcha.com.ar/"
        className="btn btn-outline-dark mb-3"
        text={lang.my_podcast}
        iconClass="bi-mic"
        role="button"
        target="_blank"
      />
    </div>
  )
}

export default ActionButtons
