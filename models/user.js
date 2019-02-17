const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: String,
    lastName: String,
    phone: String,
    email: String,
    sex: { type: String, enum:["F", "M"]},
    department: String
});

module.exports = mongoose.model("user", userSchema);