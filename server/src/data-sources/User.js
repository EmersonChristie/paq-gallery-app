const { DataSource } = require("apollo-datasource");

const bcrypt = require("bcryptjs");

const User = require("../models/user");

class Users extends DataSource {
  constructor() {
    super();
  }

  createUser(args) {
    // hashes the user password
    // arg1: string to be hashed, arg2: salt specifying rounds to secure hash)
    return bcrypt
      .hash(args.userInput.password, 12)
      .then(hashedPwd => {
        const user = new User({
          email: args.userInput.email,
          password: hashedPwd,
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName
        });
        return user.save();
      })
      .then(result => {
        console.log(result);
        return { ...result._doc, password: null, _id: result.id };
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  // TODO:
  // addFavorite() -> adds a favorite to the users list of favorites
  //     if artId not in list of favorites create new favorite and append user

  // TODO:
  // getUserFavorites() -> get favorites of current user

  // TODO:
  // removeUserFavorite()
  // removes the User from the list of Users related to this favorite
  // and removes the Favorite Id in the list of favorites for current User
}

module.exports = Users;
