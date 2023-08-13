const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://nani:nani@localhost:27017/mern-course-selling';

// Create a new MongoClient instance
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertData() {
  try {
    // Connect to the server
    await client.connect();

    // Specify the database and collection name
    const db = client.db('mern-course-selling');
    const collection = db.collection('courses'); // Replace 'courses' with your desired collection name

    // Check if the collection exists
    const collectionExists = await collection.exists();
    
    if (!collectionExists) {
      // Create the collection (optional)
      await db.createCollection('courses');
    }

    // Data to insert
    const data = { name: 'Sample Course', price: 100 };

    // Insert the data
    const result = await collection.insertOne(data);
    console.log('Data inserted:', result.insertedId);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

// Call the insertData function
insertData();
