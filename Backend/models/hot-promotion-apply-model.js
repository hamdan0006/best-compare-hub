const mongoose =require('mongoose');

const ApplyVoucherSchema =new mongoose.Schema({

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
    VoucherName :{
        type:String,
        required :false
    }

})

const ApplyVoucher = mongoose.model('Applyvoucher',ApplyVoucherSchema);
module.exports = ApplyVoucher;