const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const users = require('../db/models/users');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.addUser = async function(req, res) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader ? authHeader.split(' ')[1] : null;
        console.log("token : ", token);

        const first_name = req.body.first_name;
        console.log("first_name : ", first_name);

        const last_name = req.body.last_name;
        console.log("last_name : ", last_name);

        const phone = req.body.phone;
        console.log("phone : ", phone);

        const email = req.body.email;
        console.log("email : ", email);

        const gender = req.body.gender;
        console.log("gender : ", gender);

        const role = req.body.role;
        console.log("role : ", role);

        jwt.verify(token, process.env.PRIVATE_KEY, async function(err, decoded) {
            if(err) {
                let response = error_function({
                    statusCode : 400,
                    message : err.message,
                });

                return res.status(response.statusCode).send(response);
            }else {
                let user = await users.findOne({_id : decoded.user_id}).populate("user_type");
                if(user.user_type.user_type === 'admin') {
                    console.log("User is admin...");
                }
                console.log("user : ", user);
            }
        })


    } catch (error) {
        
    }
}