import BookCard from '../BookCard/BookCard'
import { useContext, useRef, useEffect } from 'react'
import { BooksContext } from '../../context/BooksContext'

type Book = any

type Props = {}

const BookList: React.FC<Props> = ({}) => {
  const { search, selectedAuthor, booksData, setBooksData } = useContext(BooksContext)
  const { results: books, next: followingPage } = booksData
  const trigger: any = useRef(null)

  let searchedBooks: any = []
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
      const searchedText = search.toLowerCase()
      return bookInfo.includes(searchedText)
    })
  }

  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const isShowing = entries[0]?.isIntersecting
      if (isShowing && searchedBooks) {
        const getNextPage = async () => {
          const res = await fetch(booksData.next)
          const data = await res.json()
          setBooksData({ ...data, results: [...books, ...data.results] })
          console.log(booksData)
        }
        getNextPage()
      }
    })
    observer.observe(trigger.current)
    return () => observer?.disconnect()

  }, [ booksData ])

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
            faved,
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
        <span className="font-bold text-primary"> Loading... </span>
      )}
      <div ref={trigger}></div>
    </div>
  )
}

export default BookList
