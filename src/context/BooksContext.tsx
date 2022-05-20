import { NextComponentType, NextPageContext } from 'next'
import React, { useState, createContext } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

type BooksContextType = {
  setFavedBooks: (books: any) => void
  newFav: any
  search: string
  onSearchValue?: (value: any) => void
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType
)

export const BooksProvider = ({ children }: Props) => {
  const [newFav, setNewFav] = useState([
    {
      title: '',
      author: '',
      subjects: [],
      faved: false,
      id: '',
    },
  ])

  const setFavedBooks = (e: { currentTarget: any }) => {
    setNewFav([
      ...newFav,
      {
        title: e.currentTarget.dataset.title,
        author: e.currentTarget.dataset.author,
        faved: false,
        subjects: e.currentTarget.dataset.subjects,
        id: e.currentTarget.dataset.id,
      },
    ])
  }

  const [search, setSearch] = useState('')
  const onSearchValue = (e: { currentTarget: any }) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <BooksContext.Provider
      value={{ setFavedBooks, newFav, search, onSearchValue }}
    >
      {children}
    </BooksContext.Provider>
  )
}
