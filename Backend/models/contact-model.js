const mongoose =require('mongoose');

const ContactSchema = new mongoose.Schema({
    
    FirstName: {
        type: String,
        required: true,
    },

    LastName: {
        type: String,
        required: true,
    },
    Email : {
type : String,
required : true
    },
    PhoneNumber : {
        type : String,
        required : true
    },
    Message : {
        type : String,
        required : true
    }
   

})

const Contact = mongoose.model('contact',ContactSchema)

module.exports = Contact