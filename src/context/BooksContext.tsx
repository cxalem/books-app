import React, { useState, createContext, useEffect, ChangeEventHandler } from 'react'
import type { BooksContextType, Book, BookData } from '../../types'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType
)

export const BooksProvider = ({ children }: Props) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string>('Select Author...')

  const [search, setSearch] = useState<string>('')
  const onSearchValue = (e: any) => {
    setSearch(e.currentTarget.value)
  }
  
  const [booksData, setBooksData] = useState<BookData>({} as BookData)

  const toggleFav = (id: string) => {
    const selectedBook: any = booksData.results.find((x: Book) => x.id === id)
      selectedBook.faved = !selectedBook.faved
      setBooksData({ ...booksData })
      window.localStorage.setItem('faved', JSON.stringify(booksData))
  }

  useEffect(() => {
    const localStorageData: string | null = window.localStorage.getItem('faved')
    if (localStorageData) {
      setBooksData(JSON.parse(localStorageData))
    }
  }, [])
  
  const { results: books, next: followingPage } = booksData
  const [isShown, setIsShown] = useState<boolean>(false)
  const getNextPage = async () => {
    const res = await fetch(followingPage)
    const data = await res.json()
    setBooksData({ ...data, results: [...books, ...data.results] })
    setIsShown(true)
  }

  return (
    <BooksContext.Provider
      value={{
        search,
        onSearchValue,
        selectedAuthor,
        setSelectedAuthor,
        setSearch,
        toggleFav,
        setBooksData,
        booksData,
        isShown,
        setIsShown,
        books,
        getNextPage,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
