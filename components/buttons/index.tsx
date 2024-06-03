import Image from "next/image"
import { Heart } from "../svg"


interface ButtonPrimary {
  title: string
}

export const ButtonPrimary = ({ title }: ButtonPrimary) => {
  return (
    <button className='primary-button px-[16px] py-[6px]'><Heart />{title}</button>
  )
}

interface ButtonSecondary {
  img?: any,
  title: string,
  onClick?: any,
}

export const ButtonSecondary = ({ img, title, onClick }: ButtonSecondary) => {
  return (
    <button onClick={onClick(onClick)} className="secondary-button"><Image src={img} alt="" />{title}</button>
  )
}

interface ButtonThirdly {
  title: string
}

export const ButtonThirdly = ({ title }: ButtonThirdly) => {
  return (
    <button className='thirdly-button rounded-[8px] bg-[#EDEDED] text-[#000000D6]   text-sm px-[16px] py-[5px] cursor-pointer hover:text-[#F4A733] hover:bg-[#FFDBAA]'>{title}</button>
  )
}



