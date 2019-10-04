const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  // IDs of Art Favorites created by user
  userFavs: [
    {
      artId: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
      },
      dateFavorited: {
        type: Date,
        required: false
      }
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
