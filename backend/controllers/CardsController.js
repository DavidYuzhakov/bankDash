import CardModel from "../model/Card.js";

const getAllCards = async (_, res) => {
  try {
    const cards = await CardModel.find()
    res.status(200).json(cards)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get all list of cards'
    })
  }
}

export default { getAllCards }