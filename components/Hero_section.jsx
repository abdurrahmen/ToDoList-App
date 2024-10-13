import Image from 'next/image';
import React from 'react'
import hilterImg from '@public/images/hitler.jpg'

export default function Hero_section(props) {
  
  const {title, discreption} = props;

  return (
    <section className='h-[80vh] flex items-center justify-center flex-col sm:flex-row gap-8' > 
      <div className='flex flex-col justify-between gap-4' >
        <h1 className='font-bold sm:text-md text-2xl' >{title}</h1>
        <p>{discreption}</p>
      </div>
      <Image 
        src={hilterImg} 
        width={500}
        height={500}
        alt='hitler img'
        className='rounded-lg shadow-sm shadow-white'
      />
    </section>
  )
}
