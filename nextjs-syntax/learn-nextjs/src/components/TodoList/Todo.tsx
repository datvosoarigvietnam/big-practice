import React from 'react'
import { ITodo } from './TodoList'
import Link from 'next/link'

export const Todo = ({ todo }: { todo: ITodo }) => {
  return (
    <Link href={`http://localhost:3000/todos/${todo.id}`}>
      <div className="border-[#675BF1]  rounded-md border-2">
        <div className="py-4 px-3">
          <div>
            <h3 className="text-base font-bold">Title: {todo.title}</h3>
            <p className="text-base font-semibold">Creator: {todo.creator}</p>
            <p
              className={`text-${
                todo.status === 'Doing'
                  ? '[#F88F14]'
                  : todo.status === 'Done'
                  ? '[#675BF1]'
                  : '[#04BE00]'
              } font-semibold`}
            >
              Status: {todo.status}
            </p>
          </div>
          <div className="">
            <span className="text-base font-bold">Description:</span>
            <span className="overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-1">
              {todo.desc}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
