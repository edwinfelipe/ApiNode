const Department = require("../models/department");

async function getDepartment(req,res){
    let departmentId = req.params.departmentId;
    const department = await Department.findById(departmentId);
    res.status(200).send(department)
}

async function getDepartments(req,res){
    const departments = await Department.find();
    res.status(200).send({departments})
}
async function updateDepartment(req,res){
    const {name, ubication}= req.body;
    const newDepartment = {name, ubication};
    await Department.findByIdAndUpdate(req.params.departmentId, newDepartment);
    res.status(200).send({newDepartment});
}
async function saveDepartment(req,res){
    const {name, ubication} = req.body;
    const department = new Department({name, ubication});
    await department.save();
    res.status(200).send({department})
}
async function deleteDepartment(req,res){
    let departmentId = req.params.departmentId;
    await Department.findByIdAndRemove(departmentId);
    res.status(200).send({message: "eliminado"});

}
module.exports = {
    getDepartment,
    getDepartments,
    updateDepartment,
    saveDepartment,
    deleteDepartment
}