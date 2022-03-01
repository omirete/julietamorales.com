export interface ActionButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  iconClass: string
  text: string
}

const ActionButton: React.FC<ActionButtonProps> = ({
  iconClass,
  text,
  className,
  ...props
}) => {
  return (
    <a className={className} {...props}>
      <i className={`${iconClass} me-2`}></i>
      {text}
    </a>
  )
}

export default ActionButton
