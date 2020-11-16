const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

global.__basedir = __dirname;

// View Engine Setup 
app.set("views",path.join(__dirname,"views")) 
app.set("view engine","ejs")

app.get("/",function(req,res){ 
	res.render("index");
})

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));

const initRoutes = require("/Users/near/Documents/Files/GRV/Web_Node/express-file-upload-master/src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8081;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});