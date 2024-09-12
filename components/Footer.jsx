import React from 'react'

export default function Footer() {

  const lorem = 'lorem, lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem '

  return (
    <footer className='z-20 w-full mt-2'>
      <ul className='grid grid-cols-2 place-items-center sm:grid-cols-4 p-4 bg-[#1d1d1d] border-t-2'>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className=' font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className=' font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className=' font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className=' font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      </ul>
    </footer>
  )
}
