const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

Todo = model("account", AccountSchema);

module.exports = Todo;
