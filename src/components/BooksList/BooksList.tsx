import BookCard from '../BookCard/BookCard'
import { useContext, useRef, useEffect, useState } from 'react'
import { BooksContext } from '../../context/BooksContext'
import type { Book } from '../../../types'

type Props = {}

const BookList: React.FC<Props> = ({}) => {
  const { search, selectedAuthor, isShown, setIsShown, getNextPage, books } =
    useContext(BooksContext)
  const trigger: any = useRef(null)

  let searchedBooks: Book[] = []
  if (search.length <= 0) {
    searchedBooks = books
  } else {
    searchedBooks = books.filter((book: Book) => {
      const { title } = book
      const bookTitle = title.toLowerCase()
      const bookAuthor = book.agents[0]?.person?.toLowerCase()
      const bookInfo = `${bookTitle} ${bookAuthor} ${selectedAuthor}`
      const searchedText = search.toLowerCase()
      return bookInfo.includes(searchedText)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isShowing = entries[0]?.isIntersecting
      if (isShowing && searchedBooks) {
        getNextPage()
      } else {
        setIsShown(false)
      }
    })
    observer.observe(trigger.current)
    return () => observer?.disconnect()
  }, [isShown])

  return (
    <div className="my-20 grid w-full grid-cols-1 justify-center justify-items-center px-0 text-center md:my-0 md:max-w-screen-md lg:max-w-screen-lg">
      {searchedBooks ? (
        searchedBooks.map((book: Book) => {
          const { title, subjects, resources, id, faved } = book
          const bookUri = resources.filter((resource: any) =>
            resource.uri.includes('.htm')
          )[0]?.uri
          return (
            <BookCard
              title={title}
              author={book.agents[0]?.person}
              subjects={subjects}
              id={id}
              key={id}
              bookUri={bookUri}
              faved={faved}
            />
          )
        })
      ) : (
        <span className="font-bold text-primary"> Loading... </span>
      )}
      {!isShown && searchedBooks && (
        <span className="my-5 font-bold text-primary"> Loading... </span>
      )}
      <div ref={trigger}></div>
    </div>
  )
}

export default BookList
