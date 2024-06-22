import React from 'react'
import Searchbar from './Searchbar'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex items-center h-full p-4 bg-white text-black justify-between '> 
        <div className=' w-fit me-4 md:w-1/2'>
            logo
        </div>

        <div className='flex items-center justify-end w-1/2 md:grow-0 grow'>
        <Searchbar/>
        <div className='border-2 mx-4 hidden md:block'>
            <Image
            src="/profile.png"
            width={40}
            height={40}
            alt="Picture of the author"
            />
        </div>
        <div className=' md:inline-flex flex-col font-bold hidden'> Jhon Doe <span className='font-light'>Admin</span></div>

        </div>
    </div>
  )
}

export default Navbar