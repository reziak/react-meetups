import { FormEvent, useRef } from 'react'
import { NewMeetupDataType } from '../../pages/new-meetup'
import { Card } from '../Card'

import styles from './styles.module.scss'

interface MeetupFormProps {
  onAddMeetup: (body: NewMeetupDataType) => void
}

export const MeetupForm = ({ onAddMeetup }: MeetupFormProps) => {
  const titleRef = useRef<HTMLInputElement | null>(null)
  const imageRef = useRef<HTMLInputElement | null>(null)
  const addressRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const title = titleRef.current?.value
    const image = imageRef.current?.value
    const address = addressRef.current?.value
    const description = descriptionRef.current?.value

    const meetupData = {
      title,
      image,
      address,
      description,
    } as NewMeetupDataType

    onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="image" ref={addressRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup address</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  )
}