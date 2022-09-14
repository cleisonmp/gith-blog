import { NextPage } from 'next'
import { JSXElementConstructor } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  //getLayout?: (page: ReactElement) => ReactNode
  layout: JSXElementConstructor
}
