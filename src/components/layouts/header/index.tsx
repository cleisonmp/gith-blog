import Image from 'next/future/image'
import leftCoverEffect from '../../../../public/leftCoverEffect.svg'
import rightCoverEffect from '../../../../public/rightCoverEffect.svg'

export const Header = () => {
  return (
    <header className='flex gap-4 items-center w-full overflow-hidden h-[18.5rem] bg-[#0c2238] fixed -z-50'>
      <div className='flex justify-between w-full'>
        <Image src={leftCoverEffect} alt='' />
        <Image src={rightCoverEffect} alt='' />
      </div>
    </header>
  )
}
