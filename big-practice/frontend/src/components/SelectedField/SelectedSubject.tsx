import { ChangeEvent, SelectHTMLAttributes } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options?: string[];
  control: Control<FieldValues | any>;
  defaultOption?: string | number;
  isFullWidth?: boolean;
  onUpdateSelectedSubjects?: (selectedSubjects: { name: string }[]) => void;
  tempOptions?: string[];
  value?: string;
}

export default function SelectedSubject({
  name,
  control,
  options = [],
  defaultOption = 'Select Subject',
  isFullWidth,
  onUpdateSelectedSubjects,
  tempOptions,
  value,
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
          value={value}
          // multiple
          className={`${
            isFullWidth ? 'w-full' : 'w-[250px]'
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
          }}
        >
          <option value={defaultOption}>{value}</option>
          {(tempOptions as string[])?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    />
  );
}
