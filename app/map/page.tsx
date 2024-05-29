'use client'

import { Header } from '@/components/header'
import React, { useState } from 'react'

import Main from '@/assets/image/Main.png'
import Image from 'next/image'

import MapSvg1 from '@/components/svg/map_svg_1.svg'
import MapSvg2 from '@/components/svg/map_svg_2.svg'
import MapSvg3 from '@/components/svg/map_svg_3.svg'


const Map = () => {
  const [type, setType] = useState(1)

  return (
    <div>
      <Header />

      <div className='w-[100%] pt-[65px] flex h-[100vh]'>
        <div className='w-[100%] max-w-[420px] h-[100%] overflow-y-scroll rounded-t-[16px] flex flex-col gap-[25px] px-[15px] py-[13px]' style={{ boxShadow: '1px -1px 5px -1px rgba(0, 0, 0, 0.25)' }}>
          <div className='flex flex-col gap-[8px] items-center w-[100%]'>
            <div className='text-2xl'>Выберите тип помещения</div>
            <div className='flex items-center justify-between w-[100%]'>
              <div onClick={() => setType(1)} className={`${type === 1 ? 'active' : ''} type text-sm font-bold w-[100%] flex flex-col gap-[11px]`}>
                <div className={`type_text w-[100%] ml-[10px]`}>Склады</div>
                <div className={`type_line bg-[#CECECE] h-[2px] w-[100%]`}></div>
              </div>
              <div onClick={() => setType(2)} className={`${type === 2 ? 'active' : ''} type text-sm font-bold w-[100%] flex flex-col gap-[11px]`}>
                <div className={`type_text w-[100%] ml-[10px]`}>Жилое</div>
                <div className={`type_line bg-[#CECECE] h-[2px] w-[100%]`}></div>
              </div>
              <div onClick={() => setType(3)} className={`${type === 3 ? 'active' : ''} type text-sm font-bold w-[100%] flex flex-col gap-[11px]`}>
                <div className={`type_text w-[100%] ml-[10px]`}>Коммерческое</div>
                <div className={`type_line bg-[#CECECE] h-[2px] w-[100%]`}></div>
              </div>
              <div onClick={() => setType(4)} className={`${type === 4 ? 'active' : ''} type text-sm font-bold w-[100%] flex flex-col gap-[11px]`}>
                <div className={`type_text w-[100%] ml-[10px]`}> Апартаменты</div>
                <div className={`type_line bg-[#CECECE] h-[2px] w-[100%]`}></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[16px] w-[100%]'>
            <div className='w-[100%] flex flex-col gap-[7px]'>
              <Image src={Main} alt="" className='h-[191px]' />
              <div className='flex item-center gap-[10px] w-[100%] h-[91px]'>
                <div><Image src={Main} alt="" className='w-[100%] h-[100%]' /></div>
                <div><Image src={Main} alt="" className='w-[100%] h-[100%]' /></div>
                <div><Image src={Main} alt="" className='w-[100%] h-[100%]' /></div>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-[5px]'>
                  <div className='text-xl font-bold'>ЖК “Tifi”</div>
                  <div>Stars</div>
                </div>
                <div className='text-[20px] font-bold px-[23px] py-[10px] rounded-[15px] text-[white] cursor-pointer' style={{ background: 'linear-gradient(124.29deg, rgb(238, 138, 0) 8.352%,rgb(251, 160, 1) 94.204%)' }}>
                  Подробнее
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-[14px] text-[#7E7E7E]'>Кыргызстан, Бишкек</div>
                <div className='text-xl font-bold'>900$/месяц</div>
              </div>
            </div>
            <div className='flex flex-col gap-[22px]'>
              <div className='flex flex-col gap-[3px]'>
                <div className='text-[22px] font-bold'>Loreum</div>
                <div className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut mi lacus. Fusce vulputate diam in elit
                  scelerisque, quis consectetur libero condimentum.
                  Vestibulum nulla tortor</div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[5px]'>
                  <Image src={MapSvg1} alt="" />
                  <div className='text-[22px] font-bold text-[#F08C00]'>1</div>
                </div>
                <div className='flex items-center gap-[5px]'>
                  <Image src={MapSvg2} alt="" />
                  <div className='text-[22px] font-bold text-[#F08C00]'>67</div>
                </div>
                <div className='flex items-center gap-[5px]'>
                  <Image src={MapSvg3} alt="" />
                  <div className='text-[22px] font-bold text-[#F08C00]'>1</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[17px]'>
              <div className='font-bold text-[22px]'>Отзывы</div>
              <div className='flex gap-[14px]'>
                <div className='w-[56px] h-[56px]'>
                  <Image src={Main} alt="" className='w-[100%] h-[100%]  rounded-[100%]' />
                </div>
                <div className='w-[80%] text-[14px] italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut mi lacus. Fusce vulputate diam in elit scelerisque, quis consectetur libero condimentum</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] h-[100%] flex flex-col'>
          <div className='py-[12px] px-[24px] flex items-center gap-[19px]'>
            <div className='h-[47px] bg-[#F08C00] w-[100%] max-w-[255px] rounded-[6px]'></div>
            <div className='h-[47px] bg-[#F08C00] w-[100%] max-w-[255px] rounded-[6px]'></div>
            <div className='h-[47px] bg-[#F08C00] w-[100%] max-w-[255px] rounded-[6px]'></div>
          </div>

          <div className='h-[100%] bg-[grey] opacity-[0.4] flex items-center justify-center'>
            <h1 className='text-[44px]'>Map</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map