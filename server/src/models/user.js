const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
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
      favId: {
        type: Schema.Types.ObjectId,
        ref: "Favorite"
      },
      dateFavorited: {
        type: Date,
        required: false
      }
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
