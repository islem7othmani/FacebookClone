const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose')



const app = express();
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./routers/authrouter');
const postRoutes = require('./routers/postrouter');

app.use('/auth', userRoutes);
app.use('/post', postRoutes);
//app.use('/messages', chatRoutes);

//connect to db
mongoose.connect(
	"***"
);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("DB failed with err - ", err);
});

//create server 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});