const express = require('express');
const app = express();

const { createHandler } = require('graphql-http/lib/use/express');
const { root, schema } = require('./models/graphql_schema');
const { connect } = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const { renderPlaygroundPage } = require('graphql-playground-html'); // Add this

connect();
require('dotenv').config();
app.use(morgan('dev'));
app.use(cors());
app.use(
  cors({
    origin: '*', // Change this to specific domains in production
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Manually handle preflight requests for Vercel
app.options('*', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*', // Change this for production
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });
  res.status(204).end();
});

// Serve GraphQL API
app.use(
  '/graphql',
  createHandler({
    schema,
    rootValue: root,
  })
);

// Serve GraphQL Playground UI at /graphiql
app.get('/graphiql', (req, res) => {
  res.send(
    renderPlaygroundPage({
      endpoint: '/graphql', // GraphQL API endpoint
    })
  );
});

// Handle favicon.ico requests gracefully
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to GraphQL');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server running at http://localhost:' + port + '/graphql');
  console.log(
    'GraphQL Playground available at http://localhost:' + port + '/graphiql'
  );
});
