const ApplyCard = require('../models/Apply-card');

const PostCard = async (req, res) => {
  try {
    

    // Create a new instance of the Card model
    const newCard = new ApplyCard({
        Username: req.body.Username,
        Email: req.body.Email,
        CompanyName: req.body.CompanyName,
        Income: req.body.Income, 
        State: req.body.State,
        CardName: req.body.CardName,
        BankName: req.body.BankName, 

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

module.exports={PostCard}