import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const navbar = [
    {
      _id: 1,
      title: "Phones",
      href: "/",
    },
    {
      _id: 2,
      title: "PhoneCase",
      href: "/phonecase",
    },
    {
      _id: 3,
      title: "Watches",
      href: "/watches",
    },
    {
      _id: 4,
      title: "Accessories",
      href: "/accessories",
    },
  ];

  return (
    <div className="w-full h-16 bg-gray-800 text-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4">
        {/* Logo and Text */}
         <Link href="/">
        <div className="flex items-center gap-2">
          
          <Image src="/mylogo.png" alt="logo" width={40} height={40} />
          <span className="text-[10px] lg:text-base font-semibold">API-FETCH</span>
      
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 lg:gap-6">
          {navbar.map((item) => (
            <Link
              href={item.href}
              key={item._id}
              className="uppercase lg:text-sm text-[10px] hover:text-white duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
