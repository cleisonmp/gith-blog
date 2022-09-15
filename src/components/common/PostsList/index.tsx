import { HTMLAttributes } from 'react'
import { issueProps } from '../../../lib/types/issues'

import { PostCard } from './PostCard'

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
            content={post.bodyShortened}
            createdAt={post.created_at}
            createdAtFromNow={post.created_at_from_now}
          />
        )
      })}
    </div>
  )
}
