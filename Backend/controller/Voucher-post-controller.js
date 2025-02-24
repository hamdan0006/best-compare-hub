const Voucher = require('../models/Vouchers-model');

const createVoucher = async (req, res) => {
  try {
    // Get image URL from the uploaded file (if exists)
    // const imageUrl = req.file ? req.file.path : null; 

    // Create a new instance of the Card model
    const newCard = new Voucher({
        VoucherName: req.body.VoucherName,
        BankName: req.body.BankName,
        Description: req.body.Description,
        voucherPrice: req.body.voucherPrice,

      image: req.file.path,  
     




    });

    // Save the new card to the database
    const savedCard = await newCard.save();  // Save the instance to the DB
    res.status(201).json(savedCard);
     // Log the file information for debugging purposes
  } catch (error) {
    console.error('Error creating Card post:', error);
    res.status(500).json({ message: 'Failed to create Card post', error: error.message });
  }
};

// Handler to get all Card posts
const getAllVouchers = async (req, res) => {
    try {
      console.log('Fetching all vouchers...'); // Debugging log
      const { VoucherName, page = 1, limit = 25 } = req.query;
  
      const filters = {};
      if (VoucherName) {
        filters.VoucherName = VoucherName;
      }
  
      const totalVoucher = await Voucher.countDocuments(filters);
      const totalPages = Math.ceil(totalVoucher / limit);
      const cards = await Voucher.find(filters)
        .limit(limit * 1)
        .skip((page - 1) * limit);
  
      res.status(200).json({ cards, totalPages });
    } catch (error) {
      console.error('Error fetching cards:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };



// Handler to get a Card by ID
const getVoucherById = async (req, res) => {
  try {
    const voucherId = req.params.id;  
    const voucher = await Voucher.findById(voucherId);  // Find the card by ID
    if (!voucher) {
      return res.status(404).json({ error: 'Card not found' });  // Return 404 if card is not found
    }
    res.status(200).json(voucher);  // Return the found card
  } catch (error) {
    console.error('Error fetching Card:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createVoucher, getAllVouchers,getVoucherById};
