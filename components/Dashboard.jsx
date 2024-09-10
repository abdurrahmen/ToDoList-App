import Button from './Button'
import Calendar from './Calendar'

export default function Dashboard() {

  return (
    <div className='h-full w-full'>
      <div className='flex justify-between flex-col sm:flex-row'>
        <Calendar />
        <div className=''>
          <Button  text='Create An To do list' />
        </div>
      </div>
      <div className='flex justify-between flex-col sm:flex-row'>
        <div>
          Sharts
        </div>
        <div>
          Data
        </div>
      </div>
      
    </div>
  )
}
