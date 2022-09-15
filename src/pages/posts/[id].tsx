import axios from 'axios'
import { format, formatDistance } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { PrimaryLayout } from '../../components/layouts/primary'
import { PostHeader } from '../../components/pages/posts/PostHeader'
import { IssueProps } from '../../lib/types/issues'
import { NextPageWithLayout } from '../page'
import remarkGfm from 'remark-gfm'

interface PostProps extends IssueProps {
  userName: string
  url: string
}
const Post: NextPageWithLayout<PostProps> = ({
  created_at,
  created_at_from_now,
  title,
  body,
  comments,
  userName,
  url,
}) => {
  return (
    <main className='flex flex-1 flex-col w-full max-w-4xl mx-auto items-center -mt-20 pb-20'>
      <PostHeader
        url={url}
        title={title}
        userName={userName}
        comments={comments}
        date={{ created_at, created_at_from_now }}
      />
      <article className='articleStyle flex flex-col overflow-hidden p-9 gap-4'>
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {body}
        </ReactMarkdown>
      </article>
    </main>
  )
}
Post.layout = PrimaryLayout

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const issueResponse = await axios
    .get(
      `https://api.github.com/repos/cleisonmp/gith-blog/issues/${params?.id}`,
    )
    .then((response) => {
      return response.data
    })

  const issueDate = new Date(issueResponse.created_at)
  const issue: PostProps = {
    id: issueResponse.id ?? 0,
    number: issueResponse.number ?? 0,
    created_at: format(issueDate, "LLLL d 'at' h:mmaaa") ?? '',
    created_at_from_now:
      formatDistance(issueDate, new Date(), {
        addSuffix: true,
      }) ?? '',
    title: issueResponse.title ?? '',
    bodyShortened: '',
    body: issueResponse.body ?? '',
    comments: issueResponse.comments ?? 0,
    userName: issueResponse.user.login ?? '',
    url: issueResponse.html_url ?? '',
  }

  return {
    props: {
      ...issue,
    },
    revalidate: 60 * 60 * 24 * 30, // 30 days
  }
}
