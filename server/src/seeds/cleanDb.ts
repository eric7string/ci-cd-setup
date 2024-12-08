import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    if (!models[modelName] || !db?.db) {
      throw new Error('Model or database connection is undefined');
    }

    let modelExists = await db.db.listCollections({
      name: collectionName,
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    console.error('Error cleaning database:', err);
    throw err;
  }
};
