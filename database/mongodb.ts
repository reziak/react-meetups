import { MongoClient } from 'mongodb'

export const mongoClient = new MongoClient(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.bnl4t.mongodb.net/react_meetups?retryWrites=true&w=majority`)