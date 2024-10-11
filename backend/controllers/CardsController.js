import CardModel from "../model/Card.js";

const getAllCards = async (req, res) => {
  try {
    const userId = req.userId
    const cards = await CardModel.find({ user: userId })
    res.status(200).json(cards)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get all list of cards'
    })
  }
}

const addCard = async (req, res) => {
  const { type, name, number, expiration } = req.body
  const doc = new CardModel({
    type,
    number,
    holder: name,
    user: req.userId,
    validThru: expiration
  })

  const card = await doc.save()
  res.status(201).json(card)
}

export default { getAllCards, addCard }