import React from 'react'

import Container from '../Container/Container'

import elipsSmall from '../../img/preview/elips-small.svg'
import script from '../../img/preview/script.svg'
import span from '../../img/preview/span.svg'
import mirosh from '../../img/about-me/mirosh.png'
import dots from '../../img/about-me/dots.svg'
import elips from '../../img/preview/elips.svg'

import styles from './AboutMe.module.scss'
import Heading from '../Heading/Heading'

const AboutMe: React.FC = () => {
  return (
    <Container id='about' isBig={true} className={styles.outer}>
      <div className={styles.dots}>
        <img src={dots} alt='dots-svg' />
      </div>

      <div className={styles.script}>
        <img src={script} alt='script-svg' />
      </div>

      <div className={styles.span}>
        <img src={span} alt='span-svg' />
      </div>

      <div className={styles.mirosh}>
        <img src={mirosh} alt='mirosh-svg' />
      </div>

      <div className={styles.elips}>
        <img src={elips} alt='elips-svg' />
      </div>

      <div className={styles.elipsSmall}>
        <img src={elipsSmall} alt='elips-small-svg' />
      </div>

      <Container className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.inner}>
            <Heading text='Few Words' level={3} />
            <Heading text='About Me' level={1} />
            <table className={styles.list}>
              <tr>
                <td>Experience</td>
                <td>3.5 years</td>
              </tr>
              <tr>
                <td>Degree</td>
                <td>Master of Networking and Web Technologies</td>
              </tr>
            </table>
            <p>
              Experienced Software Engineer (3.5+ years of experience).
              Freestyler, Leader, Mentor and Achiever with deep understanding of
              sustainability and architecture shaping.
            </p>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default AboutMe
