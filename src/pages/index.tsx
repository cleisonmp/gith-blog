//import { ReactElement } from 'react'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { NextPageWithLayout } from './page'
import axios from 'axios'
import { format, formatDistance } from 'date-fns'
import removeMarkdown from 'remove-markdown'

import { PrimaryLayout } from '../components/layouts/primary/'

import { Profile } from '../components/common/Profile'
import { SearchBox } from '../components/common/SearchBox'
import { PostsList } from '../components/common/PostsList'

interface issueProps {
  id: number
  number: number
  created_at: string
  created_at_from_now: string
  title: string
  body: string
  comments: number
}
interface homeProps {
  user: {
    username: string
    name: string
    avatarUrl: string
    company: string
    followers: number
  }
  issues: issueProps[]
}
const Home: NextPageWithLayout<homeProps> = ({ user, issues }) => {
  useEffect(() => {
    axios.get('')
  }, [])
  return (
    <main className='flex flex-1 flex-col w-full max-w-4xl mx-auto items-center -mt-20 pb-20'>
      <Profile user={user} />
      <div className='flex w-full justify-between mt-18'>
        <span className='text-lg font-bold'>Publications</span>
        <span className='text-app-span text-sm'>5 publications</span>
      </div>
      <SearchBox className='mt-3' />
      <PostsList issues={issues} className='mt-12' />
    </main>
  )
}
Home.layout = PrimaryLayout
/*Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}*/

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const userResponse = await axios
    .get('https://api.github.com/users/cleisonmp')
    .then((response) => {
      return response.data
    })

  const issuesResponse = await axios
    .get('https://api.github.com/search/issues?q=%20repo:cleisonmp/gith-blog')
    .then((response) => {
      return response.data
    })

  const user = {
    username: userResponse.login ?? '',
    name: userResponse.name ?? '',
    avatarUrl: userResponse.avatar_url ?? '',
    company: userResponse.company ?? '',
    followers: userResponse.followers ?? 0,
  }

  const issues: issueProps[] = issuesResponse?.items?.map(
    (issue: issueProps) => {
      const issueDate = new Date(issue.created_at)
      return {
        id: issue.id ?? 0,
        number: issue.number ?? 0,
        created_at: format(issueDate, "LLLL d 'at' h:mmaaa") ?? '',
        created_at_from_now:
          formatDistance(issueDate, new Date(), {
            addSuffix: true,
          }) ?? '',
        title: issue.title ?? '',
        body: removeMarkdown(issue.body).substring(0, 175) + '...' ?? '',
        comments: issue.comments ?? 0,
      }
    },
  )
  console.log(issues)

  return {
    props: {
      user,
      issues,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  }
}
