const mongoose = require('mongoose');

const PersonalLoanSchema = new mongoose.Schema({

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
        type: Number,  // Fixed typo here
        required: true,
       
    },
    Email: {
        type: String,
        required: false,
    },
    State: {
        type: String,  // Fixed typo here
        required: true,
        default : true
    }

});

const PersonalLoan = mongoose.model('PersonalLoan', PersonalLoanSchema);

module.exports = PersonalLoan;
