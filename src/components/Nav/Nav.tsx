import { useState } from 'react'

import { Link } from '../Header/Header'

import styles from './Nav.module.scss'

type NavPropsTypes = {
  navLinks: Array<Link>
  opened: boolean
}

const Nav: React.FC<NavPropsTypes> = (props): JSX.Element => {
  const { navLinks, opened } = props

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const toggleLinksClass = (index: number) => {
    setActiveIndex(index)
  }

  const classNames = [styles.nav]
  opened && classNames.push(styles._opened)

  return (
    <nav className={classNames.join(' ')}>
      <ul className={styles.list}>
        {navLinks.map((link, index) => {
          const delayOnTransiotion = {
            transitionDuration: `${(navLinks.length + Number(index) + 1) / 6}s`,
          }
          const classNames = [styles.link]
          if (activeIndex === index) classNames.push(styles._active)

          return (
            <li className={styles.item} style={delayOnTransiotion}>
              <a
                className={classNames.join(' ')}
                href={link.href}
                key={index.toString()}
                onClick={() => {
                  toggleLinksClass(index)
                }}>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
