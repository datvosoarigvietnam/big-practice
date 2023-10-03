import todoApi from '@/apis/todo.api'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import InputControl from '../InputControl/InputControl'
import RadioButton from '../RadioButton'
import Spinner from '../Spinner'
import { ITodo } from '../TodoList/TodoList'
import { formatDate } from '../common/constants'
import ConfirmationModal from '../ConfirmationModal'
export interface IForm {
  title: string
  creator: string
  createAt: string
  desc: string
  status: string
  id: string
}
export const FormControl = ({
  todoDetail,
}: {
  todoDetail?: ITodo | undefined
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const defaultValues = useMemo<IForm>(() => {
    const values: IForm = {
      title: '',
      creator: '',
      createAt: formatDate(new Date()),
      desc: '',
      status: 'New',
      id: '',
    }
    if (todoDetail) {
      values.id = todoDetail.id
      values.title = todoDetail.title
      values.desc = todoDetail.desc
      values.creator = todoDetail.creator
      values.status = todoDetail.status
      values.createAt = todoDetail.createAt
    }
    return values
  }, [todoDetail])
  console.log('todoDetail', todoDetail)
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  })
  const router = useRouter()
  const timeNow = formatDate(new Date())

  const addTodoMutation = useMutation({
    mutationFn: (todo: Omit<ITodo, 'id'>) => todoApi.addNewTodo(todo),
  })

  const deleteTodoMutation = useMutation({
    mutationFn: (id: string) => todoApi.deleteTodo(id),
  })
  const editTodoMutation = useMutation({
    // mutationFn: (todo: ITodo, id: string) => todoApi.editTodo(todo, id)
    mutationFn: (todo: ITodo) => todoApi.editTodo(todo),
  })
  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate(id, {
      onSuccess: () => {
        toast.success('Delete Todo Success')
        router.push('/todos')
      },
    })
  }
  const onSubmit = (todo: ITodo) => {
    if (todoDetail?.id) {
      try {
        console.log('edit form todo', todo)
        editTodoMutation.mutate(todo, {
          onSuccess: () => {
            toast.success('Edit todo is success')
            router.push('/todos')
          },
        })
      } catch (error) {}
    } else {
      addTodoMutation.mutate(
        {
          title: todo.title,
          status: todo.status,
          createAt: todo.createAt,
          creator: todo.creator,
          desc: todo.desc,
        },
        {
          onSuccess: () => {
            toast.success('Add todo is success')
            router.push('/todos')
          },
        },
      )
    }
  }

  return (
    <div>
      {addTodoMutation.isLoading && <Spinner />}
      {deleteTodoMutation.isLoading && <Spinner />}
      {editTodoMutation.isLoading && <Spinner />}
      <h1 className="text-2xl font-bold text-center mb-16">
        {todoDetail?.id ? 'Details Todo' : 'Add New Todo'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center flex-col items-center  mb-6">
          <InputControl
            name="title"
            control={control}
            title="Title"
            placeHolder="Enter your title ..."
          />
          {errors.title && (
            <p className="text-red-800">{errors.title.message}</p>
          )}
        </div>
        <div className="flex justify-center flex-col items-center  mb-6">
          <InputControl
            name="creator"
            control={control}
            title="Creator"
            placeHolder="Name of Creator"
          />
          {errors.creator && (
            <p className="text-red-800">{errors.creator.message}</p>
          )}
        </div>
        <div className="flex justify-center flex-col items-center  mb-6">
          <InputControl
            name="createAt"
            control={control}
            title="Create At"
            placeHolder={timeNow}
            // value={todoDetail?.createAt}
            disabled={true}
          />
          {errors.creator && (
            <p className="text-red-800">{errors.creator.message}</p>
          )}
        </div>
        <div className="flex justify-center flex-col items-center  mb-6">
          <InputControl
            name="desc"
            control={control}
            title="Description"
            placeHolder="Descscription Details"
          />
          {errors.desc && <p className="text-red-800">{errors.desc.message}</p>}
        </div>
        {todoDetail?.id && (
          <div className="flex justify-around">
            <RadioButton
              label="New"
              control={control}
              name="status"
              value={'New'}
              myDefaultChecked={todoDetail?.status}
            />
            <RadioButton
              label="Doing"
              control={control}
              name="status"
              value={'Doing'}
              myDefaultChecked={todoDetail?.status}
            />
            <RadioButton
              label="Done"
              control={control}
              name="status"
              value={'Done'}
              myDefaultChecked={todoDetail?.status}
            />
          </div>
        )}
        <div className="pt-10 text-center">
          <div className={`${todoDetail?.id && 'flex gap-2'}`}>
            <button
              type="submit"
              className="bg-[#675BF1] px-10 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter tracking-[2px]"
            >
              {todoDetail?.id ? 'Edit' : 'Save'}
            </button>
            {todoDetail?.id && (
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
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => deleteTodo(todoDetail?.id as string)}
        message="Are you sure you want to delete this item?"
      />
    </div>
  )
}
