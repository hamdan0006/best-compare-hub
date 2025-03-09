const IslamicFinanceSchema = require('../models/Islami-finance-model');


const PostISlFinanceListing = async (req, res) => {
    try {
        const IslamicFin = new IslamicFinanceSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CompanyName: req.body.CompanyName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            State: req.body.State,

        });

        const SaveLoan = await IslamicFin.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostISlFinanceListing };
