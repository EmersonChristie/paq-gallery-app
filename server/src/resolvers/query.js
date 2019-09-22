/*
Remember the resolver function signature:
fieldName: (obj, args, context, info) => result;
*/
module.exports = {
  Query: {
    getArt: async (_, __, { dataSources }) => dataSources.Artwork.getArt(),
    getFavorites: async (_, __, { dataSources }) =>
      dataSources.Favorites.getFavorites()
    // getUserFavorites: async (_, __, { dataSources }) => dataSources.Users.getUserFavorites(),
  }
};
