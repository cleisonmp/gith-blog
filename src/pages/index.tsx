//import { ReactElement } from 'react'

import { NextPageWithLayout } from './page'
import { PrimaryLayout } from '../components/layouts/primary/'

import { Profile } from '../components/common/Profile'
import { SearchBox } from '../components/common/SearchBox'
import { PostsList } from '../components/common/PostsList'

const Home: NextPageWithLayout = () => {
  return (
    <main className='flex flex-1 flex-col w-full max-w-4xl mx-auto items-center -mt-20 pb-20'>
      <Profile />
      <div className='flex w-full justify-between mt-18'>
        <span className='text-lg font-bold'>Publications</span>
        <span className='text-app-span text-sm'>5 publications</span>
      </div>
      <SearchBox className='mt-3' />
      <PostsList className='mt-12' />
    </main>
  )
}
Home.layout = PrimaryLayout
/*Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}*/

export default Home
