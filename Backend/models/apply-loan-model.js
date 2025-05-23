const mongoose = require('mongoose');


const ApplyLoanSchema =new mongoose.Schema({
    FirstName :{
        type:String,
        required :true
    },
    LastName :{
        type:String,
        required :true
    },
    CompanyName :{
        type:String,
        required :false
    },
    PhoneNumber :{
        type:Number,
        required :true
    },
    Email :{
        type:String,
        required :true
    },
    State :{
        type:String,
        required :true
    },
    BankName:{
        type:String,
        required:false
    }
})

const ApplyLoan =mongoose.model('ApplyLoan',ApplyLoanSchema);
module.exports = ApplyLoan;