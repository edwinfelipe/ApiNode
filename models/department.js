const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const departmentSchema = Schema({
    
    name: String,
    ubication: String
});

module.exports = mongoose.model("department", departmentSchema);