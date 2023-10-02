import React from 'react'
import { NextPageWithLayout } from '../../../models/common'
import { MainLayout } from '@/components/layout'
import TodoList from '@/components/TodoList'

type Props = {}
export interface ITodo {
  title: string
  creator: string
  status: string
  desc: string
  id: string
}

export interface IProps {
  todos?: ITodo[]
}
const Product: NextPageWithLayout = (props: IProps) => {
  console.log("Props", props);

  return (
    <div>
      <TodoList todos={props.todos} />
    </div>
  )
}

Product.Layout = MainLayout

export default Product

export const getStaticProps = async () => {
  const res = await fetch(
    'https://63f57b5a3f99f5855dc218a1.mockapi.io/todolist',
  )
  const todos = await res.json()
  return { props: { todos } }
}
