import React from 'react';

export default function NotData() {
  return (
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
  );
}
