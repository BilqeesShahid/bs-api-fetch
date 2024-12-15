import { getSingleProduct } from '@/helpers';
import Image from 'next/image';
import React from 'react';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center gap-6 p-4 xl:gap-10">
      {/* Product Image */}
      <Image
        src={product?.image}
        alt="product image"
        width={500}
        height={500}
        className="w-full h-auto max-w-xs sm:max-w-sm xl:max-w-md"
      />

      {/* Product Details */}
      <div className="flex flex-col gap-2 text-center xl:text-left">
        <p className="text-lg sm:text-xl font-semibold">{product?.title}</p>
        <p className="text-sm sm:text-base">{product?.description}</p>
        <p className="font-semibold text-sm sm:text-base">Price: ${product?.price}</p>
        <p className="text-sm sm:text-base">Category: {product?.category}</p>
        <p className="text-sm sm:text-base">{product?.isNew && 'New Item'}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
