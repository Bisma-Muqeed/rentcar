import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1440px] h-[480px] bg-background flex flex-col  justify-evenly pl-[60px] '>
        <div className = "w-[1320px] h-[244px] flex justify-between  mt-[36px]">
        <div className='min-w-[292px] min-h-[108px] flex flex-col gap-[16px]'>
            <h1 className='w-[148px] h-[44px] font-plusJakartaSans font-[700] text-[32px] leading-[48px] tracking-[-0.03rem] text-left text-[#3563E9]'>MORENT</h1>
            <p className = "w-[292px] h-[48px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] tracking-[-0.02rem] text-left text-[rgba(19,19,19,0.6)]">Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        {/* boxes */}
        <div className = "w-[576px] h-[244px] flex justify-between ">
            {/* 1 box */}
            <div className='w-[152px] h-[244px] flex flex-col gap-[24px]'>
                {/* heading */}
                <h1 className = "w-[152px] h-[32px] font-plusJakartaSans font-[600] text-[20px] leading-[30px] tracking-[-0.02rem] text-left     text-[#1A202c]">About</h1>
                <ul className = 'w-[152px] h-[188px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] tracking-[-0.02rem] text-left text-[rgba(19,19,19,0.6)] flex flex-col gap-[16px] justify-around'>
                    <li>How it works</li>
                    <li>Featured</li>
                    <li>Partnership</li>
                    <li>Bussiness Relation</li>
                </ul>
            </div>
            {/* 2nd box */}
            <div className='w-[152px] h-[244px] flex flex-col gap-[24px]'>
                {/* heading */}
                <h1 className = "w-[152px] h-[32px] font-plusJakartaSans font-[600] text-[20px] leading-[30px] tracking-[-0.02rem] text-left     text-[#1A202c]">Community</h1>
                <ul className = 'w-[152px] h-[188px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] tracking-[-0.02rem] text-left text-[rgba(19,19,19,0.6)] flex flex-col gap-[16px] justify-around'>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Podcast</li>
                    <li>Invite a friend</li>
                </ul>
            </div>
            {/* 3rd box */}
            <div className='w-[152px] h-[244px] flex flex-col gap-[24px]'>
                {/* heading */}
                <h1 className = "w-[152px] h-[32px] font-plusJakartaSans font-[600] text-[20px] leading-[30px] tracking-[-0.02rem] text-left text-[#1A202c]">Socials</h1>
                <ul className = 'w-[152px] h-[188px] font-plusJakartaSans font-[500] text-[16px] leading-[24px] tracking-[-0.02rem] text-left text-[rgba(19,19,19,0.6)] flex flex-col gap-[16px] justify-around'>
                    <li>Discord</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
        </div>
        <span className = "w-[1320px] border border--[rgba(19,19,19,0.6)]  flex rotate-180" ></span>
        <div className = "w-[1320px] h-[24px] flex justify-between items-center ">
            <p className = " w-[292px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-left text-[#1A202C]">&#169; 2022 MORENT. All rights reserved</p>
            <div className = "w-[358px] h-[24px] flex justify-between" >
                <p className = 'w-[144px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-right text-[#1A202C] '>Privacy & Policy</p>
                <p className = 'w-[144px] h-[24px] font-plusJakartaSans font-[600] text-[16px] leading-[24px] tracking-[-0.02rem] text-right text-[#1A202C]'>Terms & Condition</p>
</div>
        </div>
      
    </div>
  )
}

export default Footer
