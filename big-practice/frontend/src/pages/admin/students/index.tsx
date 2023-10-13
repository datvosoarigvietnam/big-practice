import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Column } from '@/@types/Table.type';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import finIcon from '@/common/icons/findIcon.svg';
import Button from '@/components/Button';
import NotData from '@/components/NotData';
import TableV2 from '@/components/Table/TableV2';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import AddStudentPopup from './AddStudentPopup';

export interface IStudent {
  id: number;
  name: string;
  email: string;
  class: string;
  gender: 'Male' | 'Female';
}
const columns: Column[] = [
  { key: 'name', header: 'Name' },
  { key: 'class', header: 'Class' },
  { key: 'email', header: 'Email' },
  { key: 'gender', header: 'Gender' },
];
// const students: IStudent[] = [];
const students: IStudent[] = [
  {
    id: 1,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 2,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 3,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 4,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 5,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 6,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
  {
    id: 7,
    name: 'Alice',
    class: 'J20',
    email: 'alice@example.com',
    gender: 'Female',
  },
];
const StudentPage: NextPageWithLayout = () => {
  const [showStudentPopup, setShowStudentPopup] = useState(false);

  const router = useRouter();
  const handleShowPopup = () => {
    setShowStudentPopup(true);
  };
  const handleClosePopup = () => {
    setShowStudentPopup(false);
  };
  const handleRowClick = (id: number) => {
    router.push(`/${router.pathname}/${id}`);
  };

  return (
    <div className="container mx-auto md:px-4 lg:px-20 flex-1">
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
          Students
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button
            title="Export CSV"
            className="w-32 h-10 rounded-lg font-kumbh-sans"
          />
          <Button
            title="Add Students"
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
              placeholder="Search for a student by name or email "
              className="text-[#8A8A8A] w-full bg-inherit outline-none"
            />
          </div>
        </div>
      </div>
      {/* <NotData /> */}
      {/* <TableV2 columns={columns} data={students} onRowClick={handleRowClick} /> */}
      {students.length ? (
        <TableV2
          columns={columns}
          data={students}
          onRowClick={handleRowClick}
        />
      ) : (
        <NotData />
      )}
      {showStudentPopup && <AddStudentPopup onClose={handleClosePopup} />}
    </div>
  );
};

StudentPage.Layout = MainLayout;

export default StudentPage;
