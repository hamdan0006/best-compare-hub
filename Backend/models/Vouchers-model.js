const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema({

    VoucherName: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: false,
    },
    Description: {
        type: String,
        required: false
    },
    voucherPrice: {
        type: Number,
        required: false
    },


})

const Voucher = mongoose.model('Voucher', VoucherSchema)

module.exports = Voucher