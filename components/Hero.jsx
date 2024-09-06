import Login from "./Login";

export default function Hero() {
  return (
    <>
      <div className='text-center m-2'>
        <p className='text-xl sm:text-4xl font-[500]'>
          Your Days are <span className='font-extrabold text-blue-600'>messy?</span><br />
          maybe all what you need is a <span className='font-extrabold text-blue-600'>To do list.</span>
        </p>
        <p className='text-sm text-[#ffffff99] '>make your day easier and more productive</p>
      </div>

      <Login />
    </>
  )
}
