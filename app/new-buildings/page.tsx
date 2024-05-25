import { Header } from '@/components/header'
import React from 'react'

import RightArrow from '@/components/svg/right-arrow.svg'
import Image from 'next/image'
import { NewBuildingsPrimaryCard, NewBuildingsSecondaryCard } from '@/components/cards'

const NewBuildings = () => {
  return (
    <div className='new-buildings'>
      <Header />
      <div className='new-buildings__main-background'>
        <div className='container'>
          <div className='pt-[94px] flex flex-col gap-[50px]'>
            <div className='new-buildings_sliderbg w-[100%] h-[300px]'>

            </div>

            <div className='flex flex-col gap-[35px]'>
              <div className='flex items-center gap-[22px]'>
                <div className='text-2xl  '>Новостройки Бишкека</div>
                <div className='w-[82px] h-[24px] bg-[#EDEDED] rounded-[8px] flex items-center gap-[8px] justify-center cursor-pointer'>384 <Image src={RightArrow} alt="" /></div>
              </div>

              <div className='flex grid grid-cols-4 grid-rows-2 gap-[25px]'>
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
              </div>
            </div>
            <div className='flex flex-col gap-[35px]'>
              <div className='flex items-center gap-[22px]'>
                <div className='text-2xl  '>Коттеджные городки</div>
                <div className='w-[82px] h-[24px] bg-[#EDEDED] rounded-[8px] flex items-center gap-[8px] justify-center cursor-pointer'>384 <Image src={RightArrow} alt="" /></div>
              </div>

              <div className='flex grid grid-cols-4 grid-rows-1 gap-[25px]'>
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />
                <NewBuildingsPrimaryCard />


                <div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[35px]'>
              <div className='flex items-center gap-[22px]'>
                <div className='text-2xl  '>Застройщики</div>
                <div className='w-[82px] h-[24px] bg-[#EDEDED] rounded-[8px] flex items-center gap-[8px] justify-center cursor-pointer'>384 <Image src={RightArrow} alt="" /></div>
              </div>

              <div className='flex grid grid-cols-2 grid-rows-2 gap-x-[25px] gap-y-[40px]'>
                <NewBuildingsSecondaryCard />
                <NewBuildingsSecondaryCard />
                <NewBuildingsSecondaryCard />
                <NewBuildingsSecondaryCard />
                <div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default NewBuildings