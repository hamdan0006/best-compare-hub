const mongoose = require('mongoose');

const AutoLoanSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true,
    },

    LastName: {
        type: String,
        required: true,
    },
    
    CompanyName: {
        type: String,
        required: false,
    },
    PhoneNumber: {
        type: Number,  
        required: true,
       
    },
    Email: {
        type: String,
        required: false,
    },
    State: {
        type: String,  
        required: true,
        default : true
    },
    BankName:{
        type:String,
        required:false
    }

});

const AutoLoan = mongoose.model('AutoLoan', AutoLoanSchema);

module.exports = AutoLoan;
