import Link from 'next/link';
import React, { useContext } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { LabelContext } from '@/store/StepperDataContenxt';
export interface IFormValues extends FieldValues {
  adminName: string;
  schoolName: string;
  emailSchool: string;
}
export default function CreateAccount() {
  const value = useContext(LabelContext);
  const { control, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      adminName: '',
      schoolName: '',
      emailSchool: '',
    },
  });
  const btnDisbaled =
    value.infor.name.adminName.length > 0 &&
    value.infor.name.emailSchool.length > 0 &&
    value.infor.name.schoolName.length > 0;
  console.log(btnDisbaled);

  return (
    <div className="pt-[100px] flex justify-center items-center flex-col">
      <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
        Welcome, create your school account
      </h1>
      <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
        <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
          <form
            onSubmit={handleSubmit((values) => {
              console.log(values);
            })}
          >
            <h2 className="text-center md:w-[238px] mb-[38px] text-[#667085] font-medium leading-6">
              It is our great pleasure to have you on board!
            </h2>
            <div className="flex gap-[14px] flex-col ">
              <div className="pl-[10px] pr-[10px] md:p-0">
                <InputField
                  control={control as Control<IFormValues>}
                  name="adminName"
                  placeholder="Enter the name of admin(*)"
                  type="text"
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <InputField
                  control={control as Control<IFormValues>}
                  name="schoolName"
                  placeholder="Enter the name of school"
                  type="text"
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <InputField
                  control={control as Control<IFormValues>}
                  name="emailSchool"
                  placeholder="Enter the school email"
                  type="text"
                />
              </div>
              <div className="mt-[30px] px-[10px] md:px-[0]">
                <Button title="Next" />
              </div>
            </div>
          </form>
        </div>
        <div className="text-center pt-[14px] pb-[58px]">
          <p className="font-normal text-xs text-[#667085] font-sans leading-6">
            Already have an account?{' '}
            <Link href="/signin">
              <span className="text-[#2D88D4] font-bold text-xs">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
