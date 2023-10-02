import React, { useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import InputControl from '../InputControl/InputControl'
import { formatDate } from '../common/constants'
import ButtonHeader from '../Header/ButtonHeader'
import RadioButton from '../RadioButton'
import { useRouter } from 'next/router'


export interface IForm {
    title: string
    creator: string
    createAt: string
    desc: string
    status: string
}
const initFormData: IForm = {
    title: "",
    creator: "",
    createAt: "",
    desc: "",
    status: "New"
}
export const FormControl = ({ todoId }: any) => {
    // const router = useRouter()
    console.log("TodoId", todoId);

    const { control, watch, handleSubmit } = useForm({
        defaultValues: initFormData
    })
    const onSubmit = (values: IForm) => {
        console.log(values)
    }
    const timeNow = formatDate(new Date())
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <InputControl name='title' control={control} title='Title' placeHolder='Enter your title ...' />
            <InputControl name='creator' control={control} title='Creator' placeHolder='Name of Creator' />
            <InputControl name='createAt' control={control} title='Create At' placeHolder={timeNow} />
            <InputControl name='desc' control={control} title='Description' placeHolder='Descscription Details' />
            {/* {router.id && ( */}
            <div>
                <RadioButton label='New' control={control} name='status' value={"New"} />
                <RadioButton label='Doing' control={control} name='status' value={"Doing"} />
                <RadioButton label='Done' control={control} name='status' value={"Done"} />
            </div>
            {/* } */}
            <div className="pt-10 text-center">
                <button type='submit' className='bg-[#675BF1] px-8 py-5 text-white font-semibold text-lg rounded-lg cursor-poiter'>Save</button>
            </div>
        </form>
    )
}
