const ApplyVoucher = require('../models/hot-promotion-apply-model');

const PostVoucher  = async (req, res) => {
  try {
    

    // Create a new instance of the Card model
    const newCard = new ApplyVoucher({
        Username: req.body.Username,
        Email: req.body.Email,
        CompanyName: req.body.CompanyName,
        Income: req.body.Income, 
        State: req.body.State,
        VoucherName: req.body.VoucherName,
         

    });

    
    const savedCard = await newCard.save();  // Save the instance to the DB
    res.status(201).json(savedCard);
    console.log(savedCard)
     // Log the file information for debugging purposes
  } catch (error) {
    console.error('Error creating Card post:', error);
    res.status(500).json({ message: 'Failed to create Card post', error: error.message });
  }
};

module.exports={PostVoucher }