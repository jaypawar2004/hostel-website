import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-15 border-b border-[#F3D5D2] text-black bg-[#FFF8F6] flex items-center justify-between px-5'>
        <div>Logo</div>
        <div className='text-[#7A6068] flex gap-7'>
            <h1>Home</h1>
            <h1>Buildings</h1>
            <h1>Gallery</h1>
            <h1>Rooms</h1>
            <h1>Reviews</h1>
            <h1>Location</h1>
        </div>
        <div>
            <button className='bg-[#C4687A] text-white rounded-full font-semibold px-3 py-2'>Enquire Now</button>
        </div>
    </div>
  )
}

export default NavBar