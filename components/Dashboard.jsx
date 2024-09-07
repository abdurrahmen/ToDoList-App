import Calendar from './Calendar'

export default function Dashboard() {

  return (
    <div className='h-full w-full'>
      <div className='flex justify-between'>
        <Calendar />
        <div>Account Center

        </div>
      </div>
      <div className='flex justify-between'>
        <div>Sharts

        </div>
        <div>Data

        </div>
      </div>
    </div>
  )
}
