import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent2 = ({ text }: Props) => {
  return <div className={styles.test}>Example Component222: {text}</div>
}
