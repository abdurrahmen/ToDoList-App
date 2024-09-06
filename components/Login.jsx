import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className='flex flex-col gap-2 justify-center w-[30vw] min-w-[300px]'>

        <input className='w-full outline-none px-2 rounded-md bg-[#00000057] border-2 font-[500] text-md h-10 focus:border-blue-600 duration-200 ' required placeholder='Enter your email' type='email'/>
        <input className='w-full my-2 outline-none px-2 rounded-md bg-[#00000057] border-2 font-[500] text-md h-10 focus:border-blue-600 duration-200 ' required placeholder='Enter your password' type='password'/>

        <Button text='Log In' dark />
        <Button text='Sign Up' />
        <Button text='I forget my password?' line />

      </div>
  )
}
