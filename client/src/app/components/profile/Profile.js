import React from 'react'
import Image from 'next/image'


const Profile = () => {
  return (
    <div className='h-full'> 

      <div className='flex items-center'>
      <div className='border-2 mx-4'>
            <Image
            src="/profile.png"
            width={60}
            height={60}
            alt="Picture of the author"
            />
        </div>
        <div>
          <h5 className='font-bold'>Jhon Doe</h5>
          <h5>Admin</h5>
          <h5>Location: New York</h5>
        </div>
      </div>
      <h3 className='py-8 font-bold text-2xl'>Tickets Working on</h3>
    
    </div>
  )
}

export default Profile