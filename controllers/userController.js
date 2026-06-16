const User =  require("../models/userModel");


exports.index =(req,resp)=>{

    const users = User.getAll();

    resp.json(users);
}
