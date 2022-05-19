import React from 'react'
import BookCard from '../BookCard/BookCard'

type Props = {}

const BookList: React.FC<Props> = ({}) => {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center justify-center px-0 text-center md:grid-cols-2 md:max-w-screen-md md:gap-6 lg:grid-cols-3 lg:max-w-screen-lg">
        {Array.from({length: 3}).map((_, index) => {
            return <BookCard key={index} />
        })}
    </div>
  )
}

export default BookList
