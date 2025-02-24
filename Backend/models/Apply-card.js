const mongoose =require('mongoose');

const ApplyCardSchema =new mongoose.Schema({

    Username :{
        type: String,
        required :true
    },

    Email :{
        type: String,
        required :true
    },

    CompanyName :{
        type: String,
        required :false
    },

    Income :{
        type: Number,
        required :false
    },
    State :{
        type:String,
        required :true
    },
    CardName: {
        type: String,
        required: true,
    },
    BankName: {
        type: String,
        required: true,
    },

})

const ApplyCard = mongoose.model('Applycard',ApplyCardSchema);
module.exports = ApplyCard;