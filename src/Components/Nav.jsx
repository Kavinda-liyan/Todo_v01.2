import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className='flex justify-center items-center py-2  text-3xl bg-gray-700 h-14'>
     
      
      <div className='bg-gray-500 m-1  rounded-lg overflow-hidden flex flex-row shadow-md shadow-gray-800'>
        <div className='bg-gray-300 text-gray-700'><p className='pl-2 pr-0.5 py-1'>To</p></div>
        <div className='bg-gray-600 text-gray-300'><p className=' pl-0.5 py-1 pr-2'>Do</p></div>
      </div>
    </div>
  )
}

export default Nav