import Image from 'next/image';
import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { IoHeart } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { PiGearSixBold } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";








const NavbarTop = () => {
  return (
    <header className="bg-background w-[1440px] h-[124px]  border border-[rgba(195, 212, 233, 0.4)] flex items-center ">
      <div className = "flex justify-start">
      {/* Logo */}
      <div className='w-[148px] h-[44px] flex items-center ml-[60px]'>
 <h1> <strong className='font-plusJakartaSans text-[700] text-[32px] leading-[48px] tracking-[-0.03rem] text-primary'>MORENT</strong></h1>
</div>
<div className = "ml-[64px]">
      {/* Search Bar */}
      <div className="w-[492px] h-[44px] flex items-center border border-[rgba(195, 212, 233, 0.4)] rounded-[70px] ">
        
        {/* Search Icon */}
        <div className = "px-[20px]">
        <RiSearch2Line className="w-[24px] h-[24px] text-secondary "/>
        </div>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 font-plusJakartaSans font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-secondary outline-none bg-transparent"
        />
        
        {/* Filter Icon */}
        <div  className="pr-[20px]">
        <Image
        src="/images/filter1.svg" // Correct the path if required
          alt="Filter Icon"
          width={24}
          height={24}
        />
        </div>
       </div>
       </div>
       </div>
       {/* right side  */}
       {/* icons */}
       <div className='min-w-[236px] ml-auto gap-[20px] flex items-center justify-end pr-[32px]'>
        <div className = "w-[44px] h-[44px] flex items-center justify-center border border[rgba(195, 212, 233, 0.4)] rounded-full ">
       <IoHeart className = "w-[24px] h-[24px] flex " />
       </div>
       <div className="w-[44px] h-[44px] flex items-center justify-center border border-[rgba(195, 212, 233, 0.4)] rounded-full relative">
  {/* Notification Icon */}
  <IoIosNotifications className="w-[24px] h-[24px]" />
  
  {/* Unfilled Circle (Overlayed on right side) */}
  <sup className="absolute right-0 top-0">
    <FaCircle className="w-[11px] h-[11px] text-[#FF4423]" />
  </sup>
</div>
       <div className = "w-[44px] h-[44px] flex items-center justify-center border border[rgba(195, 212, 233, 0.4)] rounded-full ">
       <PiGearSixBold className = "w-[24px] h-[24px] flex " />
       </div>
       {/* profile pic */}
       
       <Image
        src="/images/imag.svg" 
          alt="Filter Icon"
          width={44}
          height={44}
        />
       
</div>
    
    </header>
  );
};



  

    
    
    
    
    
 


   


export default NavbarTop
