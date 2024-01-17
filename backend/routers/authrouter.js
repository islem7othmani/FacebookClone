const { register,login } = require("../controllers/auth")
//const {getUserByEmail} = require('../controllers/usercontrollers')

const route = require ("express").Router();

route.post("/register",register)
route.post("/login",login)
//route.get("/getuser/:email",getUserByEmail)


module.exports = route;