import React from 'react'
import { IoHeart } from "react-icons/io5";


const Card = () => {
  return (
    <div className='bg-background w-[304px] h-[388px] rounded-[10px]'>

        {/* Header */}
        <div className ='min-w-[128px] min-h-[48px] gap-[4px]'>
            <h1 className='w-[128px] h-[24px] font-plusJakartaSans font-[700] text-[20px] leading-[30px] tracking-[-0.03rem] text-[#1A202C]'>Koenigsegg'</h1>
            <p className='w-[128px] h-[20px] font-plusJakartaSans font-[700] text-[14px] leading-[21px] tracking-[-0.02rem] text-[#90A3BF]'>Sport</p>
            {/* icon */}
            <IoHeart className='w-[24px] h-[24px] text-[#3D3F3F] ' />

        </div>
      
    </div>
  )
}

export default Card
