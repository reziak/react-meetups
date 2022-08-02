import Link from 'next/link'
import styles from './styles.module.scss'

export const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>All Meetups</a>
            </Link>
          </li>
          <li>
            <Link href="/new-meetup">
              <a>Add new meetup</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}