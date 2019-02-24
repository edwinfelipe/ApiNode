const express = require("express");
const api = express.Router();
const userCtrl = require("../controllers/user");
const departmentCtrl = require("../controllers/department");
const comentCtrl = require("../controllers/coment");
api.get("/user",  userCtrl.getUsers);
api.get("/department",departmentCtrl.getDepartments);
api.get("/coment",comentCtrl.getComents);

api.get("/user/:userId",userCtrl.getUser);
api.get("/department/:departmentId",departmentCtrl.getDepartment);
api.get("/coment/:comentId",comentCtrl.getComent);

api.post("/user",userCtrl.saveUser);
api.post("/coment",comentCtrl.saveComent);
api.post("/department",departmentCtrl.saveDepartment);

api.put("/user/:userId",userCtrl.updateUser);
api.put("/coment/:comentId",comentCtrl.updateComent);
api.put("/department/:departmentId",departmentCtrl.updateDepartment);

api.delete("/user/:userId",userCtrl.deleteUser);
api.delete("/coment/:comentId",comentCtrl.deleteComent);
api.delete("/department/:departmentId",departmentCtrl.deleteDepartment);

module.exports = api;