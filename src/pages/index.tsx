import { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/future/image'

import { NextPageWithLayout } from './page'
import { PrimaryLayout } from '../components/layouts/primary/'

import logo from '../../public/logo.svg'

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-1 flex-col w-full max-w-4xl mx-auto items-center'>
      <Link href='/'>
        <button className='focus:shadow-none mt-16'>
          <Image src={logo} alt='' />
        </button>
      </Link>
      <div className='w-full mt-11 p-10 rounded-lg shadow-lg bg-app-profile'>
        Profile
      </div>
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
