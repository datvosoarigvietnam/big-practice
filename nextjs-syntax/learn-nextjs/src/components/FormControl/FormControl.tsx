import { useForm } from 'react-hook-form'
import InputControl from '../InputControl/InputControl'
import RadioButton from '../RadioButton'
import { formatDate } from '../common/constants'
import { useMutation } from '@tanstack/react-query'
import { ITodo } from '../TodoList/TodoList'
import todoApi from '@/apis/todo.api'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
export interface IForm {
  title: string
  creator: string
  createAt: string
  desc: string
  status: string
  id: string
}
const initFormData: IForm = {
  title: '',
  creator: '',
  createAt: '',
  desc: '',
  status: 'New',
  id: '',
}
export const FormControl = ({
  todoDetail,
}: {
  todoDetail?: ITodo | undefined
}) => {
  const [formData, setFormData] = useState<IForm>(initFormData)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formData,
  })
  const router = useRouter()
  const timeNow = formatDate(new Date())

  const addTodoMutation = useMutation({
    mutationFn: (todo: Omit<ITodo, 'id'>) => todoApi.addNewTodo(todo),
  })
  const deleteTodoMutation = useMutation({
    mutationFn: (id: string) => todoApi.deleteTodo(id),
  })
  const onSubmit = (todo: IForm) => {
    if (todoDetail?.id) {
      try {
      } catch (error) {}
    } else {
      addTodoMutation.mutate({ ...todo })
    }
  }
  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id, {
      onSuccess: () => {
        toast.success('Delete Todo Success')
        router.push('/todos')
      },
    })
  }

  useEffect(() => {
    if (todoDetail) {
      setFormData(todoDetail)
    }
  }, [todoDetail])

  return (
    <div>
      {addTodoMutation.isLoading && <Spinner />}
      {addTodoMutation.isSuccess &&
        toast.success('Add New Todo Success', { draggablePercent: 60 })}
      <h1 className="text-2xl font-bold text-center mb-16">
        {formData?.id ? 'Details Todo' : 'Add New Todo'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputControl
          name="title"
          control={control}
          title="Title"
          placeHolder="Enter your title ..."
          value={formData.title}
        />
        <InputControl
          name="creator"
          control={control}
          title="Creator"
          placeHolder="Name of Creator"
          value={formData.creator}
        />
        <InputControl
          name="createAt"
          control={control}
          title="Create At"
          placeHolder={timeNow}
          value={formData.createAt}
        />
        <InputControl
          name="desc"
          control={control}
          title="Description"
          placeHolder="Descscription Details"
          value={formData.desc}
        />
        {formData?.id && (
          <div className="flex justify-around">
            <RadioButton
              label="New"
              control={control}
              name="status"
              value={'New'}
              myDefaultChecked={formData.status}
            />
            <RadioButton
              label="Doing"
              control={control}
              name="status"
              value={'Doing'}
              myDefaultChecked={formData.status}
            />
            <RadioButton
              label="Done"
              control={control}
              name="status"
              value={'Done'}
              myDefaultChecked={formData.status}
            />
          </div>
        )}
        <div className="pt-10 text-center">
          <div className={`${formData?.id && 'flex gap-2'}`}>
            <button
              type="submit"
              className="bg-[#675BF1] px-10 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter tracking-[2px]"
            >
              {formData?.id ? 'Edit' : 'Save'}
            </button>
            {formData?.id && (
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
                  onClick={() => deleteTodo(formData?.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
