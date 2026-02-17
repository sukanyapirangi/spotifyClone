const userModel = require("../models/user.model")

async function registerUser(req,res){
    const {username, email, password, role = "user" } = req.body;

    const isuserexits = await userModel.findOne({
        username:username,
        email:email
    })

}