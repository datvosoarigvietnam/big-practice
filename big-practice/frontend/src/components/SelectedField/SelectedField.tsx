import React, { SelectHTMLAttributes } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: any[];
  control: Control<FieldValues, any>;
  defaultOption?: string;
}

export default function SelectedField({
  name,
  control,
  options = [],
  defaultOption,
  ...rest
}: IProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          {...rest}
          className="w-full outline-none rounded border-[0.5px] py-2 pl-[13px]  font-medium text-[#8A8A8A] font-kumbh-sans  md:w-[250px]"
        >
          <option value={options[0]} defaultValue={defaultOption}>
            {defaultOption}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}