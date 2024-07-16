const mongoose = require("mongoose");

const options = { discriminatorkey: "kind", collection: "items" };

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  options
);

const User = mongoose.model("User", userSchema);

const agent = new mongoose.Schema({
  agent: {
    type: String,
  },
});

const Agent = User.discriminator("Agent", agent);

module.exports = {
  User,
  Agent,
};
