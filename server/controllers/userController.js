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

        const login_user_type = req.body.login_user_type;
        console.log("login_user_type : ", login_user_type);

        let user_type;

        if(login_user_type === 'admin') {
            user_type = "645e34807483b6558146f844";
        }else if(login_user_type === 'faculty') {
            user_type = "645e348b7483b6558146f845";
        }else {
            let response = error_function({
                statusCode : 400,
                message : "Not allowed",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        let new_user = await users.insertOne({
            first_name,
            last_name,
            phone,
            email,
            gender,
            role,
            user_type,
        });

        if(user) {
            
        }

    } catch (error) {
        
    }
}