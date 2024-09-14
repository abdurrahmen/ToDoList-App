import React from 'react'

export default function Button(props) {

  const {text, dark, line, main, handleClick, icon} = props;


  return (
    <button onClick={handleClick} className={line ? ' before:absolute before:h-[2px] before:w-full before:bg-blue-600 before:top-4 before:rounded-lg active:before:w-0 active:border-none pb-[1px] border-blue-600 w-fit m-auto text-xs relative ' : 
      (dark ? ' bg-blue-600  ' : ' bg-transparent ') + (main ? ' text-sm px-6 text-center' : '') +
      'flex items-center gap-2 justify-center border-blue-600 border-2 rounded-md p-5 py-2 font-[500] text-md active:bg-blue-500 active:border-blue-500 active:scale-95 duration-200 moveChild '}  >
      {text} <span className='moveMe duration-200'>{icon}</span>
    </button>
  )
}
