import React from 'react'
import Button from './Button'

export default function NavBar() {
  return (
    <nav className='flex justify-around w-[80vw] sm:w-[60vw] mx-auto py-4 rounded-full items-center border-solid border-2 border-[#eee] '>
      <h2 className='font-bold'>To do List</h2>
      <Button main dark text="Log In" />
    </nav>
  )
}
