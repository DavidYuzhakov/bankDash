import { useRecentTransStore } from "entities/transactions/recent"
import { useEffect } from "react"

export function RecentTransWidget () {
  const { getRecent } = useRecentTransStore()
  
  useEffect(() => {
    getRecent()
  }, [])

  return (
    <div>
      <h4 className="title-sm">Recent Transaction</h4>
      <div className="flex flex-col gap-[10px] mt-5 bg-white rounded-3xl p-6">
        
      </div>
    </div>
  )
}