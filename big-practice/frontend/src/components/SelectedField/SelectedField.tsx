import { ChangeEvent, SelectHTMLAttributes, useContext } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { LabelContext } from '@/store/StepperDataContenxt';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: any[];
  control: Control<FieldValues | any>;
  defaultOption?: string | number;
  isFullWith?: boolean;
  onUpdateSelectedSubjects?: (selectedSubjects: { name: string }[]) => void;
}

export default function SelectedField({
  name,
  control,
  options = [],
  defaultOption,
  isFullWith,
  onUpdateSelectedSubjects,
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
          // multiple
          className={`${
            isFullWith ? 'w-full' : 'w-[250px]'
          } outline-none rounded border-[0.5px] py-[12px] pl-[13px]  font-medium text-[#8A8A8A] font-kumbh-sans md:w-[250px] `}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value,
            );
            // setSelectedSubjects(selectedOptions);
            onUpdateSelectedSubjects &&
              onUpdateSelectedSubjects(
                selectedOptions.map((item) => ({ name: item })),
              );
            field.onChange(e);
            value.handleChange(name)(e);
          }}
        >
          <option value={defaultOption}>{defaultOption}</option>
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
