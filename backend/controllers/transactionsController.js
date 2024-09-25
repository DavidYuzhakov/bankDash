import RecentTransactions from "../model/RecentTransactions.js"

const getRecent = async (_, res) => {
  try {
    const transactions = await RecentTransactions.find({})
    res.status(200).json(transactions)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to get recent transactions'
    })
  }
} 

export default { getRecent }