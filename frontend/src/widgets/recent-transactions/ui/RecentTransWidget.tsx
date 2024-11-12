import { useEffect } from "react"
import { useRecentTransStore } from "entities/transactions/recent"
import money from "shared/assets/icons/resent-trans/money.svg"
import card from "shared/assets/icons/resent-trans/card.svg"
import paypal from "shared/assets/icons/resent-trans/paypal.svg"
import { numberWithCommas } from "shared/lib"
import { TransSkelton } from "./TransSkeleton"

interface Transaction {
  type: 'card' | 'paypal' | 'money'
  id: number
  value: number
  date: Date
  where: string
}

const data: Transaction[] = [
  {type: 'card', id: 1, value: -850, date: new Date('2021-01-28T03:43:35.026Z'), where: 'Deposit from my Card'},
  {type: 'paypal', id: 2, value: 2500, date: new Date('2021-01-25T03:43:35.026Z'), where: 'Deposit Paypal'},
  {type: 'money', id: 3, value: 5400, date: new Date('2021-01-21T03:43:35.026Z'), where: 'Jemi Wilson'}
]

export function RecentTransWidget () {
  const { getRecent } = useRecentTransStore()
  
  useEffect(() => {
    getRecent()
  }, [])

  return (
    <div className="w-full max-w-[350px]">
      <h4 className="title-sm mb-5">Recent Transaction</h4>
      <div className="flex flex-col gap-[10px] bg-white rounded-3xl p-6">
        {data.map(transaction => {
          const srcImg = transaction.type === 'card' ? card : transaction.type === 'paypal' ? paypal : money
          const color = transaction.type === 'card' ? '#FFBB38' : transaction.type === 'paypal' ? '#396AFF' : '#16DBCC'
          const date = transaction.date.toLocaleDateString('en-US', {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
          const isNegative = transaction.value <= 0
          const number = numberWithCommas(transaction.value)
          
          return (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex gap-4">
                <div 
                  style={{
                    backgroundColor: `${color}1a` //1a - 10% прозрачности
                  }}
                  className={`flex justify-center items-center w-[55px] h-[55px] rounded-full`}
                >
                  <img 
                    className="" 
                    src={srcImg} 
                    alt={transaction.type} 
                  />
                </div>
                <div>
                  <h4 className="block mb-[6px]">{ transaction.where }</h4>
                  <p className="text-[#718EBF] text-[15px]">{ date }</p>
                </div>
              </div>
              <div className={`font-medium ${isNegative ? 'text-[#FF4B4A]' : 'text-success'}`}>
                {isNegative ? `-$${numberWithCommas(Math.abs(transaction.value))}` : `+$${number}`}
              </div>
            </div>
          )
        })}
        {/* {[...Array(3)].map(() => <TransSkelton />)} */}
      </div>
    </div>
  )
}