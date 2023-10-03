import React, { InputHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form'
import { IForm } from '../FormControl/FormControl'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<IForm, any>
  name: 'title' | 'creator' | 'createAt' | 'desc'
  title: string
  placeHolder: string
  value?: string
  disabled?: boolean
}
const InputControl: React.FC<IProps> = ({
  control,
  name,
  title,
  value,
  placeHolder,
  disabled,
}: IProps) => {
  return (
    <div className="flex  gap-2 flex-col sm:flex-row mb-3">
      <label htmlFor={name} className="sm:w-[100px]">
        {title}
      </label>
      <Controller
        control={control}
        rules={{
          required: 'This field is required.',
          maxLength: {
            value: 100,
            message: 'Maximum length is 100 characters',
          },
        }}
        name={name}
        render={({ field }) => {
          return (
            <input
              id={name}
              className=" border-b-2 border-black outline-none sm:w-[300px] pl-4 pb-2"
              placeholder={placeHolder}
              {...field}
              value={field.value || value}
              disabled={disabled}
            />
          )
        }}
      />
    </div>
  )
}

export default InputControl
