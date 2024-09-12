import Link from 'next/link'
import Button from './Button'
import Calendar from './Calendar'

export default function Dashboard() {

  return (
    <div className='w-full h-full'>
      <div className='flex mb-2 gap-2'>
        <div className='flex items-center justify-center flex-1 bg-orange-500 rounded-lg'>
          <Button dark text='Account center' />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
      <div className='flex gap-2'>
        <Link href='/'>
          <div className='bg-green-600 rounded-lg w-[100px] h-[200px] cursor-pointer active:scale-110 duration-200 '></div>
        </Link>
        <div className='flex items-center justify-center flex-1 bg-orange-500 rounded-lg'>
          <Button dark text='Help' />
        </div>
      </div>
    </div>
  )
}