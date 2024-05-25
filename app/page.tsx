import { HomeBuilderCard, HomePrimaryCard, HomeSecondaryCard } from "@/components/cards";
import { Header } from "@/components/header";
import { ChooseCollect, HomeSecondaryCardSvg1, HomeSecondaryCardSvg2, HomeSecondaryCardSvg3, HomeSecondaryCardSvg4, MainTitle, RightArrow, Search } from "@/components/svg";

import BuilderBg1 from '@/assets/image/builder_bg_1.jpeg'
import BuilderBg2 from '@/assets/image/builder_bg_2.jpeg'
import BuilderBg3 from '@/assets/image/builder_bg_3.jpeg'


import BuilderHuman1 from '@/components/svg/builder_human_1.svg'
import BuilderHuman2 from '@/components/svg/builder_human_2.svg'
import BuilderHuman3 from '@/components/svg/builder_human_3.svg'

import Google from '@/components/svg/google.svg'
import Tokopedia from '@/components/svg/tokopedia.svg'
import Tiket from '@/components/svg/tiket.svg'
import Microsoft from '@/components/svg/microsoft.svg'
import Image from "next/image";
import { QuestionForm } from "@/components/questionform";

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   const data = await res.json()

//   return {
//     props: {
//       items: data
//     }
//   }

// }


export default function Home() {

  return (
    <div className="home">
      <Header light={true} />

      <div className="home__main-background">
        <div className="main">
          <div className="container">
            <div className="main_inner">
              <MainTitle />
              <div className="main_search">
                <div className="main_search-circle">
                  <Search />
                </div>
                <input type="text" className="primary-input px-[21px] py-[15px]" placeholder="Ведите адрес или наименование ЖК" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-[60px] px-[20px]">
          <div className="container">
            <div className="w-[100%] flex gap-[40px]">
              <div className="w-[100%]">
                <div className="text-3xl font-semibold text-[rgb(75,75,75)]">Жилые Комплексы которые могут вам понравится</div>
              </div>
              <div className="w-[100%] flex flex-col gap-[35px] max-w-[486px]">
                <HomePrimaryCard />
                <HomePrimaryCard />
                <HomePrimaryCard />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <div className="max-w-[1310px] w-[100%] mx-auto" >
            <div className="flex flex-col gap-[40px]">
              <div className="text-center text-3xl font-semibold text-[rgb(113,113,113)]">Почему выбирают нас</div>

              <div className="flex grid grid-cols-3 grid-rows-2 gap-[40px]">
                <div className='shadow col-span-2 bg-[#F8F8F8] px-[64px] py-[40px] rounded-[28px] flex gap-[30px] items-center'>
                  <div className="w-[56%] flex flex-col gap-[15px]">
                    <div className='text-2xl text-[rgb(61,50,105)]'>Lorem ipsum</div>
                    <div className='text-lg text-[rgb(78,78,78)]'>Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor
                      incididunt Laoreet non curabitur gravida
                      sagittis aliquam bibendum.</div>
                  </div>

                  <ChooseCollect />
                </div>
                <HomeSecondaryCard svg={<HomeSecondaryCardSvg1 />} />
                <HomeSecondaryCard svg={<HomeSecondaryCardSvg2 />} />
                <HomeSecondaryCard svg={<HomeSecondaryCardSvg3 />} />
                <HomeSecondaryCard svg={<HomeSecondaryCardSvg4 />} />
              </div>
            </div>
          </div>
        </div>

        <div className="py-[60px] px-[20px]">
          <div className="container">
            <div className="flex flex-col gap-[35px]">
              <div className="flex item-center gap-[40px]">
                <div className="text-[#4B4B4B] text-2xl font-semibold ">Полезные советы от нашей команды</div>
                <div className='text-sm font-medium flex items-center gap-[10px] cursor-pointer w-[50%]'>Смотреть все <RightArrow /></div>
              </div>


              <div className="flex grid grid-cols-4 gap-[28px] ">
                <HomeBuilderCard title={'#советы_от_Tifi'} describtion={'Основные ошибки при выборе ЖК'} humanbg={BuilderHuman1} bgcolor={BuilderBg1} />
                <HomeBuilderCard title={'#советы_от_Tifi'} describtion={'Кто делает ремонт при поломке?'} humanbg={BuilderHuman2} bgcolor={BuilderBg2} />
                <HomeBuilderCard title={'#справочник_от_Tifi'} describtion={'Почему ПСО выгоднее'} humanbg={BuilderHuman3} bgcolor={BuilderBg3} />
                <HomeBuilderCard title={'#советы_от_Tifi'} describtion={'Кто делает ремонт при поломке?'} humanbg={BuilderHuman2} bgcolor={BuilderBg2} />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <div className="container">
            <div className="flex flex-col gap-[64px]">
              <div className="text-3xl font-semibold text-[#717171] text-center">Наши Партнеры</div>
              <div className="flex justify-between items-center">
                <Image src={Google} alt="" />
                <Image src={Tokopedia} alt="" />
                <Image src={Tiket} alt="" />
                <Image src={Microsoft} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-[100px] px-[20px]">
          <QuestionForm />
        </div>
      </div>
    </div>
  );
}


