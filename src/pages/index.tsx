//import { ReactElement } from 'react'
import { ChangeEvent, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { NextPageWithLayout } from './page'
import axios from 'axios'
import { format, formatDistance } from 'date-fns'
import removeMarkdown from 'remove-markdown'

import { PrimaryLayout } from '../components/layouts/primary/'

import { Profile } from '../components/common/Profile'
import { PostsList } from '../components/common/PostsList'
import { issueProps } from '../lib/types/issues'

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
  const [searchValue, setSearchValue] = useState('')
  const [issuesList, setIssuesList] = useState<issueProps[]>(issues)

  useEffect(() => {
    axios.get('')
  }, [])

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentSearchValue = e.target.value
    setSearchValue(currentSearchValue)
    if (e.target.value.length === 0) {
      setIssuesList(issues)
    } else {
      setIssuesList((state) => {
        const newIssuesArray = state.filter((post) =>
          post.body.includes(currentSearchValue),
        )
        return newIssuesArray
      })
    }
  }
  return (
    <main className='flex flex-1 flex-col w-full max-w-4xl mx-auto items-center -mt-20 pb-20'>
      <Profile user={user} />
      <div className='flex w-full justify-between mt-18'>
        <span className='text-lg font-bold'>Publications</span>
        <span className='text-app-span text-sm'>5 publications</span>
      </div>

      <input
        type='text'
        value={searchValue}
        onChange={handleSearchOnChange}
        placeholder='Search content'
        className='mt-3 w-full bg-app-input p-3 border border-app-border rounded-lg placeholder-app-label'
      />
      <PostsList issues={issuesList} className='mt-12' />
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
        bodyShortened:
          removeMarkdown(issue.body).substring(0, 175) + '...' ?? '',
        body: issue.body ?? '',
        comments: issue.comments ?? 0,
      }
    },
  )

  return {
    props: {
      user,
      issues,
    },
    revalidate: 60 * 60 * 6, // 6 hours
  }
}
