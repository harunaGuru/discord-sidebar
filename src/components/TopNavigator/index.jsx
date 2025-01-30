import React from 'react'
import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa'
import useDark from '../../hooks/useDark'

export default function TopNavigator() {
  return (
    <div className='flex h-14 shadow-lg w-full m-0 items-center gap-4 px-2'>
        <NavigatorHash />
        <Search />
        <User />
    </div>
  )
}

const NavigatorHash = () =>{
    return (
        <div className='flex items-center justify-start gap-2 opacity-90'>
            <Hash />
            <h2 className=' tracking-wide text-blue-600 text-nowrap'>tailwind-css</h2>
        </div>
    )
}
const Hash =()=> <FaHashtag size="18" className='opacity-90 text-gray-600' />

const LightToggle = () =>{
    const [dark, setDark] = useDark()
    const handleClick = ()=> setDark(!dark)
    
    return (
        <span onClick={handleClick} className='flex items-center justify-start'>
            {dark ? <FaSun size="24" className='text-red-400'/> : <FaMoon size="24" className='text-gray-600'/>}   
        </span>
    ) 
}
const Bell = () => <FaRegBell size="22" className='text-gray-500 cursor-pointer'/>
const User = ()=> <FaUserCircle size="22" className='text-gray-500 cursor-pointer'/>

const Search = ()=>{
    return <div className='flex flex-row gap-2 ml-auto items-center justify-start'>
        <LightToggle />
        <SearchInput />
        <Bell />

    </div>
}

const SearchInput = () =>{
    return <div className='flex items-center gap-0 px-4 justify-center h-8 w-auto my-auto rounded-full overflow-hidden shadow-md text-gray-500 text-sm bg-blue-300 dark:bg-gray-700'>
        <input type="text" name="text" placeholder='Search..' className='outline-none w-full h-full placeholder:opacity-90 bg-transparent font-semibold placeholder:text-gray-500' />
        <FaSearch size="14" className='opacity-90 cursor-pointer text-blue-600 dark:text-gray-500'/>
    </div>
}