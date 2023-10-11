import React, { InputHTMLAttributes, useState } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';

import eyeClose from '@/common/icons/eye_close';
import eyeOpen from '@/common/icons/eye_open';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  label?: string;
}

export default function InputField({
  control,
  name,
  placeholder,
  type,
  label,
  ...props
}: IProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const coppyType = type;
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
              className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
              type={
                type === 'password'
                  ? isPasswordVisible
                    ? 'text'
                    : 'password'
                  : type
              }
            />
            {coppyType === 'password' ? (
              <div
                className="absolute right-[15px] top-[30%] cursor-pointer z-50"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? eyeOpen : eyeClose}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    />
  );
}
