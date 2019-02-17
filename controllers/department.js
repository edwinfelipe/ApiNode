const Department = require("../models/department");

function getDepartment(req,res){
    let departmentId = req.params.departmentId;

    Department.findById(departmentId, (err,department)=>{
        if(err) return res.status(500).send({message: "Error al realizar la peticion"})
        if(!department) return res.status(404).send({message: "El departamento solicitado no existe"})

        res.status(200).send({department})
    });
}

function getDepartments(req,res){
    Department.find({}, (err,departments) =>{
        if(err) res.status(500).send({message: "ha habido un problema al realizar la peticion"})
        if(!departments) res.status(404).send({message: "El departamento solicitado no existe"})

        res.status(300).send({ departments })
    });
}
function updateDepartment(req,res){
    let departmentId = req.params.departmentId;
    let update = req.body;
    Department.findByIdAndUpdate(departmentId, update,(err,departmentUpdated)=>{
        if(err) res.status(500).send({message: "Error al actualizar el departamento"});
        res.status(200).send({ department: departmentUpdated});
    })
}
function saveDepartment(req,res){
    console.log("POST /api/department");
    console.log(req.body);
    let department = new Department();
    department.name = req.body.name;
    department.ubication = req.body.ubication;
    department.save((err,departmentStored)=>{
        if(err) res.status(500).send({message: "Error al salvar en la base de datos"})
        res.status(200).send({department: departmentStored})
    })
}
function deleteDepartment(req,res){
    let departmentId = req.params.departmentId;
    Department.findById(departmentId, (err,department) =>{
        if(err) res.status(500).send({message: "Error al borrar el departamento"});

        department.remove(err =>{
            if(err) res.status(500).send({message: "Error al borrar el departamento"});

            res.status(200).send({ message: "El departamento ha sido eliminado"});
        });
    });
}
module.exports = {
    getDepartment,
    getDepartments,
    updateDepartment,
    saveDepartment,
    deleteDepartment
}