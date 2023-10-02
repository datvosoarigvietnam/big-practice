import React from 'react'
import { NextPageWithLayout } from '../../../models/common'
import { MainLayout } from '@/components/layout'
import { FormControl } from '@/components/FormControl/FormControl'
import { Form, useForm } from 'react-hook-form'
import InputControl from '@/components/InputControl/InputControl'

// type Props = {}

const AddTodo: NextPageWithLayout = (props) => {
    const { control, watch, handleSubmit } = useForm()
    console.log(watch("test"))
    const onSubmit = (values: any) => {
        console.log(values)
    }
    return (
        <div className='flex-1 flex justify-center items-center translate-y-[-100px] sm:translate-y-[-150px]'>
            <FormControl />
        </div>
    )
}

AddTodo.Layout = MainLayout

export default AddTodo

