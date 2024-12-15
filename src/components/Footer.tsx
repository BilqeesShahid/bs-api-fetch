import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-12 bg-gray-800 text-gray-100 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <Image src="/mylogo.png" alt="logo" width={35} height={35} />
        <span>All Rights Reserved @jsonserver</span>
      </div>
    </div>
  );
};

export default Footer;
