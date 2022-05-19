import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Arrow from '../Icons/Arrow'

type Props = {}

interface People {
  id: number
  name: string
  unavailable: boolean
}

const people: People[] = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const FilterBar: React.FC<Props> = () => {
  const [selectedPerson, setSelectedPerson] = useState<People>(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="flex w-full max-w-xxs justify-between h-12 items-center rounded-lg bg-card-bg px-5 text-primary">
        {selectedPerson.name}
        <Arrow />
      </Listbox.Button>
      <Listbox.Options className='absolute w-full max-w-xxs top-32 z-10 md:top-16 md:right-0'>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {({ active, selected }) => {
              return (
                <li
                  className={`border-t border-main-bg py-1 ${
                    !person.unavailable
                      ? 'cursor-pointer'
                      : 'cursor-not-allowed'
                  } ${
                    active ? 'bg-faved text-white' : 'bg-card-bg text-primary'
                  }`}
                >
                  {person.name}
                </li>
              )
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default FilterBar
