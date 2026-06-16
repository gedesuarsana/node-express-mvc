const express = require("express");

const app = express();

const userRoutes =  require("./routers/userRoutes");

app.use(express.json());

app.use("/users",userRoutes);

app.listen(5000,()=>{
    console.log("server start at port 5000");
});
