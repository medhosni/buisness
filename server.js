
import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from 'cors';
import { connect } from "mongoose";

import usersRouter from "./Routes/user.route.js";
import brandRouter from "./Routes/Brand.routs.js"
import productsRouter from "./Routes/Products.route.js"
import ordersRouter from "./Routes/Order.routs.js"



const app = express();
const PORT = process.env.portServer || 3000;

var mongoDB = process.env.dburl;

app.use(morgan('dev'))
app.use(cors())
app.use(json())
app.use(urlencoded({extended : true}))


app.use('/img', express.static('public/images'));


connect(mongoDB)
    .then(function () { console.log("database connected") })
    .catch((function (error) { console.log(error); }));




app.use("/users", usersRouter)
app.use("/brand", brandRouter)
app.use("/product", productsRouter)
app.use("/orders", ordersRouter)
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
})
















