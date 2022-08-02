import { NextApiRequest, NextApiResponse } from "next"
import { mongoClient } from "../../database/mongodb"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body

    const client = await mongoClient.connect()
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meetup inserted' })
  }
}

export default handler