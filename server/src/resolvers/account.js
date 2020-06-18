import { combineResolvers } from 'graphql-resolvers';

import { isAuthenticated, isAccountOwner } from './authorization';

export default {
  Query: {
    accounts: async (parent, args, { models }) => {
      return await models.Account.findAll();
    },
    account: async (parent, { id }, { models }) => {
      return await models.Account.findById(id);
    },
  },

  Mutation: {
    createAccount: combineResolvers(
      isAuthenticated,
      async (parent, { text }, { models, me }) => {
        return await models.Account.create({
          text,
          userId: me.id,
        });
      },
    ),

    deleteAccount: combineResolvers(
      isAuthenticated,
      isAccountOwner,
      async (parent, { id }, { models }) => {
        return await models.Account.destroy({ where: { id } });
      },
    ),
  },

  Account: {
    user: async (account, args, { models }) => {
      return await models.User.findById(account.userId);
    },
  },
};
