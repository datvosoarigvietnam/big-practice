import React, { useState } from 'react'
import { Todo } from './Todo'
import { useDesktop, useMobile, useTablet } from '@/hooks'
import Pagination from '../Pagination'
import Spinner from '../Spinner'
// import { notFound } from 'next/navigation'

export interface ITodo {
  title: string
  creator: string
  status: string
  desc: string
  createAt: string
  id: string
}

export interface IProps {
  todos?: ITodo[] | undefined
}
const TodoList: React.FC<IProps> = ({ todos }: IProps) => {
  const isMobile = useMobile()
  const isTablet = useTablet()
  const isDesktop = useDesktop()
  const [currentPage, setCurrentPage] = useState(1)
  if (!todos) {
    return <></>
  }
  const recordsPerPage = isMobile ? 5 : isTablet ? 10 : isDesktop ? 15 : 20
  const nPage = Math.ceil(todos.length / recordsPerPage)
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records: ITodo[] = todos.slice(firstIndex, lastIndex)

  return (
    <>
      {records ? (
        <div className="">
          {!records.length && (
            <>
              <h1 className="text-center text-3xl">No data in here</h1>
            </>
          )}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-2 px-3 ${
              isMobile ? 'w-[calc(100vw-80px)]' : 'w-[calc(100vw-180px)]'
            } `}
          >
            {records.map((todo: ITodo) => {
              return <Todo key={todo.id} todo={todo} />
            })}
          </div>
          <div>
            <Pagination
              page={nPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default TodoList
