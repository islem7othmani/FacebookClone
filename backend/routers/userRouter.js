const { getUser } = require("../controllers/User")


const route = require ("express").Router();

route.get("/getuser/:email",getUser)



module.exports = route;