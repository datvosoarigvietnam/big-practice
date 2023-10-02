// // import { Product, ProductList, ProductListConfig } from '../types/product.type'
// import { SuccessRepone } from '../types/utils.type'
import { SuccessRepone } from '@/types/utils.type'
import http from '../utils/http'
import { ITodo } from '@/components/TodoList/TodoList'

// const URL = 'todos'
const todoApi = {
  addNewTodo(todo: Omit<ITodo, 'id'>) {
    // return http.get<SuccessRepone<ITodo[]>>(URL, { params })
    return http.post<ITodo>(`todolist`, { todo })
  },
  //   getProductDetail(id: string) {
  //     return http.get<SuccessRepone<Product>>(`${URL}/${id}`)
  //   },
}

export default todoApi
