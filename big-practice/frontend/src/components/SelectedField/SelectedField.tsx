import { LabelContext } from '@/store/StepperDataContenxt';
import React, { ChangeEvent, SelectHTMLAttributes, useContext } from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: any[];
  control: Control<FieldValues, any>;
  defaultOption?: string | number;
  isFullWith?: boolean;
}

export default function SelectedField({
  name,
  control,
  options = [],
  defaultOption,
  isFullWith,
  ...rest
}: IProps) {
  const value = useContext(LabelContext);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          {...rest}
          className={`${
            isFullWith ? 'w-full' : 'w-[250px]'
          } outline-none rounded border-[0.5px] py-2 pl-[13px]  font-medium text-[#8A8A8A] font-kumbh-sans md:w-[250px] `}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            value.handleChange(name)(e)
          }
        >
          <option value={options[0]} defaultValue={defaultOption}>
            {defaultOption}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    />
  );
}
