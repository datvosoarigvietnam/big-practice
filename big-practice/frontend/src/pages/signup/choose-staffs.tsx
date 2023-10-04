import Button from '@/components/Button';
import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';
import StepperCustom from '@/components/Stepper';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function ChooseStaffs() {
  const { control } = useForm({});
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div>
      <div className="pt-[100px] flex justify-center items-center flex-col">
        <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
          Udemy school, Choose your staffs
        </h1>
        <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
          <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
            <form>
              <div className="flex gap-[20px] flex-col ">
                <div className="pl-[10px] pr-[10px] md:p-0">
                  <SelectedField
                    control={control}
                    name="admin_name"
                    options={options}
                    defaultOption="Number of staff"
                  />
                </div>
                <div className="pl-[10px] pr-[10px] md:p-0">
                  <SelectedField
                    control={control}
                    name="admin_name"
                    options={options}
                    defaultOption="School address"
                  />
                </div>
              </div>
              <div className="mt-[12px] px-[10px] md:px-[0]">
                <Button />
              </div>
            </form>
          </div>
          <div className="text-center pt-[14px] pb-[58px]">
            <p className="font-normal text-xs text-[#667085] font-sans leading-6">
              Already have an account?{' '}
              <Link href="/">
                <span className="text-[#2D88D4] font-bold text-xs">
                  Sign up
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
