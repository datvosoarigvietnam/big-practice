import React from 'react'
import { Todo } from './Todo'
import { useMobile } from '@/hooks'
import Pagination from '../Pagination'
import { notFound } from 'next/navigation'

export interface ITodo {
  title: string
  creator: string
  status: string
  desc: string
  id: string
}

export interface IProps {
  todos: ITodo[] | undefined
}
const TodoList: React.FC<IProps> = ({ todos }: IProps) => {
  const isMobile = useMobile()
  console.log('todos', todos)

  // if (!todos) {
  //   return notFound
  // }
  if (!todos) {
    return <></>
  }
  return (
    <div className="">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-2 px-3 ${isMobile ? 'w-[calc(100vw-80px)]' : 'w-[calc(100vw-180px)]'
          } `}
      >
        {todos.map((todo: ITodo) => {
          return <Todo key={todo.id} todo={todo} />
        })}
      </div>
      <Pagination />
    </div>
  )
}


export default TodoList
