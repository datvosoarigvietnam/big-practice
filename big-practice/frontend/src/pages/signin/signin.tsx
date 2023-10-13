import Link from 'next/link';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useMutation } from '@tanstack/react-query';
import adminApi from '@/apis/admin.api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { AppContext } from '@/store/AppContext';

interface ILoginForm {
  emailSchool: string;
  password: string;
}
export default function SignIn() {
  const { control, handleSubmit } = useForm<ILoginForm>({});
  const router = useRouter();
  const signinMutation = useMutation({
    mutationFn: (values: ILoginForm) => adminApi.login(values),
  });
  const { setAuthenticated } = useContext(AppContext)
  const onSubmit = (values: ILoginForm) => {
    signinMutation.mutate(values, {
      onSuccess: (value) => {
        localStorage.setItem('access_token', value.data?.result.access_token)
        setAuthenticated(value.data?.result.access_token)
        toast.success('Login Success');
        router.replace('/admin/dashboard');
      },
      onError: (error: any) => {
        toast.error(error?.response?.data.errors.emailSchool.msg);
      },
    });
  };

  return (
    <div className="pt-[100px] flex justify-center items-center flex-col">
      <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
        Welcome, Log into you account
      </h1>
      <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
        <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center md:w-[238px] mb-[38px] text-[#667085] font-medium leading-6">
              It is our great pleasure to have you on board!
            </h2>
            <div className="flex gap-[14px] flex-col ">
              <div className="pl-[10px] pr-[10px] md:p-0">
                <InputField
                  control={control}
                  name="emailSchool"
                  placeholder="Enter the email of school"
                  type="text"
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <InputField
                  control={control}
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
              <div className="mt-[30px] px-[10px] md:px-[0]">
                <Button title="Login" />
              </div>
            </div>
          </form>
        </div>
        <div className="text-center pt-[14px] pb-[58px]">
          <p className="font-normal text-xs text-[#667085] font-sans leading-6">
            Already have an account?{' '}
            <Link href="/signup">
              <span className="text-[#2D88D4] font-bold text-xs">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
