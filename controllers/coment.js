const Coment = require("../models/coment");

function getComent(req,res){
    let comentId = req.params.comentId;

    Coment.findById(comentId, (err,coment)=>{
        if(err) return res.status(500).send({message: "Error al realizar la peticion"})
        if(!coment) return res.status(404).send({message: "El comentario solicitado no existe"})

        res.status(200).send({coment})
    });
}

function getComents(req,res){
    Coment.find({}, (err,coments) =>{
        if(err) res.status(500).send({message: "ha habido un problema al realizar la peticion"})
        if(!coments) res.status(404).send({message: "El comentario solicitado no existe"})

        res.status(300).send({ coments })
    });
}
function updateComent(req,res){
    let comentId = req.params.comentId;
    let update = req.body;
    Coment.findByIdAndUpdate(comentId, update,(err,comentUpdated)=>{
        if(err) res.status(500).send({message: "Error al actualizar el comentario"});
        res.status(200).send({ coment: comentUpdated});
    })
}
function saveComent(req,res){
    console.log("POST /api/coment");
    console.log(req.body);
    let coment = new Coment();
    coment.content = req.body.content;
    coment.userId = req.body.userId;
    coment.save((err,comentStored)=>{
        if(err) res.status(500).send({message: "Error al salvar en la base de datos"})
        res.status(200).send({coment: comentStored})
    })
}
function deleteComent(req,res){
    let comentId = req.params.comentId;
    Coment.findById(comentId, (err,coment) =>{
        if(err) res.status(500).send({message: "Error al borrar el comentario"});

        coment.remove(err =>{
            if(err) res.status(500).send({message: "Error al borrar el comentario"});

            res.status(200).send({ message: "El comentario ha sido eliminado"});
        });
    });
}
module.exports = {
    getComent,
    getComents,
    updateComent,
    saveComent,
    deleteComent
}