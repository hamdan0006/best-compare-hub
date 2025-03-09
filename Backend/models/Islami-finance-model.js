const mongoose = require('mongoose');

const IslamicFinanceSchema = new mongoose.Schema({

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
    IslamicFinance: {
        type: String,  
        required: false,
        
    },
  

});

const IslamicFinance = mongoose.model('IslamicFinance', IslamicFinanceSchema);

module.exports = IslamicFinance;
