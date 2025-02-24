const Card = require('../models/Credit-card');

const createCard = async (req, res) => {
  try {
    // Get image URL from the uploaded file (if exists)
    // const imageUrl = req.file ? req.file.path : null; 

    // Create a new instance of the Card model
    const newCard = new Card({
        CardName: req.body.CardName,
        BankName: req.body.BankName,
      MinimumSalary: req.body.MinimumSalary,
      SalaryTransfer: req.body.SalaryTransfer,
      image: req.file.path,  // Assuming the 'image' field is being uploaded with multer
      IslamicFinance: req.body.IslamicFinance,
      Cashback: req.body.Cashback,
      AnnualFee: req.body.AnnualFee,
      Rate: req.body.Rate,
      description: req.body.description,
      WelcomeOffer: req.body.WelcomeOffer,
      BalanceTransfer: req.body.BalanceTransfer,
      AirportService: req.body.AirportService,
      FreeForLife: req.body.FreeForLife,




    });

    // Save the new card to the database
    const savedCard = await newCard.save();  // Save the instance to the DB
    res.status(201).json(savedCard);
    console.log(req.file);
    console.log(savedCard)
     // Log the file information for debugging purposes
  } catch (error) {
    console.error('Error creating Card post:', error);
    res.status(500).json({ message: 'Failed to create Card post', error: error.message });
  }
};

// Handler to get all Card posts
const getAllCard = async (req, res) => {
  try {
    const { salaryRange, BankName, page = 1, limit = 50 } = req.query;

    const filters = {};
    if (salaryRange) {
      const ranges = {
        "5000-10000": { $gte: 5000, $lte: 10000 },
        "10000-15000": { $gte: 10000, $lte: 15000 },
        "15000-20000": { $gte: 15000, $lte: 20000 },
        "20000-30000": { $gte: 20000, $lte: 30000 },
        "30000-40000": { $gte: 30000, $lte: 40000 },
        "40000-50000": { $gte: 40000, $lte: 50000 },
        "50000-100000": { $gte: 50000, $lte: 100000 },
        "100000": { $gte: 100000 },
      };
      filters.MinimumSalary = ranges[salaryRange];
    }

    if (BankName) {
      filters.BankName = BankName;
    }

    const totalCards = await Card.countDocuments(filters);
    const totalPages = Math.ceil(totalCards / limit);
    const cards = await Card.find(filters)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.status(200).json({ cards, totalPages });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



// Handler to get a Card by ID
const getCardById = async (req, res) => {
  try {
    const cardId = req.params.id;  // Get the card ID from URL params
    const card = await Card.findById(cardId);  // Find the card by ID
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });  // Return 404 if card is not found
    }
    res.status(200).json(card);  // Return the found card
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createCard, getAllCard, getCardById };
