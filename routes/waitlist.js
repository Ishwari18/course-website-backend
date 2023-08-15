const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Waitlist = require("../models/Waitlist");

router.post("/", fetchuser, async (req, res) => {
  try {
    const { name, number } = req.body;

    // Create a new waitlist entry
    const newWaitlistEntry = new Waitlist({
      user: req.user.id,
      name: name,
      number: number,
    });

    // Save the waitlist entry to the database
    const savedWaitlistEntry = await newWaitlistEntry.save();

    res.json(savedWaitlistEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
