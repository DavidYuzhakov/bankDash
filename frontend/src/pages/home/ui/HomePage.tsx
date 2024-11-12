import { ExpenseWidget } from "widgets/expense-stat"
import { CardsWidget } from "widgets/my-cards"
import { RecentTransWidget } from "widgets/recent-transactions"
import { TransferWidget } from "widgets/transfer/ui/TranferWidget"
import { WeeklyWidget } from "widgets/weekly-activity"

export function HomePage () {
  return (
    <>
      <div className="flex gap-[30px]">
        <CardsWidget />
        <RecentTransWidget />
      </div>
      <div className="flex gap-[30px] h-full">
        <WeeklyWidget />
        <ExpenseWidget />
      </div>  
      <div className="flex gap-[30px]">
        <TransferWidget />
        <div className="w-[635px] h-[323px] bg-white"></div>
      </div>
    </>
  )
}