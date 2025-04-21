import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div className='h-1/5 '>
      <div className='bg-gray-700 h-full flex justify-center items-center flex-col'>
        <p className='text-gray-50 text-sm font-bold'>Todo v01.2</p>
        <p className='font-semibold text-xs text-gray-400'>@{year} Developed by Kavinda Liyanaarchchi</p>
      </div>
    </div>
  )
}

export default Footer