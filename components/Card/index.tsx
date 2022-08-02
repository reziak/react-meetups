import { ReactNode } from "react"

import styles from './styles.module.scss'

interface CardProps {
  children: ReactNode
}

export const Card = ({children}: CardProps) => {
  return <div className={styles.card}>{children}</div>
}