import search from "shared/assets/icons/search.svg"

export function Search () {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-[#F5F7FA] rounded-full">
      <button type="button">
        <img src={search} alt="search" />
      </button>
      <input className="bg-transparent placeholder:text-[#8BA3CB] text-primary text-[15px]" type="search" placeholder="Search for something" />
    </div>
  )
}