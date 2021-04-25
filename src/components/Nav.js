import { Component } from 'react'

// Styles
import '../scss/nav.scss'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.navLinks = props.navLinks

        this.toggleLinksClass = this.toggleLinksClass.bind(this)

        this.state = {
            activeIndex: 0,
        }
    }

    toggleLinksClass(index, e) {
        this.setState({ activeIndex: index })
    }

    render() {
        return (
            <nav className={this.props.opened ? 'nav _opened' : 'nav'}>
                <ul className='nav__list'>
                    {this.navLinks.map((link, index) => {
                        const delayOnTransiotion = {
                            transitionDuration: `${
                                (this.navLinks.length + Number(index) + 1) / 6
                            }s`,
                        }

                        return (
                            <li className='nav__item' style={delayOnTransiotion}>
                                <a
                                    className={
                                        this.state.activeIndex === index
                                            ? 'nav__link _active'
                                            : 'nav__link'
                                    }
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
