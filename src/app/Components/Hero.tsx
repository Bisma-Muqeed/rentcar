
import Image from 'next/image'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoHeart } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";




 

  
  
const Hero = () => {
  return (
    <div className='bg-[#F6F7F9] w-[1440px] h-[2120px]'>
    <div>
    
    <div className="  flex flex-col  justify-between items-between px-[64px]">
  {/* Card with Image and Content (Left) */}
  <div className='flex flex-row  items-center mt-[32px]' >
  <div className="relative w-[640px] h-[360px] rounded-[10px] mr-[32px] overflow-hidden shadow-lg">
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
    <div className="min-w-[284px] min-h-[224px] gap-[20px] absolute top-[24px] left-[24px] flex flex-col justify-start text-white z-10 ">
      <div className="min-w-[284px] min-h-[160px] flex-col flex gap-[16px] ">
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
      <div className="w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] bg-[#3563E9] flex justify-center items-center">
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
    <div className="w-[284px] h-[224px] gap-[20px] absolute top-[24px] left-[24px] flex flex-col justify-start text-white z-10 ">
      <div className="w-[284px] h-[160px] flex-col flex gap-[16px] ">
        {/* Heading */}
        <h2 className="w-[272px] h-[96px] font-plusJakartaSans font-[600] text-[32px] leading-[48px] tracking-[-0.03rem]">
          Easy way to rent a car at a low price
        </h2>

        {/* Paragraph */}
        <p className="w-[284px] h-[48px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] text-justify tracking-[-0.02rem]">
          Providing cheap car rental services <br /> and safe and comfortable facilities.
        </p>
      </div>

      {/* Button */}
      <div className="w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] bg-[#54A6FF] flex justify-center items-center">
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

</div>

</div>








<section>
<div className="w-[1440px] px-[64px] mt-[36px] ">
    <div className="w-[1312px] h-[452px] gap-[20px]">
      {/* text */}
      <div className="w-[1312px] h-[44px] gap-[1070px] flex justify-between items-center">
        <div className="w-[132px] h-[44px] gap-[8px] px-[20px]" >
        <p className='w-[92px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[20.16px] text-center text-[#90A3BF]'>Popular Car</p>
        </div>
        <div className="w-[104px] h-[44px] gap-[8px] px-[20px]" >
        <p className='w-[64px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[20.16px] text-center text-[#3563E9]'>View All</p>
        </div>
      </div> 
      {/* Cards */}
      <div className="w-[1312px] h-[388px] flex justify-between gap-[32px] ">
      
    {/* // card 1
    // ........ */}
    <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
      {/* Header */}
      <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
        <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          Koenigsegg
        </h1>
        <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          Sport
        </p>
      </div>

      {/* Icon */}
      <div className="absolute top-[24px] left-[256px]">
        <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />
      </div>

      {/* Car Image */}
      <Image
        className="absolute top-[136px] left-[36px]"
        src="/images/card1.svg"
        alt="car"
        width={232}
        height={72}
      />

      {/* Fuel Icons Section */}
      <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
        {/* Fuel Section */}
        <div className="flex items-center gap-[8px]">
          <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            90L
          </p>
        </div>
        
        {/* Steering Section */}
        <div className="flex items-center gap-[8px]">
          <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            Manual
          </p>
        </div>

        {/* People Section */}
        <div className="flex items-end gap-[8px]">
          <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            2 People
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="absolute bottom-[24px] left-[24px]">
        <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
          <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
            $99.00/
            <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
              day
            </span>{" "}
          </h1>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[24px] right-[24px]">
        <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
          <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    {/* // ...............
    // card 2
    // ........ */}
    <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
      {/* Header */}
      <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
        <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
        Nissan GT - R
        </h1>
        <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          Sport
        </p>
      </div>

      {/* Icon */}
      <div className="absolute top-[24px] left-[256px]">
      <FaRegHeart 
      className="w-[24px] h-[24px] text-[#90A3BF]" />
      </div>

      {/* Car Image */}
      <Image
        className="absolute top-[136px] left-[42px]"
        src="/images/card2.svg"
        alt="car"
        width={204}
        height={64}
      />

      {/* Fuel Icons Section */}
      <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
        {/* Fuel Section */}
        <div className="flex items-center gap-[8px]">
          <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            80L
          </p>
        </div>
        
        {/* Steering Section */}
        <div className="flex items-center gap-[8px]">
          <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            Manual
          </p>
        </div>

        {/* People Section */}
        <div className="flex items-end gap-[8px]">
          <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            2 People
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="absolute bottom-[24px] left-[24px]">
        <div className="min-w-[128px] h-[48px] gap-[4px] flex flex-col items-start">
          <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
            $80.00/
            <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
              day
            </span>{" "}
          </h1>
          <p className=" w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF] line-through">$100.00</p>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[24px] right-[24px]">
        <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
          <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    {/* // ...............

     {/* // card 3
    // ........ */}
    <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
      {/* Header */}
      <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
        <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
        Rolls - Royce
        </h1>
        <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
        Sedan
        </p>
      </div>

      {/* Icon */}
      <div className="absolute top-[24px] left-[256px]">
        <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />
      </div>

      {/* Car Image */}
      <Image
        className="absolute top-[136px] left-[42px]"
        src="/images/card3.svg"
        alt="car"
        width={220}
        height={68}
      />

      {/* Fuel Icons Section */}
      <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
        {/* Fuel Section */}
        <div className="flex items-center gap-[8px]">
          <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            70L
          </p>
        </div>
        
        {/* Steering Section */}
        <div className="flex items-center gap-[8px]">
          <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            Manual
          </p>
        </div>

        {/* People Section */}
        <div className="flex items-end gap-[8px]">
          <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            4 People
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="absolute bottom-[24px] left-[24px]">
        <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
          <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
            $96.00/
            <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
              day
            </span>{" "}
          </h1>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[24px] right-[24px]">
        <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
          <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    {/* // card 4
    // ........ */} 
    <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
      {/* Header */}
      <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
        <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
        Nissan GT - R
        </h1>
        <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          Sport
        </p>
      </div>

      {/* Icon */}
      <div className="absolute top-[24px] left-[256px]">
      <FaRegHeart 
      className="w-[24px] h-[24px] text-[#90A3BF]" />     
       </div>

      {/* Car Image */}
      <Image
        className="absolute top-[136px] left-[42px]"
        src="/images/card2.svg"
        alt="car"
        width={204}
        height={64}
      />

      {/* Fuel Icons Section */}
      <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
        {/* Fuel Section */}
        <div className="flex items-center gap-[8px]">
          <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            80L
          </p>
        </div>
        
        {/* Steering Section */}
        <div className="flex items-center gap-[8px]">
          <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            Manual
          </p>
        </div>

        {/* People Section */}
        <div className="flex items-end gap-[8px]">
          <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
          <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
            2 People
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="absolute bottom-[24px] left-[24px]">
        <div className="min-w-[116px] h-[44px] gap-[4px] flex flex-col items-start">
          <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
            $80.00/
            <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
              day
            </span>{" "}
          </h1>
          <p className=" w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF] line-through">$100.00</p>
        </div>
      </div>

      {/* Button */}
      <div className="absolute bottom-[24px] right-[24px]">
        <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
          <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
            Rental Car
          </button>
        </div>
      </div>
    </div>
    {/* // ............... */}


    </div>
    </div>
    </div>


{/* recomendation */}
<div className="w-[1312px] h-[872px] flex flex-col items-between justify-between mt-[32px] gap-[20px] px-[64px] ">
<div className ="w-[196px] h-[44px] px-[20px] gap-[8px]">
  <p className = "w-[156px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[20.16px] text-center text-[#90A3BF]">Recomendation Car</p>
</div>

 {/* Cards */}
 <div className="w-[1312px] h-[388px] flex justify-between gap-[32px] ">
      
      {/* // card 1
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          All New Rush
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <FaRegHeart 
        className="w-[24px] h-[24px] text-[#90A3BF]" />
        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[136px] left-[36px]"
          src="/images/card5.svg"
          alt="car"
          width={224}
          height={100}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              70L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex flex-col items-start">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $72.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
            <p className=" w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF] line-through">$80.00</p>
            
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ...............
      // card 2
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          CR  - V
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />

        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[136px] left-[36px]"
          src="/images/card6.svg"
          alt="car"
          width={248}
          height={100}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              80L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $80.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ...............
  
       {/* // card 3
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[140px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          All New Terios
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <FaRegHeart 
        className="w-[24px] h-[24px] text-[#90A3BF]" />
        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[136px] left-[36px]"
          src="/images/card7.svg"
          alt="car"
          width={224}
          height={100}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              90L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $74.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // card 4
      // ........ */} 
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          CR  - V
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />
   
         </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[136px] left-[36px]"
          src="/images/card8.svg"
          alt="car"
          width={248}
          height={100}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              80L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $80.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ............... */}

  </div>
  

  {/* second row */}
  {/* Cards */}
 <div className="w-[1312px] h-[388px] flex justify-between gap-[32px] ">
      
      {/* // card 1
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[160px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          MG ZX Exclusice
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          Hatchback
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
          <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />
        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[118px] left-[24px]"
          src="/images/card9.svg"
          alt="car"
          width={264}
          height={108}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              70L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              4 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex flex-col items-start">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $76.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
            <p className=" w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF] line-through">$80.00</p>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ...............
      // card 2
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          New MG ZS
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <FaRegHeart 
        className="w-[24px] h-[24px] text-[#90A3BF]" />
        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[116px] left-[8px]"
          src="/images/card10.svg"
          alt="car"
          width={288}
          height={112}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              80L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $80.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ...............
  
       {/* // card 3
      // ........ */}
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          MG ZX Excite
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          Hatchback
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
          <IoHeart className="w-[24px] h-[24px] text-[#ED3F3F]" />
        </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[118px] left-[24px]"
          src="/images/card9.svg"
          alt="car"
          width={264}
          height={108}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              90L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              4 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $74.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // card 4
      // ........ */} 
      <div className="bg-background w-[304px] h-[388px] rounded-[10px] p-[24px] relative">
        {/* Header */}
        <div className="min-w-[128px] min-h-[48px] flex flex-col gap-[4px]">
          <h1 className="w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]">
          New MG ZS
          </h1>
          <p className="w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]">
          SUV
          </p>
        </div>
  
        {/* Icon */}
        <div className="absolute top-[24px] left-[256px]">
        <FaRegHeart 
        className="w-[24px] h-[24px] text-[#90A3BF]" />     
         </div>
  
        {/* Car Image */}
        <Image
          className="absolute top-[116px] left-[8px]"
          src="/images/card11.svg"
          alt="car"
          width={288}
          height={112}
        />
  
        {/* Fuel Icons Section */}
        <div className="absolute top-[272px] left-[24px] w-[256px] flex justify-between items-center">
          {/* Fuel Section */}
          <div className="flex items-center gap-[8px]">
            <BsFuelPumpFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              80L
            </p>
          </div>
          
          {/* Steering Section */}
          <div className="flex items-center gap-[8px]">
            <TbSteeringWheel className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              Manual
            </p>
          </div>
  
          {/* People Section */}
          <div className="flex items-end gap-[8px]">
            <BsPeopleFill className="w-[24px] h-[24px] text-[#90A3BF]" />
            <p className="font-plusJakartaSans font-[500] text-[#90A3BF] text-[14px] leading-[21px] tracking-[-0.02rem]">
              6 People
            </p>
          </div>
        </div>
  
        {/* Price Section */}
        <div className="absolute bottom-[24px] left-[24px]">
          <div className="min-w-[116px] h-[44px] gap-[4px] flex items-center">
            <h1 className="font-plusJakartaSans font-[700] text-[20px] leading-[25.2px] text-[#1A202C]">
              $80.00/
              <span className="font-plusJakartaSans font-[700] text-[14px] leading-[17.64px] text-[#90A3BF]">
                day
              </span>{" "}
            </h1>
          </div>
        </div>
  
        {/* Button */}
        <div className="absolute bottom-[24px] right-[24px]">
          <div className="w-[116px] h-[44px] rounded-[4px] bg-[#3563E9] flex justify-center items-center">
            <button className="font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-white">
              Rental Car
            </button>
          </div>
        </div>
      </div>
      {/* // ............... */}

  </div>
 
</div>
</section>



<div className = 'min-w-[734px] min-h-[44px] flex mt-[64px] items-center justify-end gap-[438px] px-[64px]'>
    {/* Button */}
    <div className="w-[156px] h-[44px] rounded-[4px] px-[20px] gap-[8px] bg-[#3563E9] flex justify-center items-center">
        <button className="w-[116px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-center text-white  ">
        Show more car
        </button>
      </div>
      <p className="w-[140px] h-[24px] font-plusJakartaSans font-[500] text-[14px] leading-[21px] tracking-[-0.02rem] text-right text-[#90A3BF]">120 Car</p>

</div>
</div>

  )
}

export default Hero
