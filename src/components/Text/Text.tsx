import styles from './Heading.module.scss'

type TextPropsTypes = {
  text: string
  level: number
}

const Text: React.FC<TextPropsTypes> = (props): JSX.Element => {
  const { text, level } = props
  switch (level) {
    case 1:
      const [firstWord, ...other] = text.split(' ')

      return (
        <h1 className={styles.heading}>
          <strong>{firstWord}</strong> {other.join(' ')}
        </h1>
      )

    default:
      const classNames = [styles.heading, styles[`heading__${level}`]]
      return <h3 className={classNames.join(' ')}>{text}</h3>
  }
}

export default Text
