import mongoose from "mongoose";
        
        
const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    isBlocked : {
        type : Boolean,
        default : false
    },
    type : {
        type : String,
        default : "customer"
    },
    profilePicture : {
        type : String,
        default : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1738642035~exp=1738645635~hmac=28c45e21df53c2bdbc70e54b851079d12e09eadd4cac6f1a5039c3804af6354e&w=740"
    }

});

const User = mongoose.model("users", userSchema);

export default User