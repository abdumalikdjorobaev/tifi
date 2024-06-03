
// 'use client'

import { ButtonSecondary, ButtonThirdly } from '@/components/buttons'
import { Header } from '@/components/header'
import React from 'react'

import Home from '@/components/svg/home.svg'
import Buildings from '@/components/svg/buildings.svg'
import Plan from '@/components/svg/plan.svg'
import CreditLogo from '@/components/svg/credit_icon_logo.svg'
import Message from '@/components/svg/message.svg'
import Galochka from '@/components/svg/galochka.svg'
import Reset from '@/components/svg/reset.svg'
import HeartGrey from '@/components/svg/heartgrey.svg'
import Share from '@/components/svg/share.svg'

import Main from '@/assets/image/Main.png'

import Image from 'next/image'
import { QuestionForm } from '@/components/questionform'
import { ApartmentItem, CharacterItem, DocumentItem, HouseModelItem, HouseNewsItem, NewBuildingsPrimaryCard } from '@/components/cards'
import { CharacterDatas } from '@/components/datas'

const NewBuilding = () => {
  return (
    <div>
      <Header />

      <div className='pt-[100px] pb-[132px]'>
        <div className='container'>
          <div className='flex flex-col gap-[50px]'>
            <div className='flex flex-col gap-[38px]'>
              <div className='flex items-center justify-center gap-[27px]'>
                <ButtonSecondary onClick={() => {}} img={Home} title='О проекте' />
                <ButtonSecondary onClick={() => {}} img={Buildings} title='Документы' />
                <ButtonSecondary onClick={() => {}} img={Plan} title='Планировки' />
                <ButtonSecondary onClick={() => {}} img={Buildings} title='Обзор 360°' />
                <ButtonSecondary onClick={() => {}} img={Buildings} title='Новости строительства' />
              </div>
              <div className='flex items-end w-[100%] gap-[30px]'>
                <div className='w-[100%] max-w-[350px] h-[100%] gap-[35px] flex flex-col'>
                  <div className='flex flex-col gap-[24px]'>
                    <div className='flex flex-col gap-[7px]'>
                      <div className='text-3xl'>Клубный дом <h1 className='font-bold'>OLEGIVSKIY</h1></div>

                      <div className='flex items-center gap-[17px]'>
                        <div className='text-base text-[#282828]'>Бишкек</div>
                        <div className='text-base text-[#282828]'>Первомайский район</div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-[22px]'>
                      <div className='flex flex-col gap-[20px]'>
                        <div className='bg-[#EDEDED] w-[100%] rounded-[8px]'>
                          <div className='px-[16px] py-[10px] flex flex-col gap-[5px]'>
                            <div className='text-[#000000D6] text-sm'>Официальный сайт</div>
                            <div className='text-base'>olegivskiy.dim-bud.ua</div>
                          </div>
                        </div>
                        <div className='bg-[#EDEDED] w-[100%] rounded-[8px]'>
                          <div className='px-[16px] py-[10px] flex flex-col gap-[5px]'>
                            <div className='text-[#000000D6] text-sm'>Отдел продаж</div>
                            <div className='text-base'>+996 555 123 123</div>
                          </div>
                        </div>
                        <div className='bg-[#FF9800] w-[100%] px-[16px] py-[12px] flex justify-between items-center rounded-[8px]'>
                          <div className='text-base text-[white]'>Связаться с застройщиком</div>
                          <div className='w-[36px] h-[36px] bg-[#FFFFFF] flex items-center justify-center rounded-[10px]'>
                            <Image src={Message} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className='bg-[#FF9800] w-[100%] px-[16px] py-[12px] flex justify-between items-center rounded-[8px] cursor-pointer'>
                        <div className='text-base text-[white]'>Компания Застройщик</div>
                        <Image src={CreditLogo} alt="" className='h-[54px]  w-[130px]' />
                      </div>
                    </div>
                  </div>

                  <div className='dashed p-[16px]'>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='text-base flex items-center gap-[8px]'><Image src={Galochka} alt="" /> Продажи открыты</div>
                      <div className='w-[100%] h-[1px] bg-[#0000001A]'></div>
                      <div className='text-base flex items-center gap-[8px]'><Image src={Reset} alt="" /> Строится</div>
                    </div>
                  </div>
                </div>
                <div className='w-[100%] border h-[572px] relative'>
                  <div className='absolute right-[10px] bottom-[10px] px-[30px] bg-[white] rounded-[8px] text-sm cursor-pointer'>Смотреть 3D тур</div>

                  <div className='flex items-center gap-[15px] absolute right-[10px] top-[10px]'>
                    <div className='w-[30px] h-[30px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={Share} alt="" /></div>
                    <div className='w-[30px] h-[30px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={HeartGrey} alt="" /></div>
                  </div>
                  <Image src={Main} alt="" className='object-cover w-[100%] h-[100%]' />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[20px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='text-3xl text-[#282828]'>Характеристики проекта</div>
                <div className='text-sm text-[#00000080]'>Здесь собраны основные характеристики проекта</div>
              </div>

              <div className='flex grid grid-cols-3 gap-y-[48px] pl-[13px]'>
                {CharacterDatas.map((item, index) => <CharacterItem key={index} item={item} />)}
              </div>
            </div>

            <div className='flex flex-col gap-[50px]'>
              <div className='flex flex-col gap-[20px]'>
                <div className='text-3xl text-[#282828]'>Документы на Клубный дом OLEGIVSKIY</div>
                <div className='text-sm text-[#00000080]'>Информация актуальна на сентябрь 2022 года. Все документы размещены из открытых государственных реестров, которые в настоящее время не работают в штатном режиме</div>
              </div>

              <div className='flex justify-between items-center w-[100%] max-w-[1013px] mx-[auto]'>
                <DocumentItem />
                <DocumentItem />
                <DocumentItem />
              </div>
            </div>

            <div className='flex flex-col gap-[43px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='text-3xl text-[#282828]'>Планировки квартир</div>
              </div>

              <div className='flex flex-col gap-[50px] w-[100%] max-w-[1013px] mx-[auto]'>
                <div className='flex justify-between items-center '>
                  <ApartmentItem />
                  <ApartmentItem />
                  <ApartmentItem />
                </div>

                <div className='flex flex-col gap-[8px]'>
                  <div>Особенности</div>
                  <div className='flex items-center gap-[7px]'>
                    <ButtonThirdly title='Терраса' />
                    <ButtonThirdly title='Балкон' />
                    <ButtonThirdly title='Панорамные окна' />
                    <ButtonThirdly title='Гардероб' />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-[45px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='text-3xl text-[#282828]'>2-комнатные квартиры</div>
              </div>

              <div className='flex flex-wrap justify-between gap-y-[45px]'>
                <HouseModelItem />
                <HouseModelItem />
                <HouseModelItem />
                <HouseModelItem />
                <HouseModelItem />
                <HouseModelItem />
              </div>
            </div>

            <div className='flex flex-col gap-[50px]'>
              <div className='flex flex-col gap-[8px]'>
                <div className='text-3xl text-[#282828]'>3D тур по объекту</div>
              </div>

              <div className='w-[100%] h-[584px] border'>
                <Image src={Main} alt="" className='object-cover w-[100%] h-[100%]' />

              </div>
            </div>


            <div className='flex flex-col gap-[40px]'>
              <div className='flex flex-col gap-[20px] pl-[26px]'>
                <div className='text-3xl text-[#282828]'>Новости строительства</div>
                <div className='text-sm text-[#00000080]'>Здесь мы публикуем отчеты по этапам строительства объекта</div>
              </div>

              <div className='flex grid grid-cols-4 gap-y-[48px] gap-x-[18px] '>
                  <HouseNewsItem/>
                  <HouseNewsItem/>
                  <HouseNewsItem/>
                  <HouseNewsItem/>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-[70px] pb-[60px]'>
          <QuestionForm con_none={true} />
        </div>

        <div className='container'>
          <div className='flex flex-col gap-[45px]'>
            <div className='flex flex-col gap-[18px]'>
              <div className='text-3xl text-[#282828]'>Рекомендации</div>
              <div className='flex items-center gap-[20px]'>
                <div className='px-[16px] py-[4px] bg-[#EDEDED] rounded-[8px]'>Ещё от ELITE HOUSE</div>
                <div className='px-[16px] py-[4px] bg-[#EDEDED] rounded-[8px]'>Ещё от ELITE HOUSE</div>
              </div>
            </div>

            <div className='flex grid grid-cols-4 gap-y-[48px]'>
              <NewBuildingsPrimaryCard />
              <NewBuildingsPrimaryCard />
              <NewBuildingsPrimaryCard />
              <NewBuildingsPrimaryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewBuilding
