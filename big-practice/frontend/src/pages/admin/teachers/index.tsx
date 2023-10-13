import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import Button from '@/components/Button';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import finIcon from '@/common/icons/findIcon.svg';
import AddTeacherPopup from './AddTeacherPopup';
import TableV2 from '@/components/Table/TableV2';
import NotData from '@/components/NotData';
import { Column } from '@/@types/Table.type';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import adminApi from '@/apis/admin.api';

export interface User {
  id: number;
  name: string;
  subject: string;
  email: string;
  class: string;
  gender: 'Male' | 'Female' | 'Other';
}

const columns: Column[] = [
  { key: 'name', header: 'Name' },
  { key: 'class', header: 'Class' },
  { key: 'subject', header: 'Jubject' },
  { key: 'email', header: 'Email' },
  { key: 'gender', header: 'Gender' },
];

const TeacherPage: NextPageWithLayout = () => {
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  const router = useRouter();
  const handleShowPopup = () => {
    setShowTeacherPopup(true);
  };
  const handleClosePopup = () => {
    setShowTeacherPopup(false);
  };
  const handleRowClick = (id: number) => {
    router.push(`/${router.pathname}/${id}`);
  };
  const { data: teacherList } = useQuery({
    queryKey: ['teachers'],
    queryFn: () => adminApi.getTeachers(),
  });
  const teacherData: User[] = useMemo(() => {
    return teacherList?.data?.map((item: any) => ({
      name: item.fullName,
      class: item.classSchool.name,
      subject: 'Math',
      email: item.email,
      gender: item.gender,
    }));
  }, [teacherList]);
  const { data: classList } = useQuery({
    queryKey: ['classes'],
    queryFn: () => adminApi.getClasses(),
  });
  const { data: subjectList } = useQuery({
    queryKey: ['subjects'],
    queryFn: () => adminApi.getSubjects(),
  });
  const classOption = classList?.data?.map(
    (className: { name: string }) => className.name,
  );
  const subjectOption = subjectList?.data.map(
    (subjectName: { name: string }) => subjectName.name,
  );
  return (
    <div className="container mx-auto md:px-4 lg:px-20 flex-1">
      {/* Header */}
      <div className="pt-5">
        <div className="flex justify-center items-center gap-4 pb-[12px] md:justify-end">
          <Image src={bellIcon} alt="" />
          <Button
            title="Logout"
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
      {teacherData?.length ? (
        <TableV2
          columns={columns}
          data={teacherData}
          onRowClick={handleRowClick}
        />
      ) : (
        <NotData />
      )}
      {showTeacherPopup && (
        <AddTeacherPopup
          onClose={handleClosePopup}
          classOption={classOption}
          subjectOption={subjectOption}
        />
      )}
    </div>
  );
};
TeacherPage.Layout = MainLayout;
export default TeacherPage;
