const Coment = require("../models/coment");

async function getComent(req,res){
    let comentId = req.params.comentId;
     const coment = await Comment.findById(coment);
     res.status(200).send(user)
}
async function getComents(req,res){
    const coments = await Coment.find();
    res.status(200).send({coments});
}
async function updateComent(req,res){
    const {content, userId} = req.body;
    const newComent = {content, userId};
    await Coments.findByIdAndUpdate(req.params.comentId,newComent);
    res.status(200).send({newComent});
}
async function saveComent(req,res){
    const {content, userId} = req.body;
    const coment = new Coment({content, userId});
    await coment.save();
    res.status(200).send({coment});
}
async function deleteComent(req,res){
    let comentId= req.params.comentId;
    await Coment.findByIdAndRemove(comentId);
    res.status(200).send({message: "eliminado"})
}
module.exports = {
    getComent,
    getComents,
    updateComent,
    saveComent,
    deleteComent
}