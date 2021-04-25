// Socials
import TelegramIcon from '../static/TelegramIcon'
import InstagramIcon from '../static/InstagramIcon'

// Styles
import '../scss/socials.scss'

export default function Socials() {
    const socLinks = [
        { icon: InstagramIcon(), href: 'https://www.instagram.com/myrtolv/' },
        { icon: TelegramIcon(), href: 'https://telegram.me/myrtol' },
    ]

    return (
        <div className='socials'>
            {socLinks.map((link) => {
                return (
                    <a className='socials__link' rel='noreferrer' target='_blank' href={link.href}>
                        {link.icon}
                    </a>
                )
            })}
        </div>
    )
}
