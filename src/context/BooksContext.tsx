import { NextComponentType, NextPageContext } from 'next'
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
  const [selectedAuthor, setSelectedAuthor] =
    useState<string>('Select Author...')
  const [search, setSearch] = useState('')
  const onSearchValue = (e: { currentTarget: any }) => {
    setSearch(e.currentTarget.value)
  }
  
  const [booksData, setBooksData] = useState<any>([])

  const [faved, setFaved] = useState<any>(false)
  const toggleFav = (id: string) => {
    const selectedBook = booksData.results.find((x: any) => x.id === id)
    if (selectedBook) {
      selectedBook.faved = !selectedBook.faved
      setBooksData({ ...booksData })
    }
  }

  useEffect(() => {
    const fav: any = window.localStorage.getItem('faved')
    if (fav !== null || fav !== '') {
      setFaved(JSON.parse(fav))
    }
  }, [])

  useEffect(() => {
    const fav: any = window.localStorage.getItem('faved')
    if (fav !== null || fav !== '') {
      window.localStorage.setItem('faved', JSON.stringify(faved))
    }
  }, [faved])

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
