const Subscribe = require("../model/subscribeModel");

exports.addSubscribeEmail = async (req, res) => {
    try {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({ message: 'Email address is required' });
      }
      const existingEmail = await Subscribe.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ message: 'This email is already subscribed' });
      }
  
      const newEmail = new Subscribe({ email });
      await newEmail.save();
  
      res.status(201).json({
        message: 'Email subscribed successfully',
        email: newEmail,
      });
    } catch (error) {
      console.error('Error subscribing email:', error);
      res.status(500).json({
        message: 'Error subscribing email',
        error: error.message,
      });
    }
  };
  
  exports.getSubscribedEmails = async (req, res) => {
    try {
      const emails = await Subscribe.find();
      res.status(200).json({
        message: 'Subscribed emails retrieved successfully',
        emails,
      });
    } catch (error) {
      console.error('Error fetching subscribed emails:', error);
      res.status(500).json({
        message: 'Error fetching subscribed emails',
        error: error.message,
      });
    }
  };