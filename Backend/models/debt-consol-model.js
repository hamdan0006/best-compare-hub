const mongoose = require('mongoose');

const DebtConsoleSchema = new mongoose.Schema({

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
  

});

const debtConsole = mongoose.model('debtconsoling', DebtConsoleSchema);

module.exports = debtConsole;
