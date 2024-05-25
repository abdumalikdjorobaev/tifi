import React from 'react'

import Question from '@/assets/image/QuestionFormBg.jpeg'
import Image from 'next/image'
import { PrimaryInput } from '../inputs'

import Email from '@/components/svg/email.svg'
import Phone from '@/components/svg/phone.svg'

import Question_form_img_1 from '@/assets/image/question_form_img_1.jpeg'
import Question_form_img_2 from '@/assets/image/question_form_img_2.jpeg'
import Question_form_img_3 from '@/assets/image/question_form_img_3.jpeg'
import Question_form_img_4 from '@/assets/image/question_form_img_4.jpeg'
import Question_form_img_5 from '@/assets/image/question_form_img_5.jpeg'
import Question_form_img_6 from '@/assets/image/question_form_img_6.jpeg'
import Question_form_img_7 from '@/assets/image/question_form_img_7.jpeg'
import Question_form_img_8 from '@/assets/image/question_form_img_8.jpeg'
import Question_form_img_9 from '@/assets/image/question_form_img_9.jpeg'
import Question_form_img_10 from '@/assets/image/question_form_img_10.jpeg'


export const QuestionForm = ({ con_none }: any) => {
    return (
        <div className=''>
            <div className={con_none ? 'w-[100%] max-w-[1200px] mx-[auto]' : `container`}>
                <div className='relative h-[100%]'>
                    <Image src={Question_form_img_1} alt="" className='absolute top-[35px] left-[40px] rounded-[22px]' />
                    {/* <Image src={Question_form_img_2} alt="" className='absolute top-[65px] left-[188px]'/>
                    <Image src={Question_form_img_3} alt="" className='absolute top-[160px] left-[60px]'/> */}
                    <Image src={Question_form_img_4} alt="" className='absolute top-[164px] left-[180px] rounded-[22px]' />
                    <Image src={Question_form_img_10} alt="" className='absolute bottom-[55px] right-[67px] rounded-[22px]' />
                    <Image src={Question_form_img_5} alt="" className='absolute top-[40px] right-[185px] rounded-[22px]' />



                    <div className='absolute flex top-0 bottom-0 w-[100%] justify-center text-center h-[100%] items-center'>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-4xl font-medium'>Появились вопросы ?</div>
                            <div className='font-cormal text-2xl w-[80%] mx-[auto]'>Заполни форму и мы с тобой свяжемся!</div>
                            <div className='flex flex-col gap-[17px]'>
                                <PrimaryInput img={Email} />
                                <PrimaryInput img={Phone} />
                            </div>
                        </div>
                    </div>

                    <Image src={Question} alt="" className='w-[100%] rounded-[30px]' />
                </div>
            </div>
        </div>
    )
}
