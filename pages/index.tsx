import Head from "next/head"
import { MeetupList } from "../components/MeetupList"
import { mongoClient } from "../database/mongodb"

export interface MeetupType {
  id: string
  title: string
  image: string
  address: string
  description: string
}

interface HomeProps {
  meetups: MeetupType[]
}

const Home = ({ meetups }: HomeProps) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description" 
          content="List of react meetups around the world"
        />
      </Head>
      <MeetupList meetups={meetups}/>
    </>
  )
}

export const getStaticProps = async () => {
  const client = await mongoClient.connect()
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const results = await meetupsCollection.find().toArray()
  client.close()

  const meetups = results.map(meetup => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  }))


  return {
    props: {
      meetups,
    },
    revalidate: 10, // sets a time for which the server revalidate dynamic data
  }
}

export default Home
