// const express = require('express');
// const voucherrouter = express.Router();

// const VoucherController = require('../controller/Voucher-post-controller');
// const { createVoucher } = require('../controller/Voucher-post-controller');
// const upload = require('../middleware/cloud-img-middleware');

// const validateObjectId =require('../middleware/validate-id')

// // Vouchers routes
// voucherrouter.post('/', upload.single('image'), VoucherController.createVoucher);

// // Ensure this route is defined before the '/:id' route
// voucherrouter.get('/hot-promotions', VoucherController.getAllVouchers);

// // voucherrouter.get('/:id', VoucherController.getVoucherById);

// module.exports = voucherrouter;