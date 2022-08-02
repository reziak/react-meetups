import Image from "next/image"
import { MeetupType } from "../../pages"

import styles from './styles.module.scss'

interface MeetupDetailProps {
  data: MeetupType
}

export const MeetupDetail = ({ data }: MeetupDetailProps) => {
  return (
    <section className={styles.detail}>
      <Image
        src={data.image}
        alt={data.title}
        width={640}
        height={320}
      />
      <h1>{data.title}</h1>
      <address>{data.address}</address>
      <p>{data.description}</p>
    </section>
  )
}
