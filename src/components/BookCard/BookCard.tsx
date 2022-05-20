import Image from 'next/image'
import React, { useState, useEffect, useContext } from 'react'
import Tag from '../Tag/Tag'
import Faved from '../Icons/Faved'
import Link from 'next/link'
import Unfaved from '../Icons/Unfaved'
import { BooksContext } from '../../context/BooksContext'

type Props = {
  title: string
  author: string
  subjects: string[]
  bookUri: any
  id: number
}

const BookCard: React.FC<Props> = ({ title, author, subjects, bookUri, id }) => {
  const [faved, setFaved] = useState(false)
  const { setFavedBooks, newFav } = useContext(BooksContext)

  const handleFav = (e: { currentTarget: any }) => {
    setFaved(!faved)
  }
  
  const filteredSubjects = subjects.map((subject: string) =>
    subject.split('--').map((subject: string) => subject.trim())
  )[0]

  return (
    <div
      className={`${
        faved ? 'bg-faved' : 'bg-card-bg'
      } flex w-full max-w-screen-md gap-4 border-t border-main-bg py-4 px-6 hover:bg-opacity-80 md:py-6`}
    >
      <div className="flex w-full flex-col justify-between">
        <div className="flex w-full flex-col justify-between md:gap-1">
          <div className="flex w-full items-center justify-between">
            <h2 className="max-w-xxs text-left font-bold text-primary md:max-w-full md:text-lg">
              {title}
            </h2>
            <button data-title={`${title}`} data-author={`${author}`} data-subject={`${filteredSubjects}`} data-id={`${id}`} onClick={handleFav}>
              {faved ? <Faved /> : <Unfaved />}
            </button>
          </div>
          <div className="flex max-w-xxs flex-wrap gap-1 md:max-w-full md:gap-2">
            {filteredSubjects.map((subject: string) => (
              <Tag key={subject}>{subject}</Tag>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <span className="text-left italic text-primary opacity-80">
            {author}
          </span>
          <Link href={`${bookUri}`} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer rounded-lg bg-purple-700 bg-opacity-50 px-3 py-1 text-purple-300 shadow-sm">
                Read Book
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard
