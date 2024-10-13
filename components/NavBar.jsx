import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='z-20 sticky flex justify-between mx-auto w-[90vw] py-4 px-4 sm:px-8 translate-y-[-5px] rounded-lg items-center border-solid border-2 border-[#eee] '>
      <Link href='/'>
        <h2 className='font-bold'>Intajivity</h2>
      </Link>
      <Link href='/dashboard'>
        <Button main dark text="Log In" />
      </Link>
    </nav>
  )
}
