import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className='min-w-[350px] w-[40vw]'>
      {/* <div className=''>
          <h2 className='text-center'>Make your time more productive with Intajivity</h2>
      </div> */}
      <div className='flex flex-col gap-2 justify-center '>
        <h1 className='text-center text-4xl font-semibold'>Login</h1>
        <p className='text-sm text-[#ffffff99] text-center'>make your days easier and more productive</p>
        <input className='w-full outline-none px-2 rounded-md bg-[#00000057] border-2 font-[500] text-md h-10 focus:border-blue-600 duration-200 ' required placeholder='Email, username' type='email'/>
        <input className='w-full my-2 outline-none px-2 rounded-md bg-[#00000057] border-2 font-[500] text-md h-10 focus:border-blue-600 duration-200 ' required placeholder='password' type='password'/>

        <Button text='Log In' dark />
        <Button text='Sign Up' />
        <Button text='I forget my password?' line />

      </div>
    </div>
  )
}
