import { ReactNode } from 'react'

import styles from './Container.module.scss'

type ContainerPropsTypes = {
  children?: ReactNode
  className?: string
  isBig?: boolean
  id?: string
}

const Container: React.FC<ContainerPropsTypes> = (props): JSX.Element => {
  const { children, className, isBig, id } = props
  const classNames = [styles.container, className]
  isBig && classNames.push(styles._big)

  return (
    <div id={id} className={classNames.join(' ')}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  children: <span></span>,
  className: '',
  isBig: false,
}

export default Container
