import Image from 'next/image'
import React from 'react'
import Tag from '../Tag/Tag'
import Faved from '../Icons/Faved'

type Props = {}

const BookCard: React.FC<Props> = ({}) => {
  return (
    <div className="flex w-full max-w-3xl gap-4 bg-faved py-4 px-6 border-t border-main-bg hover:bg-opacity-80 md:rounded-xl md:py-6 md:shadow-lg md:border-t-transparent">
      <div className="flex w-full flex-col justify-between">
        <div className="flex flex-col w-full justify-between">
          <div className='flex w-full justify-between items-center'>
            <h2 className="text-primary font-bold md:text-lg">Pride and Prejudice</h2>
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
