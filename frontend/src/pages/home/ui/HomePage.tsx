import { CardsWidget } from "widgets/my-cards"
import { RecentTransWidget } from "widgets/recent-transactions"

export function HomePage () {
  return (
    <div className="flex gap-[30px]">
      <CardsWidget />
      <RecentTransWidget />
    </div>
  )
}