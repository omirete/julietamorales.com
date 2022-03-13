import { HTMLProps } from 'react'
import ActionButton from 'components/ActionButton'

export interface SocialRowProps extends HTMLProps<HTMLDivElement> {
  iconClassName?: string
}

const SocialNetworks = [
  {
    description: 'linkedin',
    href: 'https://www.linkedin.com/in/julietamo/',
    iconClass: 'bi-linkedin',
  },
  {
    description: 'instagram',
    href: 'https://www.instagram.com/julieta_morales/',
    iconClass: 'bi-instagram',
  },
  {
    description: 'twitter',
    href: 'https://twitter.com/femininja___',
    iconClass: 'bi-twitter',
  },
  {
    description: 'facebook',
    href: 'https://www.facebook.com/JulietaMo',
    iconClass: 'bi-facebook',
  },
  {
    description: 'mail',
    href: 'mailto:hello@julietamorales.com',
    iconClass: 'bi-envelope',
  },
]

const SocialRow: React.FC<SocialRowProps> = ({ iconClassName, ...props }) => {
  return (
    <div {...props}>
      {SocialNetworks.map((sn) => (
        <ActionButton
          href={sn.href}
          iconClass={sn.iconClass}
          text=""
          role="button"
          target="_blank"
          className={iconClassName}
          label={sn.description}
        />
      ))}
    </div>
  )
}

export default SocialRow
