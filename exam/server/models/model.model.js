const mongoose = require("mongoose");


const shelterSchema = new mongoose.Schema({
    
    petName: {
        type: String,
        required:[true, "You must enter in a Pet Name"],
        unique:true,
        minlength: [3, "Name has to be more than 2 characters"]
    },
    
    type: {
        type: String,
        required:[true, "You must enter the Type of animal"],
        minlength: [3, "No type of animal here will have less than 3 characters"]

    },
    description: {
        type:String,
        required:[true, "Tell us a little about the Pet"],
        minlength: [3, "description has to be more than 2 characters"]
    },
    skill1: {
        type:String,
        "default":""
    },
    skill2: {
        type:String,
        "default":""
    },
    skill3: {
        type:String,
        "default":""
    }

}, {timestamps:true})


 
const shelter = mongoose.model("shelter", shelterSchema);

module.exports = shelter