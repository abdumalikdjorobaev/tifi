import React from 'react'

import Main from '@/assets/image/Main.png'
import Image from 'next/image';


interface Props {
    active: boolean;
    setActive: any;
}

export const Chat = ({ active, setActive }: Props) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='container'>
                <div className='modal_inner'>
                    <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                        <div className='flex gap-[29px] h-[100%]'>
                            <div className='pt-[40px] w-[100%] max-w-[277px]'>
                                <div className='w-[100%] h-[100%]  overflow-y-scroll'>
                                    <div className='px-[24px]'>
                                        <input type="text" className='w-[100%] py-[6px] px-[6px] h-[100%] border border-[#CDD5DE]' />
                                    </div>
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                    <ChatUserItem />
                                </div>
                            </div>
                            <div className='w-[100%]'>hi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ChatUserItem = () => {

    return (
        <div className='px-[24px] py-[16px] cursor-pointer hover:bg-[#F8F9FA]'>
            <div className=' h-[42px] flex items-center gap-[8px] justify-between '>
                <div className='h-[42px] w-[100%] rounded-[100%] flex items-center gap-[8px]'>
                    <Image src={Main} alt="" className='h-[40px] w-[40px] rounded-[100%]' />
                    <div className='w-[100%] h-[100%] flex flex-col justify-between'>
                        <div className='text-[14px] font-[600]'>Zack Fox</div>
                        <div className='text-[14px] text-[#616C76]'>Thank you!</div>
                    </div>
                </div>

                <div className='flex flex-col items-end'>
                    <div className='text-[12px] whitespace-nowrap text-[#8FA0AF]'>10:49 AM</div>
                    <div>icon</div>
                </div>
            </div>
        </div>
    )
} 
