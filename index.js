import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import productRouter from './routes/productRouter.js';
import orderRouter from './routes/orderRouter.js';
import cors from "cors";

dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_DB_URI;

app.use(cors())

mongoose.connect(mongoUrl,{});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connected Successfully");
})


app.use(bodyParser.json())

app.use(

  (req,res,next)=>{



    const token = req.header("Authorization")?.replace("Bearer ","")
    console.log(token)

    if(token != null){
      jwt.verify(token,process.env.JWT_SECRET , (error,decoded)=>{

        if(!error){
          req.user = decoded   
          console.log(decoded)     
        }

      })
    }

    next()

  }

)
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/orders",orderRouter)


app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
