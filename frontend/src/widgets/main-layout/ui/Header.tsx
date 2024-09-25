import { Search } from "features/search"
import { useNavStore } from "../model"
import { Link } from "react-router-dom"

import { Notification } from "./Notification"

import setting from "shared/assets/icons/setting.svg"
import profile from "shared/assets/images/profile.png"

export function Header () {
  const title = useNavStore(state => state.title)

  return (
    <header className="flex justify-between items-center w-full bg-white py-5 px-10">
      <h3 className="text-title text-[28px] font-semibold">{ title }</h3>
      <div className="flex items-center gap-[30px]">
        <Search />
        <Link to={'/setting'}>
          <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#F5F7FA] rounded-full duration-200 hover:bg-b-gray group">
            <img className="duration-200 group-hover:rotate-12" src={setting} alt="setting" />
          </div>
        </Link>
        <Notification /> 
        <Link to={'/profile'}>
          <img src={profile} width={60} height={60} alt="profile" />
        </Link>
      </div>
    </header>
  )
}