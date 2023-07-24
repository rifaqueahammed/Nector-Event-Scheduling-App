import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="w-full">
    <div className="flex p-10 justify-around">
        <h1 className="font-bold text-3xl"><span className="text-[#22d3ee]">my</span>Calendar</h1>
        <div>
            <h1>July</h1>
            <h1 className="text-gray-500">saturday-july-22-2023</h1>
        </div>
        <div className="">
        <button className="bg-[#22d3ee] rounded-lg text-white p-2">+Create Event</button>
        <input className="p-3 bg-gray-200 ml-5 rounded-md" placeholder="Search Event"></input>
        </div>
    </div>
    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
  </nav>
  )
}

export default Navbar
