import TodoList from '@/components/TodoList'
import { NextPageWithLayout } from '../../models/common'
import { MainLayout } from '@/components/layout'
import { ITodo } from './todos'

interface IProps {
  todos?: ITodo[]
}

const Home: NextPageWithLayout = ({ todos }: IProps) => {
  return (
    <div className="">
      <TodoList todos={todos} />
    </div>
  )
}
Home.Layout = MainLayout
export default Home

export const getStaticProps = async () => {
  const res = await fetch('https://63f57b5a3f99f5855dc218a1.mockapi.io/todos')
  const todos = await res.json()
  return { props: { todos } }
}
