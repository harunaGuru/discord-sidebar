import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

export default function SideBar() {
  return (
    <div className='flex flex-col fixed top-0 left-0 h-screen w-16 bg-white py-2 dark:bg-gray-800 shadow-lg m-0'>
        <SideBarIcon icon={<FaFire size='24' />} />
        <SidebarHr />
        <SideBarIcon icon={<BsFillLightningFill size={22} />} />
        <SideBarIcon icon={<BsPlus size={22} />} />
        <SideBarIcon icon={<BsGearFill size={22} />} />
        <SidebarHr />
        <SideBarIcon icon={<FaPoo size={24} />}/>
    </div>
  )
}

function SideBarIcon({icon, text='tooltip 💡'}){

    return <div className='flex items-center justify-center h-12 w-12 text-green-500 dark:text-green-400 rounded-3xl bg-gray-400 dark:bg-gray-800 hover:text-white hover:bg-green-600 dark:hover:bg-green-600 cursor-pointer hover:rounded-xl mb-2 mx-auto shadow-lg relative transition-all duration-200 ease-in group'>
        {icon}
        <span className=' w-auto min-w-max font-bold absolute text-white left-16 group-hover:scale-100 transition-all duration-100 origin-left bg-gray-700 p-1 rounded-md shadow-md scale-0 text-sm  text-nowrap'>{text}</span>
    </div>
}

const SidebarHr = ()=> <hr className='h-0 bg-gray-700 border border-gray-700 mx-auto w-3/5 mb-4' />