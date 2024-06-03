'use client'
import { Header } from '@/components/header'
import React, { useState } from 'react'

import Home from '@/components/svg/home.svg'
import Plan from '@/components/svg/plan.svg'
import Buildings from '@/components/svg/buildings.svg'
import { ButtonSecondary } from '@/components/buttons'
import Main from '@/assets/image/Main.png'
import Image from 'next/image'

import HeartGrey from '@/components/svg/heartgrey.svg'
import Share from '@/components/svg/share.svg'
import RightArrow from '@/components/svg/right-arrow.svg'
import CreditLogo from '@/components/svg/credit_icon_logo.svg'
import { HouseModelItem, NewBuildingsPrimaryCard } from '@/components/cards'
import { Chat } from '@/components/chat'

const MyTifi = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <Header />

      <div className='pb-[77px]'>
        <div className='container'>
          <div className='flex items-center gap-[28px] pt-[90px] justify-center'>
            <ButtonSecondary onClick={() => {}} img={Home} title='Избранное' />
            <ButtonSecondary onClick={() => {}} img={Plan} title='Планировки' />
            <ButtonSecondary onClick={() => {
              setModal(true)
            }} img={Buildings} title='Сообщения' />
          </div>

          <div className='w-[100%] max-w-[980px] h-[135px] rounded-[15px] mt-[40px] ml-[40px]' style={{ background: 'linear-gradient(135.56deg, rgb(252, 132, 24) -2.102%,rgb(251, 164, 55) 99.248%)' }}>

          </div>

          <div className='pt-[60px] flex flex-col gap-[40px]'>
            <div className='text-3xl'>Просмотренные проекты</div>
            <div className='flex items-center gap-[26px]'>
              <div className='w-[100%] max-w-[352px] h-[260px] rounded-[15px] relative'>
                <div className='absolute top-[13px] left-[12px] right-[12px] flex justify-between items-center'>
                  <div className='py-[4px] px-[8px] bg-[#00BE71] rounded-[4px] text-[#FFFFFF] text-sm'>Рассрочка под 0%</div>
                  <div className='w-[28px] h-[28px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={HeartGrey} alt="" /></div>
                </div>
                <Image src={Main} alt="" className='h-[100%] rounded-[15px]' />
              </div>
              <div className='w-[100%] max-w-[352px] h-[260px] rounded-[15px] relative'>
                <div className='absolute top-[13px] left-[12px] right-[12px] flex justify-between items-center'>
                  <div className='py-[4px] px-[8px] bg-[#00BE71] rounded-[4px] text-[#FFFFFF] text-sm'>Рассрочка под 0%</div>
                  <div className='w-[28px] h-[28px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={HeartGrey} alt="" /></div>
                </div>
                <Image src={Main} alt="" className='h-[100%] rounded-[15px]' />
              </div>
              <div className='w-[100%] max-w-[352px] h-[260px] rounded-[15px] relative'>
                <div className='absolute top-[13px] left-[12px] right-[12px] flex justify-between items-center'>
                  <div className='py-[4px] px-[8px] bg-[#00BE71] rounded-[4px] text-[#FFFFFF] text-sm'>Рассрочка под 0%</div>
                  <div className='w-[28px] h-[28px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={HeartGrey} alt="" /></div>
                </div>
                <Image src={Main} alt="" className='h-[100%] rounded-[15px]' />
              </div>
            </div>
          </div>

          <div className='w-[100%] max-w-[980px] h-[135px] rounded-[15px] mt-[100px] ml-[40px]' style={{ background: 'linear-gradient(135.56deg, rgb(252, 132, 24) -2.102%,rgb(251, 164, 55) 99.248%)' }}>

          </div>

          <div className='mt-[90px] flex flex-col gap-[50px]'>
            <div>
              <div className='h-[83px] w-[100%] max-w-[331px] rounded-[8px] bg-[#FF9800] flex items-center justify-between px-[16px]'>
                <Image src={CreditLogo} alt="" className='w-[130px] h-[54px]' />
                <div className='w-[82px] h-[24px] bg-[#EDEDED] rounded-[8px] flex items-center gap-[8px] justify-center cursor-pointer'>2 ЖК <Image src={RightArrow} alt="" /></div>
              </div>
              <div className='flex items-center justify-between pt-[35px]'>
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
              </div>
            </div>

            <div>
              <div className='h-[83px] w-[100%] max-w-[331px] rounded-[8px] bg-[#FF9800] flex items-center justify-between px-[16px]'>
                <Image src={CreditLogo} alt="" className='w-[130px] h-[54px]' />
                <div className='w-[82px] h-[24px] bg-[#EDEDED] rounded-[8px] flex items-center gap-[8px] justify-center cursor-pointer'>2 ЖК <Image src={RightArrow} alt="" /></div>
              </div>
              <div className='flex items-center justify-between pt-[35px]'>
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[50px] mt-[50px] '>
            <div className='text-[32px]'>Планировки квартир</div>
            <div className='flex flex-wrap justify-between gap-y-[45px]'>
              <HouseModelItem />
              <HouseModelItem />
              <HouseModelItem />
            </div>
          </div>
        </div>
      </div>

      <Chat active={modal} setActive={setModal} />
    </div>
  )
}

export default MyTifi