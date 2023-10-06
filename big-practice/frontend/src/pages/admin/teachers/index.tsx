import Image from 'next/image';

import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import { useState } from 'react';
import Button from '@/components/Button';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import finIcon from '@/common/icons/findIcon.svg';
import AddTeacherPopup from './AddTeacherPopup';
const TeacherPage: NextPageWithLayout = () => {
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);

  const handleShowPopup = () => {
    setShowTeacherPopup(true);
  };
  const handleClosePopup = () => {
    setShowTeacherPopup(false);
  };

  return (
    <div className="container mx-auto px-3">
      {/* Header */}
      <div className="pt-5">
        <div className="flex justify-center items-center gap-4 pb-[12px] md:justify-end">
          <Image src={bellIcon} alt="" />
          <Button
            title="Log out"
            className="w-32 h-10 rounded-lg font-kumbh-sans text-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-4 md:justify-between md:flex-row">
        <p className="font-kumbh-sans font-semibold leading-5 text-[#4F4F4F]">
          Teachers
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button
            title="Export CSV"
            className="w-32 h-10 rounded-lg font-kumbh-sans"
          />
          <Button
            title="Add Teachers"
            className="w-32 h-10 rounded-lg font-kumbh-sans"
            onClick={handleShowPopup}
          />
        </div>
      </div>
      <div className="flex mt-7 md:pl-10">
        {/* Fillter */}
        <div className="flex flex-col justify-center flex-1  gap-4 md:flex-row">
          <select
            className="flex justify-between items-center px-4 py-4 text-[#C4C4C4] border-gray-400 border outline-none rounded sm:border-none"
            property=""
          >
            <option value="">Add filter</option>
          </select>
          <div className="flex flex-1 p-4 bg-gray-200 gap-4 rounded">
            <Image src={finIcon} alt="findIcon" className="flex-0" />
            <input
              placeholder="Search for a teacher by name or email "
              className="text-[#8A8A8A] w-full bg-inherit outline-none"
            />
          </div>
        </div>
      </div>
      <div className="md:pl-10 mt-8">
        <div className="w-full h-[420px] bg-gray-200 flex flex-col justify-end items-center gap-1 px-4">
          <h1 className="text-[#4F4F4F] font-kumbh-sans text-3xl font-semibold">
            No Teachers at this time
          </h1>
          <p className="pb-20 text-sm font-normal">
            Teachers will appear here after they enroll in your school.
          </p>
        </div>
      </div>
      {showTeacherPopup && <AddTeacherPopup onClose={handleClosePopup} />}
    </div>
  );
};
TeacherPage.Layout = MainLayout;
export default TeacherPage;