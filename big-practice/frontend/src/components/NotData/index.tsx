import Image from 'next/image';
import React from 'react';

import nodata from '@/common/icons/NodataStudent.svg';
export default function NotData() {
  return (
    <div className="md:pl-10 mt-8">
      <div className="w-full h-[420px] bg-gray-200 flex flex-col justify-end items-center gap-1 px-4">
        <Image src={nodata} alt="nodata" />
        <h1 className="text-[#4F4F4F] font-kumbh-sans text-3xl font-semibold mt-8">
          No data at this time
        </h1>
        <p className="pb-20 text-sm font-normal">
          Teachers will appear here after they enroll in your school.
        </p>
      </div>
    </div>
  );
}
