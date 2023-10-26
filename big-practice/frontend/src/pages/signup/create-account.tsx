import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { LabelContext } from '@/store/StepperDataContenxt';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';

export interface IFormValues extends FieldValues {
  adminName: string;
  schoolName: string;
  emailSchool: string;
}
export default function CreateAccount() {
  const valueContenxt = useContext(LabelContext);
  const defaultValues = useMemo<IFormValues>(() => {
    const values: IFormValues = {
      adminName: '',
      schoolName: '',
      emailSchool: '',
    };
    if (valueContenxt.infor.name.adminName !== '') {
      values.adminName = valueContenxt.infor.name.adminName;
    }
    if (valueContenxt.infor.name.emailSchool !== '') {
      values.emailSchool = valueContenxt.infor.name.emailSchool;
    }
    if (valueContenxt.infor.name.schoolName !== '') {
      values.schoolName = valueContenxt.infor.name.schoolName;
    }
    return values;
  }, [
    valueContenxt.infor.name.adminName,
    valueContenxt.infor.name.emailSchool,
    valueContenxt.infor.name.schoolName,
  ]);

  const schema = Yup.object({
    adminName: Yup.string().required('This field is required'),
    schoolName: Yup.string().required('This field is required'),
    emailSchool: Yup.string()
      .required('This field is required')
      .email('Invalid email'),
  });
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: IFormValues) => {
    valueContenxt.nextPage();
  };
  return (
    <div className="pt-[100px] flex justify-center items-center flex-col">
      <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
        Welcome, create your school account
      </h1>
      <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
        <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center md:w-[238px] mb-[38px] text-[#667085] font-medium leading-6">
              It is our great pleasure to have you on board!
            </h2>
            <div className="flex gap-[14px] flex-col ">
              <div className="pl-[10px] pr-[10px] md:p-0 flex flex-col gap-2">
                <InputField
                  control={control as Control<IFormValues>}
                  name="adminName"
                  placeholder="Enter the name of admin(*)"
                  type="text"
                  value={valueContenxt.infor.name.adminName}
                  fullWith="w-full"
                />{' '}
                <div className="min-h-[24px]">
                  {errors.adminName?.message && (
                    <p className="text-red-500 text-center text-base">
                      {errors.adminName?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="pl-[10px] pr-[10px] md:p-0 flex flex-col gap-2">
                <InputField
                  control={control as Control<IFormValues>}
                  name="schoolName"
                  placeholder="Enter the name of school"
                  type="text"
                  value={valueContenxt.infor.name.schoolName}
                  fullWith="w-full"
                />
                <div className="min-h-[24px]">
                  {errors.schoolName?.message && (
                    <p className="text-red-500 text-center text-base">
                      {errors.schoolName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0 flex flex-col gap-2">
                <InputField
                  control={control as Control<IFormValues>}
                  name="emailSchool"
                  placeholder="Enter the school email"
                  type="text"
                  value={valueContenxt.infor.name.emailSchool}
                  fullWith="w-full"
                />
                <div className="min-h-[2px]">
                  {errors.emailSchool?.message && (
                    <p className="text-red-500 text-center">
                      {errors.emailSchool?.message}
                    </p>
                  )}
                </div>
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
