import Image from 'next/image'
import Link from 'next/link'
import { MeetupType } from '../../pages'

import { Card } from "../Card"

import styles from './styles.module.scss'

interface MeetupItemProps {
  meetup: MeetupType
}

export const MeetupItem = ({ meetup }: MeetupItemProps) => {
  return (
    <li id={meetup.id} className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image 
            src={meetup.image}
            alt={meetup.title}
            width={640}
            height={320}
          />
        </div>
        <div className={styles.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={styles.actions}>
          <Link href={`/meetups/${meetup.id}`}>
            <a>Show details</a>
          </Link>
        </div>
      </Card>
    </li>
  )
}