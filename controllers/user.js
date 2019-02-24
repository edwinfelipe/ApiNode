const User = require("../models/user");

async function getUser(req,res){
     let userId = req.params.userId;
     const user = await User.findById(userId);
     res.status(200).send(user)
}
async function getUsers (req,res){
    const users = await User.find();
    res.status(200).send({users});
}
 async function updateUser(req,res){
    const {name, lastName, phone, email,sex,department} = req.body;
    const newUser = {name, lastName, phone, email,sex,department};
    await User.findByIdAndUpdate(req.params.userId,newUser);
    res.status(200).send({newUser});
}
async function saveUser(req,res){
    const {name, lastName, phone, email,sex,department} = req.body;
    const user = new User({name, lastName, phone, email,sex,department});
    await user.save();
    res.status(200).send({user});
}
async function deleteUser(req,res){
    let userId= req.params.userId;
    await User.findByIdAndRemove(userId);
    res.status(200).send({message: "eliminado"})
}
module.exports = {
    getUser,
    getUsers,
    updateUser,
    saveUser,
    deleteUser
}