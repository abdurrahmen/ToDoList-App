import React from 'react'
import Button from './Button'

export default function CallToAction() {
  const arrowIcon = <i class="fa-solid fa-arrow-right"></i>;
  return (
    <section className='h-[80vh] flex flex-col items-center justify-center gap-4' >
      <h1 className='text-4xl font-bold' >Start with us Now!</h1>
      <Button text='Start for free' icon={arrowIcon} dark />
    </section>
  )
}
