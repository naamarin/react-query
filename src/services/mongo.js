"use server";

const { MongoClient, ObjectId } = require("mongodb");

let client;
let clientPromise;

export async function connectDatabase() {
  if (!client) {
    const dbConnectionString = process.env.PUBLIC_DB_CONNECTION;
    if (!dbConnectionString) {
      throw new Error("Database connection string is not defined");
    }
    client = new MongoClient(dbConnectionString);
    clientPromise = client.connect();
  }
  return clientPromise;
}

// async function connectDatabase() {
//   const dbConnection = process.env.PUBLIC_DB_CONNECTION;
//   return await MongoClient.connect(dbConnection);
// }

export async function insertDocument(client, collection, document) {
  const db = client.db("db01");
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection) {
  const db = client.db("db01");
  const documents = await db.collection(collection).find().toArray();
  return documents;
}

export async function updateDocument(client, collection, id, document) {
  const db = client.db("db01");
  const result = await db.collection(collection).updateOne(
    { _id: new ObjectId(id) },
    { $set: document }
  );
  return result;
}

export async function deleteDocument(client, collection, id) {
  const db = client.db("db01");
  const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
  return result;
}
