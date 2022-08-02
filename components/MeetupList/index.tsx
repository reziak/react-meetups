import { MeetupType } from '../../pages'
import { MeetupItem } from '../MeetupItem'
import styles from './styles.module.scss'

interface MeetupListProps {
  meetups: MeetupType[]
}

export const MeetupList = ({ meetups }: MeetupListProps) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem 
          key={meetup.id}
          meetup={meetup}
        />
      ))}
    </ul>
  )
}