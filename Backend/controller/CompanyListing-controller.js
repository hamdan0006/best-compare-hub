const CompanyListingSchema = require('../models/company-listing-model');


const PostCompanyListing = async (req, res) => {
    try {
        const AutoLoan = new CompanyListingSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            CompanyName: req.body.CompanyName,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
            State: req.body.State,

        });

        const SaveLoan = await AutoLoan.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostCompanyListing };
