import React, { useEffect } from 'react'
import { NextPageWithLayout } from '../../../models/common'
import { MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { FormControl } from '@/components/FormControl/FormControl'
import axios from 'axios'

interface IProps {}
const TodoDetails: NextPageWithLayout = (props: IProps) => {
  const router = useRouter()
  //   console.log('Router', router.query.todoid)
  const getDetailTodo = async () => {
    try {
      const res = axios.get(
        `https://63f57b5a3f99f5855dc218a1.mockapi.io/todolist/${router.query.todoid}`,
      )
      console.log((await res).data)
    } catch (error) {
      throw error
      //   console.log(error)
    }
  }
  useEffect(() => {
    if (router.query.todoid) getDetailTodo()
  }, [router.query.todoid])
  return (
    <div className="flex-1 flex justify-center items-center translate-y-[-100px] sm:translate-y-[-150px]">
      <FormControl todoId={router.query.todoid} />
    </div>
  )
}

TodoDetails.Layout = MainLayout
export default TodoDetails
