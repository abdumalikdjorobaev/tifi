
import Image from 'next/image'



interface PrimaryInputProps {
    img?: any
}

export const PrimaryInput = ({ img }: PrimaryInputProps) => {
    return (
        <div className="h-[50px] relative">
            <Image src={img} alt="" className='absolute left-[24px] top-[14px]' />
            <button className='absolute right-[12px] top-[4px] bg-[#10B981] h-[83%] rounded-[30px] px-[14px] text-xs font-semibold text-[white]'>Отправить</button>
            <input className="h-[100%] w-[100%] max-w-[458px] rounded-[30px] px-[60px]" type="text" placeholder="Ваш e-mail" />
        </div>
    )
}

