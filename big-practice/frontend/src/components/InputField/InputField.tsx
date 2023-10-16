import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useContext,
  useState,
} from 'react';
import { Control, Controller } from 'react-hook-form';

import eyeClose from '@/common/icons/eye_close';
import eyeOpen from '@/common/icons/eye_open';
import { IFormValues } from '@/pages/signup/create-account';
import { LabelContext } from '@/store/StepperDataContenxt';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormValues | any>;
  name: string;
  placeholder: string;
  label?: string;
  value?: string;
}

export default function InputField({
  control,
  name,
  placeholder,
  type,
  label,
  value,
  ...props
}: IProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const valueContext = useContext(LabelContext);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const customOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    valueContext.setSenderInfo(name)(e);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          {label && (
            <label
              htmlFor={name}
              className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
            >
              {label}
            </label>
          )}
          <div className="relative cursor-pointer inline-block">
            <input
              id={name}
              {...props}
              {...field}
              placeholder={placeholder}
              className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px] font-medium text-[#8A8A8A] font-[Kumbh Sans] lg:w-[250px] w-full"
              type={
                type === 'password'
                  ? isPasswordVisible
                    ? 'text'
                    : 'password'
                  : type
              }
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
                customOnChange(e);
              }}
            />
            {type === 'password' && (
              <div
                className="absolute right-[15px] top-[30%] cursor-pointer z-50"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? eyeOpen : eyeClose}
              </div>
            )}
          </div>
        </div>
      )}
    />
  );
}
