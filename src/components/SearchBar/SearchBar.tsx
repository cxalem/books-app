import React from 'react'
import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import SearchIcon from '../Icons/SearchIcon'
import { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'

type Props = {}

const SearchBar: React.FC<Props> = ({}) => {
  const { search, onSearchValue } = useContext(BooksContext)
  return (
    <div className="flex bg-card-bg h-12 rounded-lg">
      <input
          onChange={onSearchValue}
          value={search}
        className="bg-transparent px-5 text-primary border-0 w-full"
        placeholder="Find your book..."
      ></input>
      <button className="bg-transparent flex justify-center items-center px-3 mt-1">
        <SearchIcon className={``} stroke="#EDF8F8" />
      </button>
    </div>
  )
}

export default SearchBar
