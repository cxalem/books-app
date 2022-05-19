import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BookList from '../components/BooksList/BooksList'
import FilterBar from '../components/FilterBar/FilterBar'
import SearchBar from '../components/SearchBar/SearchBar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Books App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center px-0 text-center">
        <div className='relative flex flex-col items-center justify-items-center w-full mb-10 gap-4 max-h-28 md:flex-row md:w-full md:px-0 md:max-w-screen-md md:justify-between lg:max-w-screen-lg'>
          <SearchBar />
          <FilterBar />
        </div>
        <BookList />
      </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home
