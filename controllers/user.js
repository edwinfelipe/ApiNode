const User = require("../models/user");
function getUser(req,res){
    let userId = req.params.userId;

    User.findById(userId, (err,user) =>{
        if(err) return res.status(500).send({message:"error al realizar la peticion"});

        if(!user) return res.status(404).send({message: "el usero no existe"});

        res.status(200).send({user});
    });
}

function getUsers(req,res){
    User.find({},(err,users)=>{
        if(err) res.status(500).send({message: "ha habido un problema al realizar la peticion"})
        if(!users) res.status(404).send({message: "No existen usuarios"})

        res.status(300).send({ users })
    });
}
function updateUser(req,res){
    let userId = req.params.userId;
    let update = req.body;
    User.findByIdAndUpdate(userId, update,(err,userUpdated)=>{
        if(err) res.status(500).send({message: "Error al actualizar el usuario"});
        res.status(200).send({ user: userUpdated});
    });
}
function saveUser(req,res){
    console.log("POST /api/user");
    console.log(req.body);
    let user = new User();
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.sex = req.body.sex;
    user.department = req.body.department;
    
    user.save((err,userStored)=>{
        if(err) res.status(500).send({message: "Error al salvar en la base de datos"})
        res.status(200).send({user: userStored})
    })
}

function deleteUser(req,res){
    let userId = req.params.userId;
    User.findById(userId, (err,user) =>{
        if(err) res.status(500).send({message: "Error al borrar el usuario"});

        user.remove(err =>{
            if(err) res.status(500).send({message: "Error al borrar el usuario"});

            res.status(200).send({ message: "El usuario ha sido eliminado"});
        });
    });
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    saveUser,
    deleteUser
}