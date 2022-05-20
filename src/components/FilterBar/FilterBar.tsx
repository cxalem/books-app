import { useState, useEffect, useContext } from 'react'
import { Listbox } from '@headlessui/react'
import Arrow from '../Icons/Arrow'
import { BooksContext } from '../../context/BooksContext'

type Props = {}

const FilterBar: React.FC<Props> = ({}) => {
  const { selectedAuthor, setSelectedAuthor, setSearch, booksData } =
    useContext(BooksContext)
  const { results } = booksData

  useEffect(() => {
    if (selectedAuthor === 'Select Author...') {
      setSearch('')
    } else {
      setSearch(selectedAuthor)
    }
  }, [selectedAuthor])

  return (
    <Listbox value={selectedAuthor} onChange={setSelectedAuthor}>
      <Listbox.Button className="flex h-12 w-full max-w-xxs items-center justify-between rounded-lg bg-card-bg px-5 text-primary">
        {selectedAuthor}
        <Arrow />
      </Listbox.Button>
      <Listbox.Options className="absolute top-32 z-10 w-full max-w-xxs shadow-md md:top-16 md:right-0">
        {results ? (
          results.map(({ agents }: any) =>
            agents.map(({ person, id }: any) => (
              <Listbox.Option key={id} value={person}>
                {({ active, selected }) => {
                  return (
                    <li
                      className={`cursor-pointer border-t border-main-bg py-1 ${
                        active
                          ? 'bg-faved text-white'
                          : 'bg-card-bg text-primary'
                      }`}
                    >
                      {person}
                    </li>
                  )
                }}
              </Listbox.Option>
            ))
          )
        ) : (
          <span> Loading... </span>
        )}
      </Listbox.Options>
    </Listbox>
  )
}

export default FilterBar
