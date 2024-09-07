'use client'
import React, {useState} from 'react'

const months = {'January': 'Jan','February': 'Feb','March': 'Mar','April': 'Apr','May': 'May', 'June': 'Jun','July': 'Jul','August': 'Aug','September': 'Sept','October': 'Oct','November': 'Nov','December': 'Dec',
};
const monthsArr = Object.keys(months);

const daysList = {'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6};
const daysArr = Object.keys(daysList);

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

  console.log(daysArr);
  
  

  return (
    <div className='flex flex-col overflow-hidden'>
      {[...Array(numOfRows).keys()].map((row, rowIndex) => {
        return(
          <div key={rowIndex} className='grid grid-cols-7 gap-1'>
            {daysArr.map((_, solidDayIndex) => {
              let numiricDay = (rowIndex * 7) + solidDayIndex - (firstDayOfMonth - 1);
              
              const isToday = solidDayIndex === now.getDate() && selectedMonth === monthsArr[now.getMonth()];

              const DontDisplay = numiricDay > numOf_daysInMonth || numiricDay < 1;
              
              if(DontDisplay) {
                return(
                  <div key={solidDayIndex} />
                )
              }

              if(isToday)
                return(
                  <div key={solidDayIndex} className='text-blue-600'>
                    {numiricDay};
                  </div>
                )
              
              return(
                <div key={solidDayIndex} >
                  {numiricDay}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
