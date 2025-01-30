import React from 'react'
import TopNavigator from '../TopNavigator'
import BottomBar from '../BottomBar'

export default function ContentContainer() {
  return (
    <div className='w-full h-screen overflow-hidden shadow-lg bg-gray-400 dark:bg-gray-700'>
      <TopNavigator />
      <div className='flex flex-col pt-3 pb-14 px-10 w-full h-full overflow-y-scroll'>
      <MainContent name='Ada' timeStamp='one week ago' content={<p className='dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vel. Libero ipsum in, nulla iure dolore laboriosam nihil et suscipit quia numquam aspernatur vel sed asperiores quos, voluptatum ipsa dignissimos.
      Fuga voluptatum consequuntur saepe perferendis ratione error? Soluta error accusantium, libero asperiores facilis aperiam molestias repellat ducimus totam fugiat, illum ea consequatur commodi unde veniam necessitatibus! Qui maiores eveniet id!</p>}/>

      <MainContent name='Jacob' timeStamp='12hrs ago' content={<p className='dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vel. Libero ipsum in, nulla iure dolore laboriosam nihil et suscipit quia numquam aspernatur vel sed asperiores quos, voluptatum ipsa dignissimos.
      Fuga voluptatum consequuntur saepe perferendis ratione error? Soluta error accusantium, libero asperiores facilis aperiam molestias repellat ducimus totam fugiat, illum ea consequatur commodi unde veniam necessitatibus! Qui maiores eveniet id!</p>}/>

      <MainContent name='Felicia' timeStamp='one hour ago' content={<p className='dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vel. Libero ipsum in, nulla iure dolore laboriosam nihil et suscipit quia numquam aspernatur vel sed asperiores quos, voluptatum ipsa dignissimos!</p>}/>

      <MainContent name='Rose' timeStamp='10min aago' content={<p className='dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vel. Libero ipsum in, nulla iure dolore laboriosam nihil et suscipit quia numquam aspernatur vel sed asperiores quos, voluptatum ipsa dignissimos.
      Fuga voluptatum consequuntur saepe perferendis ratione error? Soluta error accusantium, libero asperiores facilis aperiam molestias repellat ducimus totam fugiat, illum ea consequatur commodi unde veniam necessitatibus! Qui maiores eveniet id!</p>}/>

      <MainContent name='Jacob' timeStamp='just now' content={<p className='dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, vel.</p>}/>
      </div>
      <BottomBar />
    </div>
  )
}

const MainContent = ({name, timeStamp, content})=>{
  const random = Math.round(Math.random() * 100)
  return <div className='flex flex-row gap-3 items-start justify-start mb-4'>
      <div className='h-7 w-7 rounded-full bg-white flex-none overflow-hidden '>
        <img src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${random}`} alt="avatar" className='object-cover w-full h-auto' />
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='flex flex-row gap-2 items-center justify-start'>
          <h3 className='font-semibold dark:text-green-500'>{name}</h3>
          <span className='text-sm opacity-50 dark:text-gray-500'>{timeStamp}</span>
        </div>
        {content}
      </div>
    </div>

  
}