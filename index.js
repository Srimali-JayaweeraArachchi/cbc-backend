import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

const mongoUrl = "mongodb+srv://admin:123@cluster0.8mywn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl,{});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connected Successfully");
})


app.use(bodyParser.json());
app.use("/api/students", studentRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

/*app.get("/",
    (req,res)=>{
        console.log(req.body);
        console.log("This is a get request");

        //process
        res.json(
            {
                message: "Hello from the backend"
            }
        );
    }
);

app.post("/",
    (req,res)=>{

        const newStudent = new Student(req.body);

        newStudent.save().then(
            () => {
            res.json({
                message: "Student added successfully"
            });
        });
  }
);*/

app.listen(5000, 
    () => {
    console.log("Server is running on port 5000");
});