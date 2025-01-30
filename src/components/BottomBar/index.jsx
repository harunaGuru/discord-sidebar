import React from 'react'
import { FaPlus } from 'react-icons/fa'
export default function BottomBar() {
  return (
    <div className='fixed bottom-4 opacity-90 left-96 gap-1 right-14 flex mt-2 items-center justify-start h-8 rounded-md bg-blue-300 px-4 dark:bg-gray-700 shadow-md'>
        <div className='h-auto w-auto p-1 flex items-center justify-center rounded-full bg-green-500 '>
        <FaPlus size="10"  className='text-white' />
        </div>
        <input type="text" placeholder="Enter-message..." name="text"  className='p-1 outline-none bg-transparent  placeholder:text-gray-500 placeholder:text-opacity-90 placeholder:text-sm text-sm text-gray-500 ' />
    </div>
  )
}
