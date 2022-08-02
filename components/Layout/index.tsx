import { ReactNode } from "react"
import { Navigation } from "../Navigation"

import styles from './styles.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </>
  )
}