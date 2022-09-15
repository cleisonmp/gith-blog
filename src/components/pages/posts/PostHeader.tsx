import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaChevronLeft,
} from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'

//api.github.com/users/${username}
interface PostHeaderProps {
  url: string
  title: string
  userName: string
  comments: number
  date: {
    created_at: string
    created_at_from_now: string
  }
}
export const PostHeader = ({
  url,
  title,
  userName,
  comments,
  date,
}: PostHeaderProps) => {
  return (
    <div
      className={`flex gap-8 w-full px-10 py-8 rounded-lg shadow-lg bg-app-profile`}
    >
      <div className='flex flex-col w-full justify-between'>
        <div>
          <div className='flex w-full justify-between text-app-primary text-xs font-bold'>
            <Link href='/'>
              <button className='flex items-center gap-2 '>
                <FaChevronLeft /> BACK
              </button>
            </Link>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <button className='flex items-center gap-2 '>
                VIEW ON GITHUB <BsBoxArrowUpRight />
              </button>
            </a>
          </div>
          <span className='flex mt-5 text-app-title font-bold text-2xl'>
            {title}
          </span>
        </div>
        <div className='flex gap-7 text-app-span mt-2'>
          <div className='flex items-center gap-2'>
            <FaGithub size={18} /> {userName}
          </div>
          <time title={date.created_at} className='flex items-center gap-2'>
            <FaBuilding size={18} /> {date.created_at_from_now}
          </time>
          <div className='flex items-center gap-2'>
            <FaUserFriends size={18} /> {comments} comments
          </div>
        </div>
      </div>
    </div>
  )
}
