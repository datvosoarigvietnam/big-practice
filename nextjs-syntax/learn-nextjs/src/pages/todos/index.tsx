import React from 'react'
import { NextPageWithLayout } from '../../../models/common'
import { MainLayout } from '@/components/layout'
import TodoList from '@/components/TodoList'

type Props = {}

const Product: NextPageWithLayout = (props: Props) => {
  return (
    <div>
      <TodoList />
    </div>
  )
}

Product.Layout = MainLayout

export default Product
