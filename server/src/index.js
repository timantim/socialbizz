import 'dotenv/config';
import cors from 'cors';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import express from 'express';
import {
  ApolloServer,
  AuthenticationError,
} from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';

const app = express();

app.use(cors());

const getMe = async req => {
  const token = req.headers['x-token'];

  if (token) {

    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new AuthenticationError(
        'Your session expired. Sign in again.',
      );
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
  context: async ({ req }) => {
    const me = await getMe(req);

    return {
      models,
      me,
      secret: process.env.SECRET,
    };
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    await createUsersWithAccounts();
  }

  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});

const createUsersWithAccounts = async () => {
  await models.User.create(
    {
      username: 'test_admin',
      email: 'test_admin@example.com',
      password: 'example',
      role: 'ADMIN',
      accounts: [
        {
          username: 'test_admin',
        },
      ],
    },
    {
      include: [models.Account],
    },
  );

  await models.User.create(
    {
      username: 'test_user',
      email: 'test@example.com',
      password: 'example',
      accounts: [
        {
          username: 'test_user',
        }
      ],
    },
    {
      include: [models.Account],
    },
  );
};
