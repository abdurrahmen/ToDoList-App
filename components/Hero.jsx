import Link from "next/link"
import Button from "./Button"

export default function Hero() {

  const arrowIcon = <i class="fa-solid fa-arrow-right"></i>;

  return (
    <section className='flex flex-col items-center main-bg'>
      <div className='text-center m-2'>
        
        <p className='text-[8vw] font-semibold text-nowrap sm:text-6xl my-2'>Your Days are 
          <span className='font-extrabold text-blue-600'> messy?</span>
        </p>

        <p className='text-xl font-semibold sm:text-3xl my-2'>Trust me 
          <span className='font-extrabold text-blue-600'> Intajivity </span> 
          will save you
        </p>

        <p className='text-sm text-[#ffffff99] '>make your day easier and more productive</p>
      </div>
      <div className='m-2'>
        <Link href='/login'>
          <Button text='Start for free' icon={arrowIcon} dark />
        </Link>
      </div>
    </section>
  )
}
