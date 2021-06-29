import { useState } from 'react'

// Components
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Socials from '../Socials/Socials'
import Burger from '../Burger/Burger'
import Container from '../Container/Container'

// Styles
import styles from './Header.module.scss'

// Images
import phone from '../../img/icons/phone.svg'

const Header = () => {
  const navLinks = [
    { text: 'Про меня', href: '/about' },
    { text: 'Как я работаю', href: '/how--do-i-work' },
    { text: 'Мои работы', href: '/works' },
    { text: 'Контакты', href: '/contacts' },
  ]

  const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)

  return (
    <header className={styles.header}>
      <Container className={styles.container} isBig={true}>
        <div className={styles.inner}>
          <Logo />

          <Nav
            navLinks={navLinks}
            opened={burgerMenuOpened}
            setOpened={setBurgerMenuOpened}
          />

          <Socials />
          <Burger
            burgerMenuOpened={burgerMenuOpened}
            onClick={() => setBurgerMenuOpened(!burgerMenuOpened)}
          />
        </div>
        <div className={styles.contact}>
          <p>Свяжитесь со мной</p>

          <a href='tel:+380975079115' className={styles.phone}>
            <img src={phone} alt='phone' />
          </a>
        </div>
      </Container>
    </header>
  )
}

export default Header
