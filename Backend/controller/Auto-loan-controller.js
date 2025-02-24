const ApplyLoanSchema = require('../models/Auto-loan-model');


const PostAutoLoan = async (req, res) => {
    try {
        const AutoLoan = new ApplyLoanSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CompanyName: req.body.CompanytName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            State: req.body.State,
            BankName: req.body.BankName,

        });

        const SaveLoan = await AutoLoan.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostAutoLoan };
