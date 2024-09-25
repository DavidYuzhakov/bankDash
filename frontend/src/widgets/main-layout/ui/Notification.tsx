import { useState } from "react"
import notIcon from "shared/assets/icons/notification.svg"

export function Notification () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button 
      type="button" 
      className="flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full duration-200 hover:bg-b-gray group">
      <img className="group-hover:rotate-12 duration-200" src={notIcon} alt="notification" />
    </button>
  )
}