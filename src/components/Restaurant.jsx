import React, { useState } from 'react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { restaurant } from '../data/FoodCategory';
import Card from './Card';

function Restaurant() {
  let [slide, setSlide] = useState(0);
  let nextSlider = () => {
    if (slide >= restaurant.length - 3) return false;
    setSlide(slide + 3)
  }

  let prevSlider = () => {
    if (slide <= 0) return false
    setSlide(slide - 3)
  }
  return (
    <div className='container mx-auto py-2 my-4 px-4'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl md:text-3xl font-extrabold font-serif'>Top restaurant chains in Simara</div>
        <div className='hidden md:flex items-center gap-2'>
          <LuArrowLeft className='bg-[rgb(226,226,231)] hover:bg-[rgb(194,194,202)] rounded-full p-2 w-[35px] h-[35px] cursor-pointer' onClick={prevSlider} />
          <LuArrowRight className='bg-[rgb(226,226,231)] hover:bg-[rgb(194,194,202)] rounded-full p-2 w-[35px] h-[35px] cursor-pointer' onClick={nextSlider} />
        </div>
      </div>
      <div className="flex flex-shrink-0 gap-8 overflow-x-scroll md:overflow-hidden my-4">
        {restaurant.map((data, i) => {
          return (
            <Card data={data} key={i} style={{ width:'17rem',transform: `translateX(-${slide * 100}%)`, }} />
          )
        })}
      </div>
      <hr className='mt-10' />
    </div>
  )
}

export default Restaurant