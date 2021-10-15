import Container from '../Container/Container'

import styles from './Preview.module.scss'

const Preview = () => {
  return (
    <section className={styles.preview}>
      <Container isBig={true}>
        <Container>
          <div className={styles.text}>
            {/* <FirtLevelHeading />
            <ThirdLevelHeading /> */}
          </div>
        </Container>
      </Container>
    </section>
  )
}

export default Preview
