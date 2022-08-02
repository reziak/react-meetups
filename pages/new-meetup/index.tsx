import Head from "next/head"
import { useRouter } from "next/router"
import { MeetupForm } from "../../components/MeetupForm"

export interface NewMeetupDataType {
  title: string
  image: string
  address: string
  description: string
}

const NewMeetup = () => {
  const router = useRouter()

  const addMeetupHandler = async (body: NewMeetupDataType) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)

    router.replace('/')
  }

  return (
    <>
      <Head>
        <title>New React Meetup</title>
        <meta 
          name="description" 
          content="Create a new meetup"
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetup