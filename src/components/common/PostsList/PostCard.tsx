interface PostCardProps {
  title: string
  content: string
  createdAt: string
  createdAtFromNow: string
}
export const PostCard = ({
  title,
  content,
  createdAt,
  createdAtFromNow,
}: PostCardProps) => {
  return (
    <div className='flex flex-col max-h-64 overflow-hidden p-8 gap-5 rounded-lg shadow-lg bg-app-post hover:cursor-pointer'>
      <div className='flex items-start justify-between'>
        <h3 className='flex w-[75%] text-xl font-bold leading-relaxed'>
          {title}
        </h3>
        <time
          title={createdAt}
          className='flex text-xs text-app-span py-1 leading-relaxed'
        >
          {createdAtFromNow}
        </time>
      </div>
      <p>{content}</p>
    </div>
  )
}
