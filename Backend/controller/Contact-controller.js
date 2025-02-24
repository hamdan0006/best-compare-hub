const ContactSchema = require('../models/contact-model');


const PostContact = async (req, res) => {
    try {
        const ApplyContact = new ContactSchema({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Message: req.body.Message,
            PhoneNumber: req.body.PhoneNumber,
            Email: req.body.Email,
        });

        const SaveLoan = await ApplyContact.save(); // Call .save() on the created instance
        res.status(201).json(SaveLoan);

        console.log(SaveLoan);
    } catch (error) {
        console.error('Error creating Card post:', error);
        res.status(500).json({ message: 'Failed to create Card post', error: error.message });
    }
};

module.exports = { PostContact };
