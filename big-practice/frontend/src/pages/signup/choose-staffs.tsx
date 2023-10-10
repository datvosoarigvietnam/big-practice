import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from '@/components/Button';
import SelectedField from '@/components/SelectedField';
import StepperCustom from '@/components/Stepper';
import { IInfor, LabelContext } from '@/store/StepperDataContenxt';
export default function ChooseStaffs() {
  const { control, handleSubmit } = useForm({});
  const { infor, nextPage } = useContext(LabelContext);
  const optionStaff = [10, 20, 30, 40];
  const [options, setOptions] = useState([]);
  const getCitys = async () => {
    try {
      const res = await axios.get('https://provinces.open-api.vn/api/?depth=1');
      console.log(res.data);
      const option = res.data.map((item: IInfor) => item.name);
      setOptions(option);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getCitys();
  }, []);
  const onSubmit = () => {
    nextPage();
  };
  return (
    <div>
      <div className="pt-[100px] flex justify-center items-center flex-col">
        <h1 className="mb-[54px] text-center text-4xl break-keep md:w-[665px] text-[#4F4F4F] font-kumbh-sans font-semibold">
          Udemy school, Choose your staffs
        </h1>
        <div className="container mx-auto w-full md:w-[520px] bg-white rounded">
          <div className="pt-[20px] md:pt-[71px] md:px-[132px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-[20px] flex-col ">
                <div className="pl-[10px] pr-[10px] md:p-0">
                  <SelectedField
                    control={control}
                    name="numberOfStaff"
                    options={optionStaff}
                    defaultOption={infor.numberOfStaff || 'Number of staff'}
                    isFullWith={true}
                  />
                </div>
                <div className="pl-[10px] pr-[10px] md:p-0">
                  <SelectedField
                    control={control}
                    name="schoolAddress"
                    options={options}
                    defaultOption={infor.schoolAddress || 'School Address'}
                    isFullWith={true}
                  />
                </div>
              </div>
              <div className="mt-[12px] px-[10px] md:px-[0]">
                <Button title="Next" />
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
