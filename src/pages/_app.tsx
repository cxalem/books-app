import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BooksProvider } from '../context/BooksContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BooksProvider>
      <Component {...pageProps} />
    </BooksProvider>
  )
}

export default MyApp
