import React, { useState } from 'react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import { categories } from '../data/FoodCategory'

function Categories() {
  let [slide, setSlide] = useState(0);


  let nextSlider = () => {
    if (slide === categories.length - 5) return false
    setSlide(slide + 5)
  }

  let prevSlider = () => {
    if (slide === 0) return false
    setSlide(slide - 5)
  }

  return (
    <div className='container mx-auto my-4 py-2 px-4'>
      <div className='flex items-center justify-between'>
        <div className='text-3xl font-extrabold font-serif'>What's on your mind?</div>
        <div className='hidden md:flex items-center gap-2'>
          <LuArrowLeft className='bg-[rgb(226,226,231)] hover:bg-[rgb(194,194,202)] rounded-full p-2 w-[35px] h-[35px] cursor-pointer' onClick={prevSlider} />
          <LuArrowRight className='bg-[rgb(226,226,231)] hover:bg-[rgb(194,194,202)] rounded-full p-2 w-[35px] h-[35px] cursor-pointer' onClick={nextSlider} />
        </div>
      </div>
      <div className="flex flex-shrink-0 gap-3 overflow-x-scroll md:overflow-hidden pb-4 px-1">
        {categories.map((cats, i) => {
          return (
            <div className={`w-[150px] cursor-pointer flex-grow flex-shrink-0 duration-500`} key={i} style={{ transform: `translateX(-${slide * 100}%)` }}>
              <img src={`images/${cats.image}`} className='w-full' alt="" />
            </div>
          )
        })}
      </div>
      <hr className='my-4' />
    </div>
  )
}

export default Categories