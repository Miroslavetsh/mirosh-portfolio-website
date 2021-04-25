import { useState } from 'react'

// Components
import Logo from './Logo'
import Nav from './Nav'
import Socials from './Socials'

// Styles
import '../scss/header.scss'

// Images
import phone from '../img/icons/phone.svg'

export default function Header() {
    const navLinks = [
        { text: 'Про меня', href: '/about' },
        { text: 'Как я работаю', href: '/how--do-i-work' },
        { text: 'Мои работы', href: '/works' },
        { text: 'Контакты', href: '/contacts' },
    ]

    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false)

    return (
        <header className='header'>
            <div className='container container--big'>
                <div className='header__inner'>
                    <Logo />

                    <Nav
                        navLinks={navLinks}
                        opened={burgerMenuOpened}
                        setOpened={setBurgerMenuOpened}
                    />

                    <Socials />
                    <div
                        className={burgerMenuOpened ? 'header__burger _opened' : 'header__burger'}
                        onClick={() => setBurgerMenuOpened(!burgerMenuOpened)}>
                        <svg width='100' height='100' viewBox='0 0 100 100'>
                            <path
                                className='line line1'
                                d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                            />
                            <path className='line line2' d='M 20,50 H 80' />
                            <path
                                className='line line3'
                                d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                            />
                        </svg>
                    </div>
                </div>
                <div className='header__contact'>
                    <p>Свяжитесь со мной</p>

                    <a href='tel:+380975079115' className='header__contact--phone'>
                        <img src={phone} alt='phone' />
                    </a>
                </div>
            </div>
        </header>
    )
}
