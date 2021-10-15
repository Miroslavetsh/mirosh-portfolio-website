// Socials
import TelegramIcon from '../Svg\'s/SocialsIcons/TelegramIcon'
import InstagramIcon from '../Svg\'s/SocialsIcons/InstagramIcon'

// Styles
import styles from './Socials.module.scss'

type SocLink = {
  icon: React.ReactElement
  href: string
}

const Socials = () => {
  const socLinks: Array<SocLink> = [
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/myrtolv/' },
    { icon: <TelegramIcon />, href: 'https://telegram.me/myrtol' },
  ]

  return (
    <div className={styles.socials}>
      {socLinks.map((link) => {
        return (
          <a
            className={styles.link}
            rel='noreferrer'
            target='_blank'
            href={link.href}>
            {link.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Socials
