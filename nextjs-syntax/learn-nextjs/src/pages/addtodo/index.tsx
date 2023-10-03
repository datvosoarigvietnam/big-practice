import { FormControl } from '@/components/FormControl/FormControl'
import { MainLayout } from '@/components/layout'
import { useForm } from 'react-hook-form'
import { NextPageWithLayout } from '../../../models/common'

const AddTodo: NextPageWithLayout = (props) => {
  return (
    <div className="flex-1 flex justify-center items-center mt-[-100px] ">
      <FormControl />
    </div>
  )
}

AddTodo.Layout = MainLayout

export default AddTodo
