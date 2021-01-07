const express = require("express");
const router = express.Router();
const { cheackAdmin, cheackMe } = require("../middleware/auth");
const { validCard, Card } = require("../models/cards");

// post new card for auth user
router.post("/new", cheackAdmin, async (req, res) => {
  let card = {
    name: req.body.name,
    color: req.body.color,
    size: req.body.size,
    description: req.body.description,
    status: 0,
    user_id: req.user.id,
  };
  const { error } = validCard(card);
  if (error) return res.status(400).send(error.details[0].message);
  let newcard = new Card(card);

  await newcard.save();
  res.status(200).send("Your Card is saved");
});

// update card
router.patch("/update", cheackAdmin, async (req, res) => {
  let card = {
    name: req.body.name,
    color: req.body.color,
    size: req.body.size,
    description: req.body.description,
    user_id: req.user.id,
    _id: req.body._id,
    status: req.body.status,
  };
  const { error } = validCard(card);
  if (error) return res.status(400).send(error.details[0].message);

  let updateCard = await Card.findOneAndUpdate({ _id: req.body._id }, card);

  if (!updateCard) return res.status(404).send("This Card is not defined");

  let newcard = await Card.findOne({
    _id: req.body._id,
  });

  res.send(newcard);
});

// delete card by id&userId
router.delete("/delete", cheackAdmin, async (req, res) => {
  const card = await Card.findOneAndRemove({
    _id: req.body._id,
  });

  if (!card) {
    return res.status(404).send("The card with the given ID was not found.");
  }

  res.status(200).send("your card is removed");
});

// get card by user id (for him self/admin only)

router.get("/my", cheackMe, async (req, res) => {
  const cards = await Card.find({ user_id: req.user.id });
  if (!cards) return res.status(404).send("We dont find your cards");
  res.status(200).send(cards);
});

// get all cards for admin
router.get("/", cheackAdmin, async (req, res) => {
  const cards = await Card.find();
  if (!cards) return res.status(404).send("We dont find your cards");

  if (!req.user.admin) {
    cards.map((card) => {
      return (card.user_id = "");
    });
  }
  res.status(200).send(cards);
});

// get 1 card
router.get("/:id", async (req, res) => {
  const card = await Card.findOne({
    _id: req.params.id,
  });
  if (!card)
    return res.status(404).send("The card with the given ID was not found.");
  res.send(card);
});

module.exports = router;
