import React from 'react'
import Products from '@/components/Product';
import Title from '@/components/Title';

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/watch");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Watches = async() => {
  const products = await getData()
  return (
    <div>
        <Title title="Give Your Hand wrist A Smart Look by Our Watches"/>
        <Products products={products} />
    </div>
  )
}

export default Watches