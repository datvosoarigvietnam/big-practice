import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';

import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { IInfor, LabelContext } from '@/store/StepperDataContenxt';
import StepperCustom from '@/components/Stepper';

export default function ConfirmForm() {
  const { control, handleSubmit } = useForm<IInfor>();
  const { infor } = useContext(LabelContext);

  const onSubmit = () => {
    console.log(infor);
  };

  return (
    <div className="pt-[50px] flex justify-center items-center flex-col">
      <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
        Confirm Your Information
      </h1>
      <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
        <div className="pt-[20px] md:pt-[40px] md:px-[132px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-[14px] flex-col ">
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  Admin Name:
                </label>
                <input
                  type="text"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.name.adminName}
                  disabled
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  Email School:
                </label>
                <input
                  type="text"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.name.emailSchool}
                  disabled
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  School Name:
                </label>
                <input
                  type="text"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.name.schoolName}
                  disabled
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  Password:
                </label>
                <InputField
                  control={control}
                  name="password"
                  type="password"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.password}
                  disabled
                  placeholder=""
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  Number of Staffs
                </label>
                <input
                  type="text"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.numberOfStaff}
                  disabled
                />
              </div>
              <div className="pl-[10px] pr-[10px] md:p-0">
                <label
                  htmlFor={''}
                  className="font-kumbh-sans text-[#667085] leading-6 font-normal -tracking-tighter "
                >
                  School Address
                </label>
                <input
                  type="text"
                  className="outline-none rounded border-[0.5px] py-3 sm:p-2 pl-[13px]  font-medium text-[#8A8A8A] font-[Kumbh Sans] sm:w-[250px] w-full"
                  value={infor.schoolAddress}
                  disabled
                />
              </div>
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
            <div className="pb-4">
              <Button title="Register" />
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-[110px]">
        <StepperCustom />
      </div>
    </div>
  );
}
