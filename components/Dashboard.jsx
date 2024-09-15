import Link from 'next/link'
import Calendar from './Calendar'

export default function Dashboard() {

  return (
    <div className='w-full h-full'>
      <div className='flex mb-2 gap-2 '>
        <div>
          <Calendar />
        </div>
        <div className='p-2 flex-1 bg-orange-500 rounded-lg'>
          <h2 className='text-lg sm:text-2xl font-semibold '>Account Center</h2>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 '>
        <Link className='h-[200px] min-w-[40%]' href='/'>
          <div className='bg-green-600 rounded-lg w-full h-full cursor-pointer active:scale-110 duration-200 '></div>
        </Link>
        <div className='p-2 flex-1 bg-[#f4c542] rounded-lg min-h-[200px]'>
          <div className='flex justify-between items-center px-2'>

            <h2 className='text-lg sm:text-2xl font-semibold '>Notes</h2>
            <Link href='/dashboard/notes' className=''>
              <button className='active:scale-95 duration-200 ease-out bg-[#1a1a1a] px-3 py-2  rounded-lg m-1'><i class="fa-sharp fa-solid fa-pen"></i></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}