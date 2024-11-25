const { Books } = require('./db_schema');

const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Book {
          title:String
          author:String
          genre:String
          publishedYear:Int
    }
    type Query {
          fetchAllBooks:[Book]
    }
  `);

const root = {
  fetchAllBooks: async () => {
    try {
      return await Books.find({});
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch books.');
    }
  },
};

module.exports = { root, schema };
