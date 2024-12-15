"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface ProductType{
  _id: number,
    title: string,
    price: number,
    previousPrice: number,
    description: string,
    category: string,
    image: string,
    isNew: true,
    brand: string,
    quantity: 1
}
interface Props{
  products:ProductType[];
}

const Products = ({products}:Props) => {

  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols-1
     md:grid-cols-2 xl:grid-cols-4 gap-5 py-5'>
      {products.map((item) => (
        <Link href={{pathname:"/singleproduct", query:{_id:item?._id}}} key={item._id}>
<div className='border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300'>
  <Image src={item?.image} alt="foneImage"
  width={500}
  height={500}
  className='w-full h-80 object-cover'/>

<div className='px-4 pb-2 text-sm flex flex-col gap-1'>
  <p className='text-gray-600'>{item?.title}</p>
  <p className='font-semibold'>${item?.price}</p>
  <div className='flex items-center justify-between'>
    <button className='border border-gray-500 p-1 rounded-md'>Add To Cart</button>
    <button className='text-xs uppercase underline font-semibold hover:text-blue-700 duration-300'>More Info</button>
  </div>
</div>
</div>
        </Link>
      ))}
    </div>
  )
}

export default Products