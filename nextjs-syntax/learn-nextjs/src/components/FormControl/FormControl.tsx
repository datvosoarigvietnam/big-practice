import { useForm } from 'react-hook-form'
import InputControl from '../InputControl/InputControl'
import RadioButton from '../RadioButton'
import { formatDate } from '../common/constants'
import http from '@/utils/http'
import { useMutation } from '@tanstack/react-query'
import { ITodo } from '../TodoList/TodoList'
import todoApi from '@/apis/todo.api'
import Spinner from '../Spinner'
import Toast from '../Toasts'
import { toast } from 'react-toastify'

export interface IForm {
  title: string
  creator: string
  createAt: string
  desc: string
  status: string
}
const initFormData: IForm = {
  title: '',
  creator: '',
  createAt: '',
  desc: '',
  status: 'New',
}
export const FormControl = ({ todoId }: any) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initFormData,
  })
  const timeNow = formatDate(new Date())

  const addTodoMutation = useMutation({
    mutationFn: (todo: Omit<ITodo, 'id'>) => todoApi.addNewTodo(todo),
  })

  const onSubmit = (values: IForm) => {
    if (todoId) {
      try {
        // http.put(`todolist/${todoId}`, { ...values })
      } catch (error) {}
    } else {
      addTodoMutation.mutate(
        { ...values },
        {
          onSuccess: (data) => {},
        },
      )
    }
  }
  const deleteTodo = (id: number | string) => {}
  return (
    <div>
      {addTodoMutation.isLoading && <Spinner />}
      {addTodoMutation.isSuccess &&
        toast.success('Add New Todo Success', { draggablePercent: 60 })}
      <h1 className="text-2xl font-bold text-center mb-16">
        {todoId ? 'Details Todo' : 'Add New Todo'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputControl
          name="title"
          control={control}
          title="Title"
          placeHolder="Enter your title ..."
        />
        <InputControl
          name="creator"
          control={control}
          title="Creator"
          placeHolder="Name of Creator"
        />
        <InputControl
          name="createAt"
          control={control}
          title="Create At"
          placeHolder={timeNow}
        />
        <InputControl
          name="desc"
          control={control}
          title="Description"
          placeHolder="Descscription Details"
        />
        {todoId && (
          <div className="flex justify-around">
            <RadioButton
              label="New"
              control={control}
              name="status"
              value={'New'}
            />
            <RadioButton
              label="Doing"
              control={control}
              name="status"
              value={'Doing'}
            />
            <RadioButton
              label="Done"
              control={control}
              name="status"
              value={'Done'}
            />
          </div>
        )}
        <div className="pt-10 text-center">
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#675BF1] px-10 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter tracking-[2px]"
            >
              {todoId ? 'Edit' : 'Save'}
            </button>
            <div className=" flex gap-2">
              <button
                type="button"
                className="bg-[#675BF1] px-10 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter tracking-[2px]"
                onClick={() => reset()}
              >
                Reset
              </button>
              <button
                type="button"
                className="bg-[#675BF1] px-10 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter tracking-[2px]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
