import todoApi from '@/apis/todo.api'
import { FormControl } from '@/components/FormControl/FormControl'
import { MainLayout } from '@/components/layout'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../../../models/common'
import Spinner from '@/components/Spinner'

interface IProps {}
const TodoDetails: NextPageWithLayout = (props: IProps) => {
  const router = useRouter()
  const todoId = Array.isArray(router.query.todoid)
    ? router.query.todoid[0]
    : router.query.todoid
  console.log(router)

  const { data: result } = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => todoApi.getDetailTodo(todoId || ''),
  })
  console.log('result', result?.data)

  return (
    <div className="flex-1 flex justify-center items-center ">
      {!result?.data ? <Spinner /> : <FormControl todoDetail={result?.data} />}
    </div>
  )
}

TodoDetails.Layout = MainLayout
export default TodoDetails
