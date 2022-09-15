import Link from 'next/link'
import { HTMLAttributes } from 'react'
import { IssueProps } from '../../../lib/types/issues'

import { PostCard } from './PostCard'

interface PostListProps extends HTMLAttributes<HTMLElement> {
  issues: IssueProps[]
}

export const PostsList = ({ issues, className, ...props }: PostListProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-8 w-full rounded-lg ${className}`}
      {...props}
    >
      {issues.map((post, index) => {
        return (
          <Link key={index} href={`/posts/${post.number}`}>
            <a
            //wrapper for nextjs link component to work with FC's
            >
              <PostCard
                title={post.title}
                content={post.bodyShortened}
                createdAt={post.created_at}
                createdAtFromNow={post.created_at_from_now}
              />
            </a>
          </Link>
        )
      })}
    </div>
  )
}
