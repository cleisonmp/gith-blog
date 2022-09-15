import Image from 'next/future/image'
import { HTMLAttributes } from 'react'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

//api.github.com/users/${username}
interface ProfileProps extends HTMLAttributes<HTMLElement> {
  user: {
    username: string
    name: string
    avatarUrl: string
    company: string
    followers: number
  }
}
export const Profile = ({ user, className, ...props }: ProfileProps) => {
  const { username, name, avatarUrl, company, followers } = user

  return (
    <div
      className={`flex gap-8 w-full px-10 py-8 rounded-lg shadow-lg bg-app-profile ${className}`}
      {...props}
    >
      <div className='rounded-lg overflow-hidden w-40'>
        <Image
          src={avatarUrl}
          alt='User profile photo'
          width={160}
          height={160}
        />
      </div>
      <div className='flex flex-col w-full justify-between'>
        <div>
          <div className='flex w-full justify-between'>
            <span className='text-app-title font-bold text-2xl'>{name}</span>
            <a
              href={`https://github.com/${username}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='flex items-center gap-2 text-app-primary'>
                Github <BsBoxArrowUpRight />
              </button>
            </a>
          </div>
          <span className='flex mt-2 text-app-span'>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </div>
        <div className='flex gap-7 text-app-span'>
          <div className='flex items-center gap-2'>
            <FaGithub size={18} /> {username}
          </div>
          {company && (
            <div className='flex items-center gap-2'>
              <FaBuilding size={18} /> {company}
            </div>
          )}
          <div className='flex items-center gap-2'>
            <FaUserFriends size={18} /> {followers} Followers
          </div>
        </div>
      </div>
    </div>
  )
}
