import React, { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'

const Topic = ['coding', 'react', 'nextjs']
const Questions = ['javascript', 'html', 'css', 'boostrap']
const Random = ['variants', 'plugins']

export default function ChannelBar() {
  return (
    <div className='w-80 ml-16 flex flex-col h-auto overflow-hidden bg-gray-200 dark:bg-gray-700'>
        <ChannelBarHeader />
        <div className='flex flex-col py-2 w-full h-auto overflow-hidden'>
            <ChannelBarContent topic="Topic" items={Topic} />
            <ChannelBarContent topic="Questions" items={Questions} />
            <ChannelBarContent topic="Random" items={Random} />
        </div>
    </div>
  )
}

const ChannelBarHeader = ()=> {
    return <div className='h-16 text-gray-500 pl-4 flex items-center  mb-4 dark:text-gray-400'>
        <h1 className='text-lg tracking-wider font-bold'>Channels</h1>
    </div>
}
const ChannelBarContent = ({topic, items})=>{
    const [expand, setExpand] = useState(false)
    function handleClick(){
        setExpand(!expand)
     }
    return (
        <div  className='flex flex-col'>
            <div onClick={handleClick} className='flex text-gray-500 flex-row items-center justify-start gap-3 pl-3'>
                <div className='flex text-blue-600 items-center justify-center cursor-pointer transition duration-300 ease-in '>
                    {expand ? 
                    <FaChevronDown size="14" /> :
                    <FaChevronRight size="14"/>
                    }
                </div>
                <ChannelBarContentLoop expand={expand} topic={topic} />
                <ChannelPlus />
            </div>
            <div className='flex flex-col space-y-2 mt-2 ml-2'>
            {expand ?
            <div className='w-full h-auto mb-2 transition duration-300 ease-in'>
                {items.map((item)=> <ChannelBarContentTopic key={item} item={item} /> ) }
            </div> : null}
            </div>
        </div>
    )
}

const ChannelPlus = ()=> <div className='ml-auto mr-2 text-blue-600 cursor-pointer'>
    <FaPlus size="12"  />
    </div>
const commonFont = 'font-semibold text-gray-500 tracking-wide cursor-default transition duration-200'
const ChannelBarContentLoop = ({expand, topic})=>{
    return <h3 className={ expand ? `${commonFont} text-blue-500 font-bold` : commonFont}>{topic}</h3>
}

const ChannelBarContentTopic = ({item})=>{
    return <div className=' opacity-90 text-sm flex flex-row items-center ml-4 transition-all duration-300 ease-in dark:text-gray-400 dtext-gray-500  cursor-pointer '>
        <BsHash size="18"/>
        <h className='font-semibold tracking-wide text-gray-500'>{item}</h>
    </div>
}