import React, { InputHTMLAttributes } from 'react'
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form'
import { IForm } from '../FormControl/FormControl'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  control: any
  myDefaultChecked?: string
}

export default function RadioButton({
  label,
  control,
  name,
  value,
  myDefaultChecked,
}: RadioButtonProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              {...field}
              defaultChecked={
                myDefaultChecked ? value === myDefaultChecked : value === 'New'
              }
              onChange={(e) => field.onChange(e.target.value)}
              value={value}
            />
            <span>{label}</span>
          </label>
        )
      }}
    />
  )
}
