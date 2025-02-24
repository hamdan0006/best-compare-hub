const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({

    CardName: {
        type: String,
        required: false,
    },

    BankName: {
        type: String,
        required: false,
    },
    
    MinimumSalary: {
        type: Number,
        required: false,
    },
    SalaryTransfer: {
        type: Boolean,  // Fixed typo here
        required: false,
        default : false
    },
    image: {
        type: String,
        required: false,
    },
    IslamicFinance: {
        type: Boolean,  // Fixed typo here
        required: false,
        default : false


    },
    Cashback: {
        type: Boolean,  // Fixed typo here
        required: false,
        default : false


    },
    AnnualFee: {
        type: Number,
        required: false,
        
    },
    Rate: {
        type: Number,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    WelcomeOffer: {
        type: Boolean,
        required: false,
        default : false

    },
    BalanceTransfer: {
        type: Boolean,
        required: false,
        default : false

    },
    AirportService: {
        type: Boolean,
        required: false,
        default : false

    },
    FreeForLife: {
        type: Boolean,
        required: false,
        default : false

    },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
