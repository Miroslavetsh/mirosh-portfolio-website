import { Component } from 'react'
import classNames from 'classnames'

// Styles
import styles from './Nav.module.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.navLinks = props.navLinks

    this.toggleLinksClass = this.toggleLinksClass.bind(this)

    this.state = { activeIndex: 0 }
  }

  toggleLinksClass(index) {
    this.setState({ activeIndex: index })
  }

  render() {
    return (
      <nav
        className={classNames(
          styles.nav,
          this.props.opened ? styles._opened : ''
        )}>
        <ul className={styles.list}>
          {this.navLinks.map((link, index) => {
            const delayOnTransiotion = {
              transitionDuration: `${
                (this.navLinks.length + Number(index) + 1) / 6
              }s`,
            }

            return (
              <li className={styles.item} style={delayOnTransiotion}>
                <a
                  className={classNames(
                    styles.link,
                    this.state.activeIndex === index ? styles._active : ''
                  )}
                  href={link.href}
                  key={index.toString()}
                  onClick={(event) => {
                    event.preventDefault()
                    this.toggleLinksClass(index)
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
}

export default Nav
