import React from 'react'
import BookCard from '../BookCard/BookCard'
import { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'

type Book = any

type Props = {}

const BookList: React.FC<Props> = ({}) => {
  const { search, selectedAuthor, booksData } = useContext(BooksContext)
  const { results: books, next: followingPage } = booksData

  let searchedBooks = []
  if (search.length <= 0) {
    searchedBooks = books
  } else {
    searchedBooks = books.filter((book: any) => {
      const {
        title,
        agents: [{ person }],
      } = book
      const bookTitle = title.toLowerCase()
      const bookAuthor = person.toLowerCase()
      const bookInfo = `${bookTitle} ${bookAuthor} ${selectedAuthor}`
      const searchText = search.toLowerCase()
      return bookInfo.includes(searchText)
    })
  }
  return (
    <div className="grid w-full grid-cols-1 justify-center justify-items-center px-0 text-center md:max-w-screen-md lg:max-w-screen-lg">
      {searchedBooks ? (
        searchedBooks.map((book: Book) => {
          const {
            title,
            agents: [{ person }],
            subjects,
            resources,
            id,
            faved
          } = book
          const bookUri = resources.filter((resource: any) =>
            resource.uri.includes('.htm')
          )[0].uri
          return (
            <BookCard
              title={title}
              author={person}
              subjects={subjects}
              id={id}
              key={id}
              bookUri={bookUri}
              faved={faved}
            />
          )
        })
      ) : (
        <span> Loading... </span>
      )}
    </div>
  )
}

export default BookList
