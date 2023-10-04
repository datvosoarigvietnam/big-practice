import React, { InputHTMLAttributes, useState } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';
import eyeClose from '../../../public/eye_close';
import eyeOpen from '../../../public/eye_open';
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
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          {label && (
            <label
              htmlFor={name}
              className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter pl-3"
            >
              {label}
            </label>
          )}
          <div className="relative cursor-pointer">
            <input
              id={name}
              {...props}
              {...field}
              placeholder={placeholder}
              className="w-full outline-none rounded border-[0.5px] py-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans]  md:w-[250px]"
              type={
                type === 'password'
                  ? isPasswordVisible
                    ? 'text'
                    : 'password'
                  : type
              }
            />
            {type === 'password' ? (
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
