// Styles
import classNames from 'classnames'
import styles from './Container.module.scss'

const Container = ({ children, className, isBig = false }) => {
  return (
    <div
      className={classNames(
        styles.container,
        className,
        isBig ? styles._big : ''
      )}>
      {children}
    </div>
  )
}

export default Container
