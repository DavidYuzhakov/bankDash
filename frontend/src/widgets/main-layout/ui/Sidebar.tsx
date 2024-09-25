import Dashboard from "shared/assets/icons/nav/nav-1.svg?react"
import Transactions from "shared/assets/icons/nav/nav-2.svg?react"
import Accounts from "shared/assets/icons/nav/nav-3.svg?react"
import Investments from "shared/assets/icons/nav/nav-4.svg?react"
import CreditCards from "shared/assets/icons/nav/nav-5.svg?react"
import Loans from "shared/assets/icons/nav/nav-6.svg?react"
import Services from "shared/assets/icons/nav/nav-7.svg?react"
import Privileges from "shared/assets/icons/nav/nav-8.svg?react"
import Setting from "shared/assets/icons/nav/nav-9.svg?react"

import logo from "shared/assets/images/logo.png"

import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react"
import { useNavStore } from "../model"
import { routesTitleMap } from "../lib"

export function Sidebar () {
  const lineRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const path = useNavStore(state => state.path)
  const updatePath = useNavStore(state => state.updatePath)

  useEffect(() => {
    updatePath(location.pathname, routesTitleMap[location.pathname])
  }, [location.pathname, updatePath])

  useEffect(() => {
    const active = document.querySelector<HTMLElement>('li.active')
    if (lineRef && lineRef.current) {
      lineRef.current.style.top = active?.offsetTop + 'px'
    }
  }, [path])

  return (
    <aside className="max-w-[250px] w-full border-r border-b-gray bg-white h-screen py-9 flex flex-col items-center">
      <Link to={'/'} className="flex gap-2 items-center mb-12">
        <img src={logo} alt='logo' />
        <h4 className="text-title text-2xl font-black ">BankDash.</h4>
      </Link>
      <nav className="w-full flex flex-col items-center">
        <span ref={lineRef} className="w-[6px] h-[60px] rounded-tr-md rounded-br-md bg-blue absolute left-0 duration-200"/>
        <ul>
          <Link to={'/'}>
            <li className={`${path === '/' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Dashboard className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Dashboard</span>
            </li>
          </Link>
          <Link to={'/transactions'}>
            <li className={`${path === '/transactions' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Transactions className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Transactions</span>
            </li>
          </Link>
          <Link to={'/accounts'}>
            <li className={`${path === '/accounts' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Accounts className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Accounts</span>
            </li>
          </Link>
          <Link to={'/investments'}>
            <li className={`${path === '/investments' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Investments className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Investments</span>
            </li>
          </Link>
          <Link to={'/credit-cards'}>
            <li className={`${path === '/credit-cards' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <CreditCards className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Credit Cards</span>
            </li>
          </Link>
          <Link to={'/loans'}>
            <li className={`${path === '/loans' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Loans className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Loans</span>
            </li>
          </Link>
          <Link to={'/services'}>
            <li className={`${path === '/services' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Services className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Services</span>
            </li>
          </Link>
          <Link to={'/privileges'}>
            <li className={`${path === '/privileges' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Privileges className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">My Privileges</span>
            </li>
          </Link>
          <Link to={'/setting'}>
            <li className={`${path === '/setting' ? 'active' : ''} flex items-center gap-6 px-2 py-5 group`}>
              <Setting className="fill-secondary duration-200 group-[.active]:fill-blue" />
              <span className="font-medium text-lg text-secondary group-[.active]:text-blue duration-200">Setting</span>
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  )
}