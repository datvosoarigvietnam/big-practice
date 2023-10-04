import React, { InputHTMLAttributes } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
}

export default function InputField({ control, name, placeholder }: IProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          placeholder={placeholder}
          className="outline-none rounded border-[0.5px] py-3 pl-[13px] pr-[50px] font-medium text-[#8A8A8A] font-[Kumbh Sans] mx-[10px] "
        />
      )}
    />
  );
}
