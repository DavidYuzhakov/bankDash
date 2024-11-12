import { WeeklyChart } from "./WeeklyChart";

export function WeeklyWidget () {
  
  return (
    <div className="max-w-[730px] w-full h-[350px]">
      <h4 className="title-sm mb-5">Weekly Activity</h4>
      <WeeklyChart />
    </div>
  )
}