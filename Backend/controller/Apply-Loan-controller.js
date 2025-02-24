const ApplyLoanSchema = require('../models/apply-loan-model');


const PostApplyLoan = async (req, res) => {
    try {
        const ApplyLoan = new ApplyLoanSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CompanytName: req.body.CompanytName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            State: req.body.State,
            BankName: req.body.BankName,
        });

        const SaveLoan = await ApplyLoan.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostApplyLoan };
