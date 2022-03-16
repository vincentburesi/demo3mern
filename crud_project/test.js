import chai from 'chai'
import db from './db.js'
import app from './app.js'
import testArticle from './test/article.js'

const assert = chai.assert

describe('All tests', function() {

  // Clean DB before each test
  beforeEach(async () => {
    console.log("Cleaning DB before test...")

    // Get all collections
    const collections = await db.listCollections().toArray();

    // Create an array of collection names and drop each collection
    collections
      .map((collection) => collection.name)
      .forEach(async (collectionName) => {
        db.dropCollection(collectionName);
      });

    console.log("Dropped")
  })

  testArticle()
})
