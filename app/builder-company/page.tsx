import { BuilderCompanyItem, NewBuildingsSecondaryCard } from '@/components/cards'
import { Header } from '@/components/header'
import React from 'react'

const BuilderCompany = () => {
  return (
    <div className=''>
      <Header />

      <div className='pt-[125px] pb-[94px]'>
        <div className='container'>
          <div className='flex flex-col gap-[60px]'>
            <div className='w-[100%] h-[135px] rounded-[15px]' style={{ background: 'linear-gradient(135.56deg, rgb(230, 144, 42) -0.166%,rgb(236, 165, 81) 99.248%)' }}>

            </div>
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[16px]'>
                  <div className='text-[32px]'>Застройщики Бишкека</div>
                  <div className='flex items-center gap-[8px] px-[12px] bg-[#EDEDED] rounded-[8px] cursor-pointer'>По умолчанию <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                      Created with Pixso.
                    </desc>
                    <defs>
                      <clipPath id="clip1437_1286">
                        <rect id="Frame" width="20.000000" height="20.000000" fill="white" fill-opacity="0" />
                      </clipPath>
                    </defs>
                    <rect id="Frame" width="20.000000" height="20.000000" fill="#FFFFFF" fill-opacity="0" />
                    <g clip-path="url(#clip1437_1286)">
                      <path id="Vector" d="M2.5 5L2.5 6.66L17.5 6.66L17.5 5L2.5 5ZM2.5 15L7.5 15L7.5 13.33L2.5 13.33L2.5 15ZM12.5 10.83L2.5 10.83L2.5 9.16L12.5 9.16L12.5 10.83Z" fill="#505050" fill-opacity="1.000000" fill-rule="evenodd" />
                    </g>
                  </svg>
                  </div>
                </div>
                <div className='text-[15px] text-[#00000080]'>Строительные компании Бишкека</div>
              </div>
             <div className='flex flex-col gap-[41px]'>
             <div className='flex flex-col gap-[48px]'>
                <div className='flex gap-[40px] items-center'>
                  <div className='w-[50%]'><NewBuildingsSecondaryCard /></div>
                  <div className='w-[50%] flex flex-col gap-[7px]'>
                    <div className='text-[32px] font-semibold text-[#E6902A]'>О компании</div>
                    <div className='text-[16px] text-[#00000080]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor erat eu magna fringilla commodo. Vivamus feugiat faucibus sem, vitae pharetra arcu fringilla in. Pellentesque hendrerit elementum erat, at venenatis ante tristique nec. Suspendisse mattis dui sed ultricies sollicitudin.
                    </div>
                  </div>
                </div>
                <div className='flex gap-[16px] items-center'>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                </div>
              </div>

              <div className='flex flex-col gap-[48px]'>
                <div className='flex gap-[40px] items-center'>
                  <div className='w-[50%]'><NewBuildingsSecondaryCard /></div>
                  <div className='w-[50%] flex flex-col gap-[7px]'>
                    <div className='text-[32px] font-semibold text-[#E6902A]'>О компании</div>
                    <div className='text-[16px] text-[#00000080]'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor erat eu magna fringilla commodo. Vivamus feugiat faucibus sem, vitae pharetra arcu fringilla in. Pellentesque hendrerit elementum erat, at venenatis ante tristique nec. Suspendisse mattis dui sed ultricies sollicitudin.
                    </div>
                  </div>
                </div>
                <div className='flex gap-[16px] items-center'>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                  <BuilderCompanyItem/>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuilderCompany