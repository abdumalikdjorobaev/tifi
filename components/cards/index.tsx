'use client'

import React, { useState } from 'react'

import HomePrimaryCardPhoto from '@/assets/image/HomePrimaryCardImg.jpeg'
import Main from '@/assets/image/Main.png'

import CreditLogo from '@/components/svg/credit_icon_logo.svg'
import World from '@/components/svg/world.svg'
import Facebook from '@/components/svg/facebook.svg'
import Instagram from '@/components/svg/instagram.svg'
import Document from '@/components/svg/document.svg'
import Maket from '@/components/svg/maket.svg'


import Image from 'next/image'
import { RightArrow } from '../svg'
import Link from 'next/link'
import { ButtonSecondary } from '../buttons'
import MultiRangeSlider from '../multiRangeSlider'
import HeartGrey from '@/components/svg/heartgrey.svg'
import Share from '@/components/svg/share.svg'
import Reset from '@/components/svg/reset.svg'
import TopArrow from '@/components/svg/toparrow.svg'


export const HomePrimaryCard = () => {
    return (
        <div className='flex gap-[20px] w-[100%] h-[180px]'>
            <Image src={HomePrimaryCardPhoto} alt="" className='w-100 h-[100%] rounded-lg' />
            <div className='flex flex-col gap-[20px] justify-between h-[100%]'>
                <div className='flex flex-col gap-[8px]'>
                    <div className='text-2xl font-semibold text-[rgb(75,75,75)]'>ЖК “IK”</div>
                    <div className='text-sm  '>As one of the most-frequented spots in the home a living room sets the tone for the rest of the house.</div>
                </div>
                <Link href={'/new-buildings/1'} className='text-sm font-medium flex items-center gap-[10px] cursor-pointer'>Подробнее <RightArrow /></Link>
            </div>
        </div>
    )
}

interface HomeSecondaryCardProps {
    svg: any;
}

export const HomeSecondaryCard = ({ svg }: HomeSecondaryCardProps) => {
    return (
        <div className='shadow bg-[#F8F8F8] px-[42px] py-[40px] rounded-[28px] flex flex-col gap-[16px]'>
            {svg}
            <div className='text-2xl text-[rgb(61,50,105)]'>Lorem ipsum</div>
            <div className='text-lg text-[rgb(78,78,78)]'>Easily integrate with all your need favorite tools through and APIsing including automatic </div>
        </div>
    )
}

interface HomeBuilderCardProps {
    img?: any;
    bgcolor: any;
    humanbg: any;
    title?: any;
    describtion?: any;
}

export const HomeBuilderCard = ({ img, bgcolor, humanbg, title, describtion }: HomeBuilderCardProps) => {
    return (
        <div className={`h-[330px] rounded-[7px] relative`}>
            <div className='absolute left-[17px] top-[14px] z-[2]'>
                <div className='text-xs text-[white]'>{title}</div>
                <div className='text-base w-[70%] text-[white]'>{describtion}</div>
            </div>
            <div className='absolute right-0 bottom-[1px] z-[1]'>
                <Image src={humanbg} alt="" className='h-[100%] rounded-[7px]' />
            </div>
            <Image src={bgcolor} alt="" className='h-[100%] rounded-[7px]' />
        </div>
    )
}

export const NewBuildingsPrimaryCard = ({ }: any) => {
    return (
        <div className='w-[100%] max-w-[260px] flex flex-col gap-[14px] cursor-pointer relative'>
            <div className='flex items-center gap-[15px] absolute right-[13px] top-[11px]'>
                <div className='w-[28px] h-[28px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={Share} alt="" /></div>
                <div className='w-[28px] h-[28px] bg-[white] rounded-[8px] flex items-center justify-center cursor-pointer'><Image src={HeartGrey} alt="" /></div>
            </div>
            <Image src={Main} alt="" className='rounded-[15px] h-[190px]' />
            <div className='text-xl font-bold'>От 1.3 млн сом</div>
            <div>
                <div className='text-base   opacity-[0.5]'>Ул. Карла Маркса, 61</div>
                <div className='text-sm   text-[#E6902A]'>2 дома строится, 12 построено</div>
            </div>
        </div>
    )
}

export const NewBuildingsSecondaryCard = ({ }: any) => {
    return (
        <div className='w-[100%] h-[230px] new-buildings_sliderbg p-[32px]'>
            <div className='flex flex-col justify-between h-[100%]'>
                <div className='flex items-end justify-between text-lg   text-[white]'>
                    <Image src={CreditLogo} alt="" />
                    <div className='flex flex-col gap-[3px]'>
                        <div>Основана в 2014 году</div>
                        <div>22 домов сдано</div>
                        <div>4 домов в процессе</div>
                    </div>
                </div>

                <div className='flex justify-center gap-[40px] items-center'>
                    <Image src={World} alt="" className='cursor-pointer' />
                    <Image src={Facebook} alt="" className='cursor-pointer' />
                    <Image src={Instagram} alt="" className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export const CharacterItem = ({ item }: any) => {
    return (
        <div className='flex items-center gap-[16px]'>
            <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs>
                    <clipPath id="clip100_419">
                        <rect id="Frame" width="48.000000" height="48.000000" fill="white" fill-opacity="0" />
                    </clipPath>
                </defs>
                <rect id="Frame" width="48.000000" height="48.000000" fill="#FFFFFF" fill-opacity="0" />
                <g clip-path="url(#clip100_419)">
                    <path id="Vector" d="M18 5.07L41.07 5.07L41.07 43.84L18 43.84L18 5.07Z" fill="#FAB400" fill-opacity="1.000000" fill-rule="evenodd" />
                    <path id="Vector" d="M41.07 5.07L41.07 43.84L18 43.84L18 5.07L41.07 5.07Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="1.000000" />
                    <path id="Vector" d="M34.15 9.23L37.84 9.23L37.84 12.92L34.15 12.92L34.15 9.23ZM34.15 16.61L37.84 16.61L37.84 20.3L34.15 20.3L34.15 16.61ZM26.76 9.23L30.46 9.23L30.46 12.92L26.76 12.92L26.76 9.23Z" fill="#C8500A" fill-opacity="1.000000" fill-rule="evenodd" />
                    <path id="Vector" d="M24.92 36.92L28.61 36.92L28.61 44.3L24.92 44.3L24.92 36.92Z" fill="#0A0A28" fill-opacity="1.000000" fill-rule="evenodd" />
                    <path id="Vector" d="M45.58 45.23L2.41 45.23C1.51 45.23 0.92 44.86 0.92 44.3C0.92 43.75 1.51 43.38 2.41 43.38L45.58 43.38C46.48 43.38 47.07 43.75 47.07 44.3C47.07 44.86 46.48 45.23 45.58 45.23Z" fill="#0A0A28" fill-opacity="1.000000" fill-rule="nonzero" />
                    <path id="Vector" d="M13.38 35.53C17.97 35.53 21.69 32.02 21.69 27.69C21.69 23.35 17.97 19.84 13.38 19.84C8.79 19.84 5.07 23.35 5.07 27.69C5.07 32.02 8.79 35.53 13.38 35.53Z" fill="#FAB400" fill-opacity="1.000000" fill-rule="nonzero" />
                    <path id="Vector" d="M13.38 35.53C8.79 35.53 5.07 32.02 5.07 27.69C5.07 23.35 8.79 19.84 13.38 19.84C17.97 19.84 21.69 23.35 21.69 27.69C21.69 32.02 17.97 35.53 13.38 35.53Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="1.000000" />
                    <path id="Vector" d="M13.05 23.07L14.24 23.07L14.24 44.3L13.05 44.3L13.05 23.07Z" fill="#C8500A" fill-opacity="1.000000" fill-rule="evenodd" />
                    <path id="Vector" d="M13.07 27.2L8.3 24.72L8.3 25.82L13.07 28.3L13.07 27.2ZM14.24 31.61L19 29.13L19 30.23L14.24 32.71L14.24 31.61Z" fill="#C8500A" fill-opacity="1.000000" fill-rule="evenodd" />
                </g>
            </svg>

            <div>
                <div className='  text-base text-[#808080]'>{item?.label}</div>
                <div className='  text-base text-[#282828]'>{item?.title}</div>
            </div>
        </div>
    )
}

export const DocumentItem = ({ item }: any) => {
    return (
        <div className='rounded-[15px] border-[#E0E3EB] border-2 w-[100%] max-w-[304px]'>
            <div className='flex items-center gap-[16px] py-[8px] justify-center'>
                <svg width="35.599609" height="35.599976" viewBox="0 0 35.5996 35.6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs>
                        <clipPath id="clip100_709">
                            <rect id="Frame" width="35.599998" height="35.599998" fill="white" fill-opacity="0" />
                        </clipPath>
                    </defs>
                    <rect id="Frame" width="35.599998" height="35.599998" fill="#FFFFFF" fill-opacity="0" />
                    <g clip-path="url(#clip100_709)">
                        <path id="Vector" d="M10.73 5.49L31.15 5.49L31.15 30.1L10.73 30.1L10.73 5.49Z" fill="#FAB400" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M31.15 5.49L31.15 30.1L10.73 30.1L10.73 5.49L31.15 5.49Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="0.741667" />
                        <path id="Vector" d="M27.22 7.32L29.31 7.32L29.31 9.42L27.22 9.42L27.22 7.32ZM27.22 11.51L29.31 11.51L29.31 13.61L27.22 13.61L27.22 11.51ZM23.03 7.32L25.12 7.32L25.12 9.42L23.03 9.42L23.03 7.32Z" fill="#C8500A" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M4.73 29.31C4.64 28.1 4.81 26.89 5.21 25.75C5.62 24.61 6.26 23.56 7.08 22.67C7.91 21.79 8.91 21.08 10.02 20.6C11.13 20.12 12.33 19.87 13.54 19.87C14.75 19.87 15.95 20.12 17.07 20.6C18.18 21.08 19.18 21.79 20 22.67C20.83 23.56 21.47 24.61 21.87 25.75C22.28 26.89 22.44 28.1 22.36 29.31L4.72 29.31L4.73 29.31Z" fill="#FAB400" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M5.21 25.75C5.62 24.61 6.26 23.56 7.08 22.67C7.91 21.79 8.91 21.08 10.02 20.6C11.13 20.12 12.33 19.87 13.54 19.87C14.75 19.87 15.95 20.12 17.07 20.6C18.18 21.08 19.18 21.79 20 22.67C20.83 23.56 21.47 24.61 21.87 25.75C22.28 26.89 22.44 28.1 22.36 29.31L4.72 29.31L4.73 29.31C4.64 28.1 4.81 26.89 5.21 25.75Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="0.741667" />
                        <path id="Vector" d="M8.37 28.27L9.42 28.27C9.71 28.27 9.94 28.5 9.94 28.79C9.94 29.08 9.71 29.31 9.42 29.31L8.37 29.31C8.08 29.31 7.85 29.08 7.85 28.79C7.85 28.5 8.08 28.27 8.37 28.27Z" fill="#0A0A28" fill-opacity="1.000000" fill-rule="evenodd" />
                        <path id="Vector" d="M17.79 28.27L18.84 28.27C19.13 28.27 19.36 28.5 19.36 28.79C19.36 29.08 19.13 29.31 18.84 29.31L17.79 29.31C17.5 29.31 17.27 29.08 17.27 28.79C17.27 28.5 17.5 28.27 17.79 28.27Z" fill="#0A0A28" fill-opacity="1.000000" fill-rule="evenodd" />
                        <path id="Vector" d="M22.24 29.05L4.97 29.05C4.68 29.05 4.44 29.29 4.44 29.57C4.44 29.86 4.68 30.1 4.97 30.1L22.24 30.1C22.53 30.1 22.77 29.86 22.77 29.57C22.77 29.29 22.53 29.05 22.24 29.05Z" fill="#FAB400" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M22.24 29.05C22.53 29.05 22.77 29.29 22.77 29.57C22.77 29.86 22.53 30.1 22.24 30.1L4.97 30.1C4.68 30.1 4.44 29.86 4.44 29.57C4.44 29.29 4.68 29.05 4.97 29.05L22.24 29.05Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="0.741667" />
                        <path id="Vector" d="M11.28 19.85C11.7 23.31 11.9 25.56 11.9 26.63C11.9 27.56 11.75 28.37 11.43 29.05L15.79 29.05C15.47 28.37 15.32 27.56 15.32 26.63C15.32 25.56 15.53 23.31 15.94 19.85C14.4 19.55 12.82 19.55 11.28 19.85Z" fill="#FA7800" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M11.9 26.63C11.9 27.56 11.75 28.37 11.43 29.05L15.79 29.05C15.47 28.37 15.32 27.56 15.32 26.63C15.32 25.56 15.53 23.31 15.94 19.85C14.4 19.55 12.82 19.55 11.28 19.85C11.7 23.31 11.9 25.56 11.9 26.63Z" stroke="#C8500A" stroke-opacity="1.000000" stroke-width="0.741667" />
                    </g>
                </svg>
                <div className='text-sm'>Разрешение на строительство</div>
            </div>
            <div className='shadow-custom h-[130px] border-t rounded-[15px] flex flex-col items-center gap-[20px] text-center py-[15px] justify-center' style={{
                boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.1)'
            }}>
                <div className='  text-sm w-[80%] text-[#888B97]'>
                    Вы можете ознакомится с документами нажав на кнопку
                </div>
                <ButtonSecondary img={Document} title='Посмотреть' />
            </div>
        </div>
    )
}

export const ApartmentItem = ({ item }: any) => {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(5)


    return (
        <div className='w-[100%] max-w-[282px] border border-[#E0E0E0] rounded-[8px] h-[48px] relative flex items-center px-[29px]'>
            <div className='absolute top-[-11px] left-[17px] px-[12px] bg-[white] text-[#BFBFBF]   text-sm'>Комнаты</div>
            <div>{min} — {max}</div>
            <div className='absolute bottom-[-11px] left-[17px] px-[12px] bg-[white] text-[#BFBFBF]   text-sm'>

            </div>


            <div className='absolute bottom-[2px] left-[27px] w-[220px]'>
                <MultiRangeSlider
                    min={1}
                    max={5}
                    onChange={({ min, max }) => {
                        setMax(max)
                        setMin(min)
                    }}
                />
            </div>

        </div>
    )
}

export const HouseModelItem = ({ item }: any) => {
    return (
        <div className='w-[100%] max-w-[282px] flex flex-col gap-[8px]'>
            <div className='rounded-[8px] border border-[#0000001A] h-[284px] p-[25px] relative'>
                <div className='w-[32px] h-[32px] bg-[white] absolute top-[9px] right-[9px] flex items-center justify-center cursor-pointer' style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.05)' }}>
                    <Image src={HeartGrey} alt="" />
                </div>
                <Image src={Maket} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div>
                <div className='text-lg'>700 — 800 usd/м²</div>
                <div className='text-sm text-[#00000080]'>37.12 м² · 2-комнатная</div>
            </div>
            <div className='flex flex-col gap-[4px]'>
                <div className='text-sm text-[#00000080] px-[8px] bg-[#F2F2F2] w-[fit-content] rounded-[4px]'>Запланировано в 1 кв. 2024</div>
                <div className='text-sm text-[#00000080] px-[8px] bg-[#F2F2F2] w-[fit-content] rounded-[4px]'>Этажи: 1</div>
            </div>
        </div>
    )
}

export const HouseNewsItem = ({ item }: any) => {
    return (
        <div className='h-[230px] w-[100%] border border-[#E0E3EB] relative rounded-[13px]'>
            <Image src={Main} alt="" className='rounded-t-[13px]' />
            <div className='h-[67px] w-[100%] bg-[white] absolute bottom-[0px] rounded-[13px] px-[13px] py-[6px]'>
                <div className='relative w-[100%] h-[100%] flex flex-col gap-[5px]'>
                    <Image src={TopArrow} alt="" className='absolute left-[0px] right-[0px] flex justify-center top-[0px]' />

                    <div className='flex items-center justify-between'>
                        <div className='text-xs'>III Квартал</div>

                        <div className='flex items-center gap-[8px]'>
                            <Image src={Reset} alt="" />
                            <div className='text-xs'>В работе</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[5px] px-[5px]'>
                        <div className='dashed w-[100%] h-[1px]'></div>
                        <div className='text-[10px] text-[#888B97]'>Завершены все запланированные этапы в этом квартале</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BuilderCompanyItem = ({ item }: any) => {
    return (
        <div className='rounded-[14px] h-[271px] w-[100%] relative' style={{boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}}>
            <Image src={Main} alt="" className='h-[184px] w-[100%] rounded-t-[14px] absolute top-0 left-0 right-0 bottom-0 z-[-1]'/>
            <div className='absolute left-0 right-0 bottom-0 px-[10px] py-[8px] flex flex-col gap-[5px]'>
                <div className='text-[18px] font-bold text-[#FFA113]'>От 1.3 млн сом</div>
                <div>
                    <div className='text-[13]'>Ул. Карла Маркса, 61</div>
                    <div className='text-[12px]'>2 дома строится, 12 построено</div>
                </div>
            </div>
        </div>
    )
}


