import { HTMLAttributes } from 'react'
import { PostCard } from './PostCard'

const postArray = ['', '', '', '', '', '', '']

export const PostsList = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`grid grid-cols-2 gap-8 w-full rounded-lg ${className}`}
      {...props}
    >
      {postArray.map((post, index) => {
        return (
          <PostCard
            key={index}
            title='JavaScript data types and data structures'
            content='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...'
          />
        )
      })}
    </div>
  )
}
