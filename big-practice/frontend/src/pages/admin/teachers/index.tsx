import Image from 'next/image';
import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import Button from '@/components/Button';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
const TeacherPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto ">
      <div className="pt-5">
        <div className="flex justify-end items-center gap-4 pb-[12px]">
          <Image src={bellIcon} alt="" />
          <Button
            title="Log out"
            className="w-32 h-10 rounded-lg font-kumbh-sans "
          />
        </div>
      </div>
      <div className="">
        <p>Teacher</p>
        <div className="">
          <Button
            title="Export CSV"
            className="w-32 h-10 rounded-lg font-kumbh-sans bg-white text-[#2D88D4]"
          />
          <Button
            title="Add Teachers"
            className="w-32 h-10 rounded-lg font-kumbh-sans "
          />
        </div>
      </div>
    </div>
  );
};
TeacherPage.Layout = MainLayout;
export default TeacherPage;
