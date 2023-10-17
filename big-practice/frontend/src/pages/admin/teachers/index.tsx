import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { Column } from '@/@types/Table.type';
import adminApi from '@/apis/admin.api';
import bellIcon from '@/common/icons/bell-notifi-icon.svg';
import finIcon from '@/common/icons/findIcon.svg';
import Button from '@/components/Button';
import NotData from '@/components/NotData';
import TableV2 from '@/components/Table/TableV2';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import AddTeacherPopup from './AddTeacherPopup';
import Spinner from '@/components/Spinner';
import { ITeacher } from '@/@types/teacher.type';
import Pagination from '@/components/Pagination';
import { toast } from 'react-toastify';
import { queryClient } from '@/pages/_app';
import ConfirmationModal from '@/components/ConfirmModal/ConfirmModal';
// export interface ITeacher {
//   _id: number;
//   name: string;
//   subject: string;
//   email: string;
//   class: string;
//   gender: 'Male' | 'Female' | 'Other';
// }

const columns: Column[] = [
  { key: 'name', header: 'Name' },
  { key: 'class', header: 'Class' },
  { key: 'subjects', header: 'Subjects' },
  { key: 'email', header: 'Email' },
  { key: 'gender', header: 'Gender' },
];

const TeacherPage: NextPageWithLayout = () => {
  const [showTeacherPopup, setShowTeacherPopup] = useState(false);
  const [detailTeacher, setDetailTeacher] = useState<ITeacher | null>();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idDelete, setIdDelete] = useState('');
  const router = useRouter();
  const handleShowPopup = () => {
    setShowTeacherPopup(true);
  };
  const handleClosePopup = () => {
    setShowTeacherPopup(false);
    setDetailTeacher(null);
  };

  const { data: teacherList, isLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: () => adminApi.getTeachers(),
  });

  const teacherData: ITeacher[] = useMemo(() => {
    return teacherList?.data?.map((item: any) => ({
      _id: item._id,
      name: item.fullName,
      class: item.classSchool.name,
      subject: item.subjects,
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
  const deleteTeacherMutation = useMutation({
    mutationFn: (id: string) => adminApi.deleteTeacher(id),
  });
  const handleRowClick = (id: string) => {
    // router.push(`/${router.pathname}/${id}`);
  };
  const handleEdit = (id: string) => {
    const teacher = teacherList?.data.find(
      (teacher: ITeacher) => teacher._id === id,
    );
    setDetailTeacher(teacher);
    setShowTeacherPopup(true);
  };

  const deleteClick = (teacherId: string) => {
    setIdDelete(teacherId);
    setIsDeleteModalOpen(true);
  };
  const handleDelete = () => {
    deleteTeacherMutation.mutate(idDelete, {
      onSuccess: () => {
        toast.success('Delete teacher success');
        queryClient.invalidateQueries({
          queryKey: ['teachers'],
        });
      },
    });
  };
  const classOption = classList?.data?.map(
    (className: { name: string }) => className.name,
  );
  const subjectOption = subjectList?.data.map(
    (subjectName: { name: string }) => subjectName.name,
  );
  const recordsPerPage = 10;
  const nPage = Math.ceil(teacherData?.length / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records: ITeacher[] = teacherData?.slice(firstIndex, lastIndex);

  return (
    <div className="container mx-auto md:px-4 lg:px-4 flex-1">
      {/* Header */}
      <div className="pt-5">
        <div className="flex justify-center items-center gap-4 pb-[12px] md:justify-end">
          <Image src={bellIcon} alt="" />
          <Button
            title="Logout"
            className="w-32 h-10 rounded-lg font-kumbh-sans text-white"
            onClick={() => {
              localStorage.removeItem('access_token');
              toast.success('Logout Success');
              router.push('/signin');
            }}
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
      <div className="flex mt-7  lg:pl-8">
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
      {isLoading && <Spinner />}
      {records?.length ? (
        <TableV2
          columns={columns}
          data={records}
          onRowClick={handleRowClick}
          isLoading={isLoading}
          handleEdit={handleEdit}
          onDeleteClick={deleteClick}
        />
      ) : (
        <NotData />
      )}
      {showTeacherPopup && (
        <AddTeacherPopup
          onClose={handleClosePopup}
          classOption={classOption}
          subjectOption={subjectOption}
          teacherDetail={detailTeacher}
        />
      )}
      <div className="">
        <Pagination
          page={nPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};
TeacherPage.Layout = MainLayout;
export default TeacherPage;
