import React from 'react'

function Card({ data, style }) {
  return (
    <div className={`flex-shrink-0 cursor-pointer duration-500`} style={style} >
      <div className='hover:scale-95 duration-300 rounded-md overflow-hidden'>
        <div className='w-full h-[185px] rounded-xl overflow-hidden relative'>
          <img src={`images/${data.image}`} className='w-full h-full object-cover' alt="" />
          <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black to-transparent to-60% flex text-white font-bold items-end'>
            <span className='truncate tracking-tighter text-xl md:text-[24px] px-4 py-2 font-extrabold font-serif'>{data.offer}</span>
          </div>
        </div>
        <div className='p-4 tracking-tight'>
          <div className='font-[700] text-base truncate'>{data.title}</div>
          <div className='flex font-[600] items-center gap-1'>
            <Star /> {data.rating} <span>&bull;</span>
            {data.minTime}-{data.maxTime} mins
          </div>
          <div className='font-[300] flex flex-col -space-y-1 text-sm md:text-base'>
            <span>{data.name}</span>
            <span>{data.place}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card


const Star = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-hidden="true"
      strokecolor="rgba(2, 6, 12, 0.92)"
      fillcolor="rgba(2, 6, 12, 0.92)"
    >
      <circle
        cx={10}
        cy={10}
        r={9}
        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
      />
      <path
        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="StoreRating20_svg__paint0_linear_32982_71567"
          x1={10}
          y1={1}
          x2={10}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21973B" />
          <stop offset={1} stopColor="#128540" />
        </linearGradient>
      </defs>
    </svg>

  )
}