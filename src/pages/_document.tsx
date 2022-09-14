import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
      </Head>
      <body className='bg-app-background text-app-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
