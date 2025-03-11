const DebtConsolSchema = require('../models/debt-consol-model');


const PostDebtConsole = async (req, res) => {
    try {
        const Debtconsol = new DebtConsolSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CompanyName: req.body.CompanyName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            State: req.body.State,

        });

        const SaveLoan = await Debtconsol.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostDebtConsole };
