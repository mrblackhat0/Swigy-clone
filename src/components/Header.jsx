import React, { useState } from 'react'
import { IoIosArrowDown, IoIosHelpBuoy, IoIosSearch, IoMdPerson } from 'react-icons/io'
import { LuShoppingCart } from 'react-icons/lu'
import { CiDiscount1 } from 'react-icons/ci'
import { FaTimes } from 'react-icons/fa'

function Header() {
  let [toogle, setToogle] = useState()
  let [toogleMenu, setToogleMenu] = useState(false)
  let icons = [
    { name: 'Search', icon: <IoIosSearch /> },
    { name: 'Offer', icon: <CiDiscount1 /> },
    { name: 'Help', icon: <IoIosHelpBuoy /> },
    { name: 'Sign In', icon: <IoMdPerson /> },
    { name: 'Cart', icon: <LuShoppingCart /> },
  ]
  return (
    <>
      <div className={`w-full h-full bg-[#00000073] fixed duration-[600ms] z-[999] `} onClick={() => setToogle(false)} style={{ opacity: toogle ? '1' : '0', visibility: toogle ? 'visible' : 'hidden' }}>
        <div className={`bg-white h-full z-[9999] w-full md:w-[567px] absolute top-0 duration-[300ms]`} style={{ left: toogle ? '0%' : '-100%' }}></div>
      </div>
      <header className='shadow-md mx-auto text-[16px] sticky top-0 bg-white z-[99]'>
        <section className='container-nav mx-auto flex items-center justify-between xl:px-8 border-black py-2 relative'>
          <div className='flex items-center gap-2'>
            <div className='w-[60px] p-2 hover:p-1 cursor-pointer'>
              <img src="/images/swiggy.png" alt="logo" className='w-full' />
            </div>
            <div className='flex items-center gap-1 cursor-pointer group' onClick={() => setToogle(true)}>
              <span className='font-semibold border-black border-b-2 group-hover:text-orange-400 group-hover:border-orange-400'>Simara </span>
              <span className='group-hover:text-slate-500'>Bara, Nepal</span>
              <IoIosArrowDown className='text-orange-400' />
            </div>
          </div>

          <span className={`md:hidden fixed top-7 right-0 cursor-pointer me-4 z-[99999]`} onClick={() => { setToogleMenu(!toogleMenu) }}>{
            toogleMenu ? <FaTimes className='my-1' /> : <span>&#9776;</span>}</span>

          <ul className={`h-full w-1/2 flex items-center md:w-auto fixed md:static duration-[200ms] text-[18px] gap-10 ${toogleMenu ? 'flex-col bg-white top-0 py-[75px]' : 'top-0'}`} style={{ right: toogleMenu ? '0%' : '-100%' }}>
            {icons.map((v, i) => {
              return (
                <li className='flex items-center gap-1 hover:text-orange-400 cursor-pointer' key={i}>
                  {v.icon}
                  <span>{v.name}</span>
                </li>
              )
            })}

          </ul>
        </section>
      </header>
    </>
  )
}

export default Header