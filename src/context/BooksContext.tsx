import React, { useState, createContext, useEffect } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

type BooksContextType = {
  search: string
  onSearchValue?: (value: any) => void
  selectedAuthor?: string
  setSelectedAuthor?: any
  setSearch?: any
  faved?: any
  toggleFav?: any
  booksData?: any
  setBooksData?: any
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType
)

export const BooksProvider = ({ children }: Props) => {
  const [selectedAuthor, setSelectedAuthor] = useState<string>('Select Author...')

  const [search, setSearch] = useState('')
  const onSearchValue = (e: { currentTarget: any }) => {
    setSearch(e.currentTarget.value)
  }
  
  const [booksData, setBooksData] = useState<any>([])

  const toggleFav = (id: string) => {
    const selectedBook = booksData.results.find((x: any) => x.id === id)
      selectedBook.faved = !selectedBook.faved
      setBooksData({ ...booksData })
      window.localStorage.setItem('faved', JSON.stringify(booksData))
  }

  useEffect(() => {
    const localStorageData: any = window.localStorage.getItem('faved')
    if (localStorageData) {
      setBooksData(JSON.parse(localStorageData))
    }
  }, [])

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
        booksData
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
