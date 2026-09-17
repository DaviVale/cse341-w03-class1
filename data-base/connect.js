require('dotenv').config();

const { MongoClient } = require('mongodb');

let database;

const initDb = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);

    await client.connect();

    database = client.db('cse341_lesson5');

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

const getDb = () => {
  if (!database) {
    throw new Error('Database not initialized');
  }

  return database;
};

module.exports = {
  initDb,
  getDb
};