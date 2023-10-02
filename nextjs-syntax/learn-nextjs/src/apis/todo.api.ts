// // import { Product, ProductList, ProductListConfig } from '../types/product.type'
// import { SuccessRepone } from '../types/utils.type'
import { SuccessRepone } from '@/types/utils.type'
import http from '../utils/http'
import { ITodo } from '@/components/TodoList/TodoList'

const URL = 'todolist'
const todoApi = {
  addNewTodo(todo: Omit<ITodo, 'id'>) {
    return http.post<SuccessRepone<Omit<ITodo, 'id'>>>(URL, { ...todo })
  },
  deleteTodo(id: string) {
    return http.delete(`${URL}/${id}`)
  },
  getDetailTodo(id: string) {
    return http.get<ITodo>(`${URL}/${id}`)
  },
}

export default todoApi
