import { useState } from 'react'

import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Socials from '../Socials/Socials'
import Burger from '../Burger/Burger'
import Container from '../Container/Container'

import phone from '../../img/icons/phone.svg'

import styles from './Header.module.scss'

export type Link = {
  text: string
  href: string
}

const navLinks: Array<Link> = [
  { text: 'About Me', href: '#about' },
  // { text: 'How I Work', href: '#how-do-i-work' },
  { text: 'My certificates', href: '#certificates' },
  // { text: 'Contacts', href: '#contacts' },
]

const Header: React.FC = (): JSX.Element => {
  const [burgerMenuOpened, setBurgerMenuOpened] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <Container className={styles.container} isBig={true}>
        <div className={styles.inner}>
          <Logo />

          <Nav navLinks={navLinks} opened={burgerMenuOpened} />

          <Socials />

          <Burger
            burgerMenuOpened={burgerMenuOpened}
            onClick={() => {
              setBurgerMenuOpened(!burgerMenuOpened)
            }}
          />
        </div>
        <div className={styles.contact}>
          <p>Call Me</p>

          <a href='tel:+380975079115' className={styles.phone}>
            <img src={phone} alt='phone' />
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
