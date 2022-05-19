import Image from 'next/image'
import React from 'react'
import Tag from '../Tag/Tag'
import Faved from '../Icons/Faved'

type Props = {}

const BookCard: React.FC<Props> = ({}) => {
  return (
    <div className="flex w-full max-w-3xl gap-4 bg-faved py-4 px-6 border-t border-main-bg hover:bg-opacity-80">
      <div className='hidden'>
        <Image
          src="https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg"
          alt="Book cover"
          width={116}
          height={166}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="flex flex-col w-full justify-between">
          <div className='flex w-full justify-between'>
            <h2 className="text-primary font-bold">Pride and Prejudice</h2>
            <Faved />
          </div>
          <div className='flex gap-1'>
            <Tag>{`Love stories`}</Tag>
            <Tag>{`Fiction`}</Tag>
          </div>
        </div>
        <div className="flex justify-between mt-4 items-end">
          <span className='text-primary italic opacity-80'>Austen, Jane</span>
          <button className='shadow-sm cursor-pointer px-3 py-1 rounded-lg bg-purple-700 bg-opacity-50 text-purple-300'>Read Book</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
