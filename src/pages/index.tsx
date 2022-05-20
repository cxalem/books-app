import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BookList from '../components/BooksList/BooksList'
import FilterBar from '../components/FilterBar/FilterBar'
import SearchBar from '../components/SearchBar/SearchBar'

type Props = {
  booksData: any
}

const Home: NextPage<Props> = ({ booksData }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Books App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="my-10 flex w-full flex-col items-center justify-center px-0 text-center">
          <div className="relative mb-10 flex max-h-28 w-full flex-col items-center justify-items-center gap-4 md:w-full md:max-w-screen-md md:flex-row md:justify-between md:px-0">
            <SearchBar />
            <FilterBar booksData={booksData} />
          </div>
          <BookList booksData={booksData} />
        </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'https://gnikdroy.pythonanywhere.com/api/book/?format=json'
    )
    const data = await res.json()
    return {
      props: {
        booksData: data,
      },
    }
  } catch (error) {
    console.log(error)
  }
}
