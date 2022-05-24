import { ChangeEventHandler } from "react"

export type Author = {
  id: string
  person: string
  type: string
}

export type Resource = {
  id: string
  uri: string
  type: string
}

export type Book = {
  id: string
  title: string
  subjects: string[]
  agents: Author[]
  resources: Resource[]
  faved: boolean
}

export type BookData = {
  count: number
  next: string
  previous: string | null
  results: Book[]
}

export type BooksContextType = {
  search: string
  onSearchValue: ChangeEventHandler<HTMLInputElement>
  setSearch: (value: string) => void
  selectedAuthor: string
  setSelectedAuthor: (value: string) => void
  toggleFav: (value: string) => void
  booksData: BookData
  setBooksData: (value: BookData) => void
}
