// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/Button';
import InputField from '@/components/InputField';
import StepperCustom from '@/components/Stepper';
import { LabelContext } from '@/store/StepperDataContenxt';
import { yupResolver } from '@hookform/resolvers/yup';
export default function ChoosePassword() {
  const { infor, nextPage } = useContext(LabelContext);

  const defaultValues = useMemo(() => {
    const values = {
      password: '',
    };
    if (infor.password !== '') {
      values.password = infor.password;
    }
    if (infor.confirmPassword !== '') {
      values.confirmPassword = infor.confirmPassword;
    }

    return values;
  }, [infor.password, infor.confirmPassword]);

  const schema = Yup.object({
    password: Yup.string()
      .required('Password field is required')
      .min(8, 'Min length is 8')
      .max(20, 'Max length is 20'),
    confirmPassword: Yup.string()
      .required('Confirm password field is required')
      .min(8, 'Min length is 8')
      .max(20, 'Max length is 20'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<{ password: string; confirmPassword: string }>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    if (infor.password === infor.confirmPassword) {
      nextPage();
    } else {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
    }
  };

  return (
    <div>
      <div className="pt-[100px] flex justify-center items-center flex-col">
        <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
          Udemy school, Choose your password
        </h1>
        <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
          <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-[14px] flex-col ">
                <div className="pl-[10px] pr-[10px] md:p-0 flex flex-col gap-3">
                  <InputField
                    control={control}
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    label="Choose a password"
                    value={infor.password}
                    fullWith="w-full"
                  />
                  <div className="min-h-[24px]">
                    {errors.password && (
                      <p className="text-red-500 text-center">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="pl-[10px] pr-[10px] md:p-0 flex flex-col gap-3">
                  <InputField
                    control={control}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type="password"
                    label="Confirm password"
                    value={infor.confirmPassword}
                    fullWith="w-full"
                  />
                  <div className="min-h-[24px]">
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-center">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-[10px] px-[10px] md:px-[0]">
                  <Button title="Next" />
                </div>
              </div>
            </form>
          </div>
          <div className="text-center pt-[14px] pb-[58px]">
            <p className="font-normal text-xs text-[#667085] font-sans leading-6">
              Already have an account?{' '}
              <Link href="/signin">
                <span className="text-[#2D88D4] font-bold text-xs">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[110px]">
        <StepperCustom />
      </div>
    </div>
  );
}
