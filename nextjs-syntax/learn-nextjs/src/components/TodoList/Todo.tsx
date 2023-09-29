import { GetStaticProps } from 'next'
import React from 'react'
import { ITodo } from './TodoList'

export const Todo = (props: any) => {
  return (
    <div className="border-[#675BF1]  rounded-md border-2">
      <div className="py-4 px-3">
        <div>
          <h3 className="text-base font-bold">Title: Tesst</h3>
          <p className="text-base font-semibold">Creator: Loc</p>
          <p className="text-[#04BE00] font-semibold">Status: New</p>
        </div>
        <div className="">
          <h3 className="text-base font-bold">Desscription:</h3>
          <p className="overflow-hidden overflow-ellipsis whitespace-pre-line line-clamp-2">
            This is a task, This is a task, This is a task, This
          </p>
        </div>
      </div>
    </div>
  )
}
