import React from 'react'

export default function Button(props) {

  const {text, dark, line, main, handleClick, icon} = props;


  return (
    <button onClick={handleClick} className={line ? 'flex items-center justify-between border-b-[1.5px] border-blue-600 w-fit m-auto text-xs ' : 
      (dark ? ' bg-blue-600  ' : ' bg-transparent ') +
      'border-blue-600 border-2 rounded-md p-[5px] font-[500] text-md active:bg-blue-500 active:border-blue-500 duration-200' + (main ? '  px-4' : '')} >
      {text} {icon}
    </button>
  )
}
