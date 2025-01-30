import React, { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue)=>{
    const [item, setItem] = useState(()=>{
      try{
        const getItem = localStorage.getItem(key)
        if(getItem){
            return JSON.parse(getItem)
        }
        return initialValue
      }catch(err){
        console.log(err)
        return initialValue
      }
    })
    const setItemValue = (valueOrFn) =>{
      let newValue;
      if (typeof valueOrFn === 'function') {
          const fn = valueOrFn;
          newValue = fn(item)
      }
      else {
          newValue = valueOrFn;
      }
      localStorage.setItem(key, JSON.stringify(newValue))
      setItem(newValue)
    }
    return [item, setItemValue]
}

export default function useDark() {
  const [darkMode, setDarkMode] = useLocalStorage("dark")
  const isEnabled = typeof enabled === 'undefined' && darkMode
  useEffect(() => {
    const className = "dark"
    const body = window.document.body.classList
    isEnabled ? body.add(className) : body.remove(className)
    
  }, [isEnabled, darkMode])
  
  return [darkMode, setDarkMode]
}
