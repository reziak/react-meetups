import { ObjectId } from "mongodb"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { MeetupType } from "../.."
import { MeetupDetail } from "../../../components/MeetupDetail"
import { mongoClient } from "../../../database/mongodb"

interface MeetupDetailsProps {
  meetup: MeetupType
}

const MeetupDetails = ({ meetup }: MeetupDetailsProps) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta 
          name="description" 
          content={meetup.description}
        />
      </Head>
      <MeetupDetail data={meetup} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await mongoClient.connect()
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const result = await meetupsCollection.find({}, {
    projection: {
      _id: 1
    }
  }).toArray()

  client.close()

  const meetupsIDs = result.map(meetup => ({ params: { id: meetup._id.toString() } }))

  return {
    paths: meetupsIDs,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const meetupID = params?.id

  const client = await mongoClient.connect()
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const result = await meetupsCollection.findOne({ _id: new ObjectId(meetupID as string) })

  if (!result) return { notFound: true }

  client.close()

  return {
    props: {
      meetup: {
        id: result._id.toString(),
        title: result.title,
        image: result.image,
        address: result.address,
        description: result.description,
      },
    },
  }
}

export default MeetupDetails