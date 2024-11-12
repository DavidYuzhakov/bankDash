import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function MainLayout () {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="flex-grow h-full">
        <Header />
        <main className="px-10 py-[30px] flex flex-col gap-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}