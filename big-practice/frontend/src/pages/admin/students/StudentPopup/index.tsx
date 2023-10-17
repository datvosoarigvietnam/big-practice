import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';
import { IStudent } from '@/@types/student.type';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import studentApi from '@/apis/student.api';
import Spinner from '@/components/Spinner';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { queryClient } from '@/pages/_app';
interface AddStudentPopupProps {
  onClose: () => void;
  classOption: string[];
  detailStudent: IStudent | null | undefined;
}

const AddTeacherPopup: React.FC<AddStudentPopupProps> = ({
  onClose,
  classOption,
  detailStudent,
}) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    classSchool: Yup.mixed(),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    password: detailStudent
      ? Yup.string()
      : Yup.string().required('Password is required'),
  });
  const router = useRouter();
  const genderOption = ['Male', 'Female', 'Other'];
  const defaultValues = useMemo(() => {
    const values: Omit<IStudent, '_id'> = {
      email: '',
      fullName: '',
      phone: '',
      classSchool: { name: '' },
      gender: '',
      password: '',
    };
    if (detailStudent?._id) {
      values.email = detailStudent.email;
      values.fullName = detailStudent.fullName;
      values.gender = detailStudent.gender;
      values.password = detailStudent.password;
      values.phone = detailStudent.phone;
      if (detailStudent.classSchool && detailStudent.classSchool.name) {
        (values.classSchool as { name: string }).name =
          detailStudent.classSchool.name;
      }
    }
    return values;
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IStudent, '_id'> | any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const addStudentMutate = useMutation({
    mutationFn: (studentInfor: Omit<IStudent, '_id'>) => {
      return studentApi.addStudent(studentInfor);
    },
    onSuccess: () => {
      toast.success('Add new student success!');
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
      onClose();
      router.push('/admin/students');
    },
    onError: (error: AxiosError) => {
      // @ts-ignore
      toast.error(error.response?.data?.message);
    },
  });
  const editStudent = useMutation({
    mutationFn: ({
      studentInfor,
      id,
    }: {
      studentInfor: Omit<IStudent, '_id'>;
      id: string;
    }) => studentApi.editStudent({ studentInfor, id }),
    onSuccess: () => {
      toast.success('Edit student success!');
      queryClient.invalidateQueries({
        queryKey: ['students'],
      });
      onClose();
      router.push('/admin/students');
    },
    onError: (error: AxiosError) => {
      // @ts-ignore
      toast.error(error.response?.data?.message);
    },
  });
  const onSubmit = (values: Omit<IStudent, '_id'>) => {
    if (detailStudent) {
      editStudent.mutate({ studentInfor: values, id: detailStudent._id });
    } else {
      addStudentMutate.mutate(values, {});
    }
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {addStudentMutate.isLoading && <Spinner />}
      <div className="bg-white rounded shadow-lg pt-10 pb-5 px-3 sm:p-6 md:px-28 lg:py-20 relative">
        <p
          className="text-gray-600 text-2xl cursor-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          &times;
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-4 leading-9 text-[#4F4F4F] text-center">
            {detailStudent?._id ? 'Edit Student' : 'Add Student'}
          </h2>
          <div className="mt-6 flex gap-11 justify-center md:justify-start">
            <p className="text-lg text-[#4F4F4F]">Manually</p>
            <p className="text-lg text-[#4F4F4F]">Import CSV</p>
          </div>
          {/* Add other form fields similarly */}
          {/* Input Field */}
          <div className="mt-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-center">
              <div className="">
                <InputField
                  control={control}
                  name="fullName"
                  placeholder=""
                  label="Name"
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.fullName && (
                    <p className="text-center text-red-600">
                      {errors.fullName.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <SelectedField
                  control={control}
                  name="classSchool"
                  defaultOption={detailStudent?.classSchool?.name || 'Class'}
                  options={classOption}
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.classSchool && (
                    <p className="text-center text-red-600">
                      {errors.classSchool.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <SelectedField
                  control={control}
                  name="gender"
                  defaultOption="Gender"
                  options={genderOption}
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.gender && (
                    <p className="text-center text-red-600">
                      {errors.gender.message as string}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-5 lg:mt-8 lg:flex-row ">
              <div className="">
                <InputField
                  control={control}
                  name="email"
                  placeholder=""
                  label="Email Address"
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.email && (
                    <p className="text-center text-red-600">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <InputField
                  control={control}
                  name="phone"
                  placeholder=""
                  label="Phone Number "
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.phone && (
                    <p className="text-center text-red-600">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {!detailStudent?._id && (
              <div className="flex flex-col gap-4 mt-5 lg:items-start">
                <InputField
                  control={control}
                  name="password"
                  placeholder=""
                  label="Password"
                  type="password"
                />
                <div style={{ minHeight: '20px' }}>
                  {errors.password && (
                    <p className="text-center text-red-600">
                      {errors.password.message as string}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-7">
            <button className="bg-[#F1F1F1] text-black py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
              {detailStudent?._id ? 'Edit Student' : 'Add Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;
