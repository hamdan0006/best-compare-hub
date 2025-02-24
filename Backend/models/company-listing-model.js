const mongoose = require('mongoose');

const ConpanyListingSchema = new mongoose.Schema({

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
        required: true,
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

const companylisting = mongoose.model('companylisting', ConpanyListingSchema);

module.exports = companylisting;
