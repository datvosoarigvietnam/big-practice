import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { Column } from '@/@types/Table.type';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import finIcon from '@/common/icons/findIcon.svg';
import Button from '@/components/Button';
import NotData from '@/components/NotData';
import TableV2 from '@/components/Table/TableV2';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import AddStudentPopup from './StudentPopup';
import { useMutation, useQuery } from '@tanstack/react-query';
import studentApi from '@/apis/student.api';
import { IStudent } from '@/@types/student.type';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import ConfirmForm from '@/components/ConfirmModal';
import ConfirmationModal from '@/components/ConfirmModal/ConfirmModal';
import { queryClient } from '@/pages/_app';

const columns: Column[] = [
  { key: 'name', header: 'Name' },
  { key: '_id', header: 'Student ID' },
  { key: 'email', header: 'Email' },
  { key: 'class', header: 'Class' },
  { key: 'gender', header: 'Gender' },
];

const StudentPage: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showStudentPopup, setShowStudentPopup] = useState(false);
  const [detailStudent, setDetailStudent] = useState<IStudent | null>();
  const [idStudent, setIdStudent] = useState<string>();
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const router = useRouter();
  const handleShowPopup = () => {
    setShowStudentPopup(true);
  };
  const handleClosePopup = () => {
    setDetailStudent(null);
    setShowStudentPopup(false);
  };
  // const handleRowClick = (id: number) => {
  //   router.push(`/${router.pathname}/${id}`);
  // };
  const { data: studentList, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: () => studentApi.getStudents(),
  });
  const { data: classList } = useQuery({
    queryKey: ['classes'],
    queryFn: () => studentApi.getClass(),
  });
  const deleteStudent = useMutation({
    mutationFn: (id: string) => studentApi.deleteStudent(id),
    onSuccess: () => {
      toast.success('Delete student success!');
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
    },
    onError: (error: AxiosError) => {
      // @ts-ignore
      toast.error(error.response?.data.message);
    },
  });
  const studentData: IStudent[] = useMemo(() => {
    return studentList?.data.map((student: IStudent) => ({
      name: student.fullName,
      _id: student._id,
      email: student.email,
      class: student?.classSchool?.name,
      gender: student.gender,
    }));
  }, [studentList]);

  const classOption = classList?.data?.map(
    (className: { name: string }) => className.name,
  );

  // Pagination
  const recordsPerPage = 9;
  const nPage = Math.ceil(studentData?.length / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records: IStudent[] = studentData?.slice(firstIndex, lastIndex);

  const handleEdit = (id: string) => {
    const student = studentList?.data.find(
      (student: IStudent) => student._id === id,
    );
    setDetailStudent(student);
    setShowStudentPopup(true);
  };
  const onClickDelete = (id: string) => {
    setIdStudent(id);
    setShowModalConfirm(true);
  };
  const handleDeleteStudent = () => {
    deleteStudent.mutate(idStudent as string);
  };
  return (
    <div className="container mx-auto md:px-4 lg:px-20 flex-1">
      {/* Header */}
      {isLoading && <Spinner />}
      {deleteStudent.isLoading && <Spinner />}
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
      {records?.length ? (
        <>
          <TableV2
            columns={columns}
            data={records}
            // onRowClick={handleRowClick}
            handleEdit={handleEdit}
            onDeleteClick={onClickDelete}
          />
          <Pagination
            page={nPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <NotData />
      )}
      {showStudentPopup && (
        <AddStudentPopup
          onClose={handleClosePopup}
          classOption={classOption}
          detailStudent={detailStudent}
        />
      )}
      {showModalConfirm && (
        <ConfirmationModal
          isOpen={showModalConfirm}
          onClose={() => setShowModalConfirm(false)}
          onConfirm={handleDeleteStudent}
          message="Do you want to delete this student?"
        />
      )}
    </div>
  );
};

StudentPage.Layout = MainLayout;

export default StudentPage;
