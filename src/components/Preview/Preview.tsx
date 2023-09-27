import Container from '../Container/Container'

import photo from '../../img/preview/mirosh-with-laptop.png'
import shapeUnder from '../../img/preview/shape-under-mirosh.png'
import div from '../../img/preview/div.svg'
import script from '../../img/preview/script.svg'
import span from '../../img/preview/span.svg'
import mirosh from '../../img/preview/mirosh.svg'
import elips from '../../img/preview/elips.svg'
import elipsSmall from '../../img/preview/elips-small.svg'

import styles from './Preview.module.scss'
import Heading from '../Heading/Heading'

const Preview:React.FC = ():JSX.Element => {
  return (
    <section className={styles.preview}>
      <Container isBig={true} className={styles.outer}>
        <div className={styles.div}>
          <img src={div} alt='div-svg' />
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
            <Heading text='Разработка сайтов' level={1} />
            <Heading text='Под ключ' level={3} />
          </div>

          <div>next</div>
          <div>mouse</div>
        </Container>
        <div className={styles.photo}>
          <img src={photo} alt='mirosh-with-laptop' />
        </div>
        <div className={styles.under}>
          <img src={shapeUnder} alt='shape-under-mirosh' />
        </div>
      </Container>
    </section>
  )
}

export default Preview
