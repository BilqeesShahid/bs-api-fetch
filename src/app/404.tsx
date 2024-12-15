import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>
      <p>Your Page is not found!</p>
      <Link href="/" className='border-b-[1px] border-b-gray-900 mt-2'>
        Back To Home
        </Link>
    </div>
  )
}

export default NotFoundPage
