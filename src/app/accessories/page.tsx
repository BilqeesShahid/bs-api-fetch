import Products from '@/components/Product';
import Title from '@/components/Title';
import React from 'react'

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Accessories = async() => {
  const products = await getData()
  return (
    <div>
      <Title title="Make Your Phone Look Beautiful By Elegant PhoneCase "/>
      <Products products={products} />
    </div>
  )
}

export default Accessories