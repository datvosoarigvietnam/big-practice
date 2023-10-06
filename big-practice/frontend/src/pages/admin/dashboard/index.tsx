import Image from 'next/image';

import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import addStudentIcon from '@/common/icons/addStudentIcon.svg';
import addProfileIcon from '@/common/icons/addProfileIcon.svg';
import addAddressIcon from '@/common/icons/addressIcon.svg';
import Button from '@/components/Button';
const DashBoard: NextPageWithLayout = () => {
  return (
    <div className="flex-1">
      <div className="bg-[#FCFAFA]   ">
        <div className="flex-1 ">
          {/* HEader */}
          <div className="flex justify-between pt-9 flex-col gap-5  md:flex-row pl-10 pr-10  lg:pl-12 lg:pr-12 xl:pl-32 xl:pr-32">
            <div className=" ">
              <p className="font-kumbh-sans text-center font-semibold text-[#424242] leading-5 md:text-left">
                Learn how to launch faster
              </p>
              <p className="text-center md:text-left">
                watch our webinar for tips from our experts and get a limited
                time offer.
              </p>
            </div>
            <div className="flex justify-center items-center gap-12 pb-[12px]">
              <Image src={bellIcon} alt="" />
              <Button
                title="Log out"
                className="w-32 h-10 rounded-lg font-kumbh-sans text-white"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="mt-14 pl-10 pr-10  lg:pl-20 lg:pr-12 xl:pl-32 xl:pr-32 ">
        <h1 className="font-kumbh-sans text-base text-center md:text-center  font-bold md:font-semibold md:text-2xl lg:text-4xl lg:text-left">
          Welcome to your dashboard, Udemy school
        </h1>
        <p className="mt-6 text-[#4F4F4F] font-kumbh-sans font-semibold pl-2 text-center md:pl-20 md:text-center md:text-2xl lg:pl-20 lg:text-left ">
          Uyo/school/@teachable.com
        </p>
        <div className="mt-2 x pt-10 md:pt-[70px] pl-10 pr-10  lg:pl-20 lg:pr-12 xl:pl-32 xl:pr-32">
          <div className="flex flex-col gap-10">
            <div className="flex items-center md:items-start gap-5 hover:cursor-pointer">
              <Image src={addProfileIcon} alt="" />
              <div className="flex flex-col md:gap-2 lg:gap-4">
                <p className=" text-[#4F4F4F] font-kumbh-sans font-medium md:text-xl">
                  Add other admins
                </p>
                <p className="hidden md:block">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5  hover:cursor-pointer">
              <Image src={addStudentIcon} alt="" />
              <div className="flex flex-col md:gap-2 lg:gap-4">
                <p className=" text-[#4F4F4F] font-kumbh-sans font-medium md:text-xl">
                  Add other admins
                </p>
                <p className="hidden md:block">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5  hover:cursor-pointer">
              <Image src={addStudentIcon} alt="" />
              <div className="flex flex-col md:gap-2 lg:gap-4">
                <p className=" text-[#4F4F4F] font-kumbh-sans font-medium md:text-xl">
                  Add other admins
                </p>
                <p className="hidden md:block">
                  Create rich course content and coaching products for your
                  students. When you give them a pricing plan, they’ll appear on
                  your site!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
DashBoard.Layout = MainLayout;
export default DashBoard;
