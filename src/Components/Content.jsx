import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [input,setInput]=useState('');

  const onChangeinput=(event)=>{
   setInput(event.target.value);
   console.log(input)
  }

  return (
    <div className='flex items-center h-96 justify-center'>
        <div className=''>
        <input value={input} onChange={onChangeinput} className='bg-gray-200 text-xl border-1 border-gray-600 py-1 px-2 m-2 rounded-md text-gray-600 w-2xl max-w-sm' type="text" placeholder='Add new Todo here...' />
        <button type='submit' className='bg-gray-500 text-xl py-1 px-2 m-2 rounded-md shadow-sm shadow-gray-900 text-gray-300 hover:bg-gray-600 hover:cursor-pointer hover:text-gray-400'><span className='font-bold'>+</span> Add Todo</button>

        </div>
        
    </div>
  )
}

export default Content