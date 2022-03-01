import ActionButton from '../../components/ActionButton'

const ActionButtons: React.FC = () => {
  return (
    <div className="d-flex flex-column mt-4">
      <ActionButton
        href="cv/CV_Julieta_Morales_(Espa%f1ol).pdf"
        download="cv/CV_Julieta_Morales_(Espa%f1ol).pdf"
        className="btn btn-outline-dark mb-3"
        text="Descargá mi CV"
        iconClass="bi-download"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://articulo.mercadolibre.com.ar/mla-1122176278-libro-santa-carolina-julieta-morales-_jm"
        className="btn btn-outline-dark mb-3"
        text="Conseguí mi libro en Argentina"
        iconClass="bi-book"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://www.casadellibro.com/libro-santa-carolina/9788497439299/12350828"
        className="btn btn-outline-dark mb-3"
        text="Conseguí mi libro en Europa"
        iconClass="bi-book"
        role="button"
        target="_blank"
      />
      <ActionButton
        href="https://www.casadellibro.com/libro-santa-carolina/9788497439299/12350828"
        className="btn btn-outline-dark mb-3"
        text="Mi podcast: La historia de la concha"
        iconClass="bi-mic"
        role="button"
        target="_blank"
      />
    </div>
  )
}

export default ActionButtons
