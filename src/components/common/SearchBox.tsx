import { HTMLAttributes } from 'react'

export const SearchBox = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <input
      type='text'
      placeholder='Search content'
      className={`w-full bg-app-input p-3 border border-app-border rounded-lg placeholder-app-label ${className}`}
      {...props}
    />
  )
}
