module.exports = {
  Mutation: {
    createFavorite: async (_, args, { dataSources }) =>
      await dataSources.Favorites.createFavorite(args),
    createUser: async (_, args, { dataSources }) =>
      await dataSources.Users.createUser(args),
    addUserFav: async (_, args, { dataSources }) =>
      await dataSources.Users.addUserFav(args)
  }
};
