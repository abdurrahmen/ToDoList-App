import Link from "next/link"
import Button from "./Button"

export default function Hero() {

  return (
    <section className='flex flex-col items-center'>
      <div className='text-center m-2'>
        
        <p className='text-3xl sm:text-6xl my-2'>Your Days are 
          <span className='font-extrabold text-blue-600'> messy?</span>
        </p>

        <p className='text-xl sm:text-3xl my-2'>maybe all what you <span className='font-extrabold text-blue-600'>need</span> is a
        <span className='font-extrabold text-blue-600'> To do list.</span>
        </p>

        <p className='text-sm text-[#ffffff99] '>make your day easier and more productive</p>
      </div>
      <div className='m-2'>
        <Link href='/login'>
          <Button text='Start for free' dark />
        </Link>
      </div>
    </section>
  )
}
