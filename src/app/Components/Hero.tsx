import { Section } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";


 

  
  
const Hero = () => {
  return (
    <section className='bg-[#F6F7F9] w-[1440px] h-[2120px] px-[64px]'>
      <div className="mt-[32px] flex items-center justify-between">
        {/* Card with Image and Content (Left) */}
        <div className="relative w-[640px] h-[360px] rounded-[10px] overflow-hidden shadow-lg">
          {/* Base Image */}
          <Image
            src="/images/ad.jpg"
            alt="Base Image"
            width={640}
            height={360}
            className="w-full h-full object-cover rounded-[10px]"
          />

          {/* Overlay Image */}
          <div className="absolute top-[234px] left-[137px]">
            <Image
              src="/images/CAR2.svg"
              alt="Overlay Image"
              width={406}
              height={116}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="min-w-[284px] min-h-[224px]  gap-[20px] absolute top-[24px] left-[24px] flex flex-col justify-start  text-white z-10 ">
            <div className ="min-w-[284px] min-h-[160px] flex-col  flex gap-[16px] ">
            {/* Heading */}
           
            <h2 className="w-[272px] h-[96px] font-plusJakartaSans font-[600] text-[32px] leading-[48px] tracking-[-0.03rem]">
              The Best Platform for Car Rental
            </h2>
           

            {/* Paragraph */}
            
            <p className="w-[284px] h-[48px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] text-justify tracking-[-0.02rem]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            
            </div>

            {/* Button */}
            <div className = "w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] bg-[#3563E9] flex justify-center items-center">
            <button className="w-[80px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-center text-white rounded-[10px] ">
              Rental Car
            </button>
            </div>
          </div>
        </div>

        {/* Card with Image and Content (Right) */}
        <div className="relative w-[640px] h-[360px] rounded-[10px] overflow-hidden shadow-lg">
          {/* Base Image */}
          <Image
            src="/images/ads2.jpg"
            alt="Base Image"
            width={640}
            height={360}
            className="w-full h-full object-cover rounded-[10px]"
          />

          {/* Overlay Image */}
          <div className="absolute top-[232px] left-[187px]">
            <Image
              src="/images/CAR.svg"
              alt="Overlay Image"
              width={340}
              height={108}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-[284px] h-[224px]  gap-[20px] absolute top-[24px] left-[24px] flex flex-col justify-start  text-white z-10 ">
            <div className ="w-[284px] h-[160px] flex-col  flex gap-[16px] ">
            {/* Heading */}
           
            <h2 className="w-[272px] h-[96px] font-plusJakartaSans font-[600] text-[32px] leading-[48px] tracking-[-0.03rem]">
            Easy way to rent a car at a low price
            </h2>
           

            {/* Paragraph */}
            
            <p className="w-[284px] h-[48px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] text-justify tracking-[-0.02rem]">
            Providing cheap car rental services<br /> and safe and comfortable facilities.</p>
            
            </div>

            {/* Button */}
            <div className = "w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] bg-[#54A6FF] flex justify-center items-center">
            <button className="w-[80px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-center text-white rounded-[10px] ">
              Rental Car
            </button>
            </div>
          </div>
        </div>

      </div>





  {/* Wrapper for Pickup, Button, and Drop-off */}
<div className="flex items-center justify-between w-full mt-[32px]">
  {/* Pickup Section */}
  <div className="bg-background w-[582px] h-[132px] flex flex-col rounded-[10px] px-[16px] py-[12px]">
    {/* Radio Button */}
    <div className="flex items-center gap-[8px]">
      <div className="w-[16px] h-[16px] rounded-full flex justify-center items-center border border-[#3563E9] p-[4px]">
        <IoRadioButtonOnOutline className="w-[8px] h-[8px] text-[#3563E9]" />
      </div>
      <h1 className="font-plusJakartaSans font-[600] text-[16px] text-[#1A202C] leading-[24px]">
        Pick-Up
      </h1>
    </div>

    {/* Options: Location, Date, Time */}
    <div className="flex justify-between mt-[16px]">
      {/* Location */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Location
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your city</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>

      {/* Date */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Date
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your date</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>

      {/* Time */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Time
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your time</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>
    </div>
  </div>

  {/* Center Button */}
  <button className="bg-[#3563E9] w-[60px] h-[60px] rounded-[10px] flex items-center justify-center mx-[16px]">
    <HiArrowsUpDown className="w-[24px] h-[24px] text-background" />
  </button>

  {/* Drop-Off Section */}
  <div className="bg-background w-[582px] h-[132px] flex flex-col rounded-[10px] px-[16px] py-[12px]">
    {/* Radio Button */}
    <div className="flex items-center gap-[8px]">
      <div className="w-[16px] h-[16px] rounded-full flex justify-center items-center border border-[#3563E9] p-[4px]">
        <IoRadioButtonOnOutline className="w-[8px] h-[8px] text-[#3563E9]" />
      </div>
      <h1 className="font-plusJakartaSans font-[600] text-[16px] text-[#1A202C] leading-[24px]">
        Drop-Off
      </h1>
    </div>

    {/* Options: Location, Date, Time */}
    <div className="flex justify-between mt-[16px]">
      {/* Location */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Location
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your city</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>

      {/* Date */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Date
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your date</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>

      {/* Time */}
      <div className="min-w-[126px]">
        <h2 className="font-plusJakartaSans font-[700] text-[16px] text-[#1A202C] leading-[24px]">
          Time
        </h2>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <p className="text-[#6B7280]">Select your time</p>
          <FaChevronDown className="w-[14px] h-[14px] text-[#6B7280]" />
        </div>
      </div>
    </div>
  </div>
</div>


























 


 
 
   


       
    </section>
  )
}

export default Hero
