'use client'
import React, {useState, useEffect} from 'react'
import gsap from 'gsap';

const months = {'January': 'Jan','February': 'Feb','March': 'Mar','April': 'Apr','May': 'May', 'June': 'Jun','July': 'Jul','August': 'Aug','September': 'Sept','October': 'Oct','November': 'Nov','December': 'Dec',
};
const monthsArr = Object.keys(months);

const daysList = {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6};
const daysArr = Object.keys(daysList);

const displayDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {

  const now = new Date();
  const currentMonth = now.getMonth();

  const [selectedMonth, setSelectedMonth] = useState(monthsArr[currentMonth]);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  const monthNow = new Date(selectedYear, monthsArr.indexOf(selectedMonth), 1);
  const firstDayOfMonth = monthNow.getDay();
  const numOf_daysInMonth = new Date(selectedYear, monthsArr.indexOf(selectedMonth) + 1, 0).getDate();

  const daysToDisplay = firstDayOfMonth + numOf_daysInMonth;
  const numOfRows = (Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0)) 

  const numericMonth = monthsArr.indexOf(selectedMonth); 
  
  function changeSelectedMonth(val) {
    if(val === 1) {
      if(numericMonth === 11) {
        setSelectedMonth(monthsArr[0]);
        setSelectedYear(y => y + val);
        
      } 
      else {
        setSelectedMonth(monthsArr[numericMonth + val]);
      }
    } 
    
    else if (val === -1) {
      if(numericMonth === 0) {
        setSelectedMonth(monthsArr[11]);
        setSelectedYear(y => y + val);
      }
      else {
        setSelectedMonth(monthsArr[numericMonth + val]);
      }
    } 
    else if (val === 0) {
      setSelectedMonth(monthsArr[currentMonth]);
      setSelectedYear(now.getFullYear());
    }
  }

  useEffect(() => {
    gsap.fromTo('#animate', {opacity: 0}, {opacity: 1})
  }, [selectedMonth]);

  return (
    <div className='flex flex-col overflow-hidden border-2 rounded-lg px-3 py-3 m-2'>
      <div className='flex items-center justify-between mb-2 flex-col ' >
        <div className='flex items-center justify-between w-full '>
        <p>{selectedMonth} <span className='text-blue-600 font-semibold text-sm'>{selectedYear}</span></p>
          <div>
            <button onClick={() => changeSelectedMonth(-1)} className='bg-blue-600 px-2 rounded-lg m-1'>p</button>
            <button onClick={() => changeSelectedMonth(0)} className='bg-blue-600 px-2 rounded-lg m-1'>b</button>
            <button onClick={() => changeSelectedMonth(1)} className='bg-blue-600 px-2 rounded-lg m-1'>n</button>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-2 text-sm'>
          {...displayDays.map((day, dayindex) => {
            return (
              <p className='pl-1' key={dayindex}>{day}</p>
            )
          })}
        </div>
      </div>
      {[...Array(numOfRows).keys()].map((_, rowIndex) => {
        return(
          <div key={rowIndex} className='grid grid-cols-7 gap-2 mb-2 animate-fade' id='animate'>
            {daysArr.map((_, solidDayIndex) => {

              let numiricDay = (rowIndex * 7) + solidDayIndex - (firstDayOfMonth - 1);
              
              const isToday = (numiricDay === now.getDate() && selectedMonth === monthsArr[now.getMonth()]);

              const DontDisplay = numiricDay > numOf_daysInMonth || numiricDay < 1;
              
              if(DontDisplay) {
                return(
                  <div key={solidDayIndex} />
                )
              }

              return(
                <button>
                  <div key={solidDayIndex} className={'flex items-center justify-center w-[30px] h-[30px] rounded-full font-bold  ' + (isToday ? ' bg-blue-600 ' : ' bg-[#ffffff12]')} >
                  {numiricDay}
                  </div>
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
