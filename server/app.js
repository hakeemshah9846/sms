require("dotenv").config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db/config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());

app.use(cors());

app.use('/uploads',express.static(__dirname + '/uploads'));

//MongoDB connection
db.connect();
//Invoking server port connection
app.listen(process.env.NODE_PORT, () => {
    console.log(`Listening on port ${process.env.NODE_PORT}`);
});

//authentication routes
app.use(authRoutes);

//user routes
app.use(userRoutes);

// Zoho call back route
app.get('/auth/zoho/callback/:organization_id', (req, res) => {
    console.log("Zoho callback called...");
    console.log("Code : ", req.query.code);
    console.log("organization_id : ", req.query.organization_id);
    // console.log("Request : ", req);

});