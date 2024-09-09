import React from 'react'

export default function Footer() {

  const lorem = 'lorem, lorem lorem lorem lorem lorem lorem orem lorem lorem lorem lorem lorem lorem lorem '

  return (
    <footer>
      <ul className='flex justify-evenly flex-col sm:flex-row sm:items-center p-4 rounded-lg translate-y-[10px] w-[90vw] border-2'>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className='text-center translate-x-[-12px] font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className='text-center translate-x-[-12px] font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className='text-center translate-x-[-12px] font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      <li className='text-[8px] sm:text-[10px] max-w-[150px] w-fit'>
        <h3 className='text-center translate-x-[-12px] font-semibold'>CopyRight</h3>
        <p className='text-[#ffffff99]'>{lorem}</p>
      </li>
      </ul>
    </footer>
  )
}
