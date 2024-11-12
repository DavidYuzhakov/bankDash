import { ExpenseChart } from "./ExpenseChart";

export function ExpenseWidget () {
  return (
    <div>
      <h4 className="title-sm mb-5">Expense Statistics</h4>
      <ExpenseChart />
    </div>
  )
}