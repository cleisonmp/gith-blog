import Image from 'next/future/image'
import Link from 'next/link'
import leftCoverEffect from '../../../../public/leftCoverEffect.svg'
import rightCoverEffect from '../../../../public/rightCoverEffect.svg'

import logo from '../../../../public/logo.svg'

export const Header = () => {
  return (
    <header className='flex gap-4 items-center w-full bg-[#0c2238]'>
      <div className='flex items-center justify-between w-full py-10'>
        <Image src={leftCoverEffect} alt='' />

        <div className='self-start mt-12'>
          <Link href='/'>
            <button className='focus:shadow-none'>
              <Image src={logo} alt='' />
            </button>
          </Link>
        </div>

        <Image src={rightCoverEffect} alt='' />
      </div>
    </header>
  )
}
