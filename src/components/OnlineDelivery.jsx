
import React, { useState } from 'react'
import { restaurant } from '../data/FoodCategory';
import Card from './Card';

function OnlineDelivery() {
  return (
    <div className='container mx-auto py-2 px-4'>
      <div className='flex items-center justify-between'>
        <div className='text-xl md:text-3xl font-extrabold font-serif'>Restaurants with online food delivery In <span>Simara</span></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 my-4">
        {restaurant.map((data, i) => {
          return (
            <Card data={data} key={i} />
          )
        })}
      </div>
      <hr className='my-8' />
    </div>
  )
}

export default OnlineDelivery