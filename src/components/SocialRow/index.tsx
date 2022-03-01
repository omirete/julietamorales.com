import { HTMLProps } from 'react'
import ActionButton from '../ActionButton'

export interface SocialRowProps extends HTMLProps<HTMLDivElement> {
  iconClassName?: string
}

const SocialRow: React.FC<SocialRowProps> = ({
  iconClassName,
  ...props
}) => {
  return (
    <div {...props}>
      <ActionButton
        href="https://www.linkedin.com/in/julietamo/"
        iconClass="bi-linkedin"
        text=""
        role="button"
        target="_blank"
        className={iconClassName}
      />
      <ActionButton
        href="https://www.instagram.com/julieta_morales/"
        iconClass="bi-instagram"
        text=""
        role="button"
        target="_blank"
        className={iconClassName}
      />
      <ActionButton
        href="https://twitter.com/femininja___"
        iconClass="bi-twitter"
        text=""
        role="button"
        target="_blank"
        className={iconClassName}
      />
      <ActionButton
        href="https://www.facebook.com/JulietaMo"
        iconClass="bi-facebook"
        text=""
        role="button"
        target="_blank"
        className={iconClassName}
      />
      <ActionButton
        href="mailto:contact@julietamorales.com"
        iconClass="bi-envelope"
        text=""
        role="button"
        target="_blank"
        className={iconClassName}
      />
    </div>
  )
}

export default SocialRow
