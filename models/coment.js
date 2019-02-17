const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentSchema = Schema({
    
    content: String,
    userId: String
});

module.exports = mongoose.model("coment", comentSchema);