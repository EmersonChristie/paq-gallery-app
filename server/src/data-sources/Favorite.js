const { DataSource } = require("apollo-datasource");

const Favorite = require("../models/favorite");

// TODO: Initialize() method

class Favorites extends DataSource {
  constructor() {
    super();
  }

  getFavorites() {
    return Favorite.find()
      .then(favorites => {
        return favorites.map(fav => {
          return { ...fav._doc };
        });
      })
      .catch(err => {
        throw err;
      });
  }
  // TODO
  // removeUser(userId)
  // removes the User from the list of Users related to this favorite
  // and removes the Favorite Id in the list of favorites for current User

  createFavorite(args) {
    const favorite = new Favorite({
      artId: args.favoriteInput.artId,
      title: args.favoriteInput.title,
      img: args.favoriteInput.img,
      artist: args.favoriteInput.artist,
      dimensions: args.favoriteInput.dimensions,
      medium: args.favoriteInput.medium
    });
    return favorite
      .save()
      .then(result => {
        console.log(result);
        return { ...result._doc, _id: result._doc._id.toString() };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}

module.exports = Favorites;


