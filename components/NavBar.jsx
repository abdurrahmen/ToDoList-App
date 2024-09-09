import React from 'react'
import Button from './Button'

export default function NavBar() {
  return (
    <nav className='flex justify-between mx-auto w-[90vw] py-4 px-4 translate-y-[-5px] rounded-lg items-center border-solid border-2 border-[#eee] '>
      <h2 className='font-bold'>Intajivity</h2>
      <Button main dark text="Log In" />
    </nav>
  )
}
