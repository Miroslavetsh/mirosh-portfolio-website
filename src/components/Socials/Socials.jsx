// Socials
import TelegramIcon from './IconsComponents/TelegramIcon'
import InstagramIcon from './IconsComponents/InstagramIcon'

// Styles
import styles from './Socials.module.scss'

const Socials = () => {
  const socLinks = [
    { icon: InstagramIcon(), href: 'https://www.instagram.com/myrtolv/' },
    { icon: TelegramIcon(), href: 'https://telegram.me/myrtol' },
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
