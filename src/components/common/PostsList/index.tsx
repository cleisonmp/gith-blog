import { HTMLAttributes } from 'react'
import { PostCard } from './PostCard'

interface issueProps {
  id: number
  number: number
  created_at: string
  created_at_from_now: string
  title: string
  body: string
  comments: number
}

interface PostListProps extends HTMLAttributes<HTMLElement> {
  issues: issueProps[]
}

export const PostsList = ({ issues, className, ...props }: PostListProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-8 w-full rounded-lg ${className}`}
      {...props}
    >
      {issues.map((post, index) => {
        return (
          <PostCard
            key={index}
            title={post.title}
            content={post.body}
            createdAt={post.created_at}
            createdAtFromNow={post.created_at_from_now}
          />
        )
      })}
    </div>
  )
}
