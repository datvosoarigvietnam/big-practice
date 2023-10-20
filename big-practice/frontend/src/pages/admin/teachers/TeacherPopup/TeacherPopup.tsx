import Image from 'next/image';
import React, { useState, useMemo, useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import adminApi from '@/apis/admin.api';
import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';
import { ITeacher } from '@/types/teacher.type';
import { queryClient } from '@/pages/_app';
import Spinner from '@/components/Spinner';
import addIcon from '@/common/icons/plusIcon.svg';
import SelectedSubject from '@/components/SelectedField/SelectedSubject';

interface AddTeacherPopupProps {
  onClose: () => void;
  classOption: string[];
  subjectOption: string[];
  teacherDetail?: any;
}
interface IForm {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  selectedClass: string;
  selectedGender: string;
  subjects: { name: string }[];
}
const AddTeacherPopup: React.FC<AddTeacherPopupProps> = ({
  onClose,
  classOption,
  subjectOption,
  teacherDetail,
}) => {
  const router = useRouter();
  const defaultValues = useMemo<IForm>(() => {
    const values: IForm = {
      email: '',
      name: '',
      password: '',
      phoneNumber: '',
      selectedClass: '',
      selectedGender: '',
      subjects: [],
    };

    if (teacherDetail) {
      values.email = teacherDetail.email;
      values.name = teacherDetail.fullName;
      values.password = teacherDetail.password;
      values.phoneNumber = teacherDetail.phone;
      values.selectedClass = teacherDetail.classSchool?.name;
      values.selectedGender = teacherDetail.gender;
      values.subjects = teacherDetail.subjects;
    }
    return values;
  }, [teacherDetail]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    selectedClass: Yup.string().required('Class is required'),
    selectedGender: Yup.string().required('Gender is required'),
    password: teacherDetail
      ? Yup.string()
      : Yup.string().required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ITeacher | any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subjects',
  });
  useEffect(() => {
    subjectOption.shift();
  }, []);
  const [selectedSubjects, setSelectedSubjects] = useState<{ name: string }[]>(
    teacherDetail?.subjects || [{ name: '' }],
  );

  const addTeacherMutate = useMutation({
    mutationFn: (teacherInfor: ITeacher) => adminApi.addTeacher(teacherInfor),
  });

  const editTeacherMutate = useMutation({
    mutationFn: (teacherInfor: ITeacher) =>
      adminApi.editTeacher(teacherInfor, teacherInfor?._id),
  });
  const onSubmit = (values: ITeacher) => {
    const teacherInfo = {
      ...values,
      subjects: selectedSubjects?.map((selected) => ({ name: selected.name })),
    };

    if (teacherDetail) {
      const teacherInfo = {
        ...values,
        _id: teacherDetail._id,
        subjects: selectedSubjects?.map((selected) => {
          return { name: selected.name };
        }),
      };

      editTeacherMutate.mutate(teacherInfo as ITeacher, {
        onSuccess: () => {
          toast.success('Add new teacher success');
          queryClient.invalidateQueries({
            queryKey: ['teachers'],
          });
          onClose();
          router.push('/admin/teachers');
        },
        onError: (error: any) => {
          if (error.response) {
            setError('fullName', {
              type: 'manual',
              message: error.response.data.message || 'Some field is wrong!',
            });
          }
        },
      });
    } else {
      addTeacherMutate.mutate(teacherInfo, {
        onSuccess: () => {
          toast.success('Add new teacher success');
          queryClient.invalidateQueries({
            queryKey: ['teachers'],
          });
          onClose();
          router.push('/admin/teachers');
        },
        onError: (error: any) => {
          toast.error(error.response.data.message || 'Some field is wrong!');
        },
      });
    }
  };

  const handleClose = () => {
    onClose();
  };
  const optionGender = ['Male', 'Female', 'Other'];
  const [tepmOption, setTempOption] = useState(subjectOption);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ">
      {addTeacherMutate.isLoading && <Spinner />}
      {editTeacherMutate.isLoading && <Spinner />}
      <div className="bg-white rounded shadow-lg  pb-5 px-3 sm:p-6 md:px-20 overflow-y-scroll h-[80vh] relative">
        <span
          className="text-gray-600 text-2xl cursor-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          &times;
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between">
            <div className="flex justify-center items-start flex-col ">
              <h2 className="text-2xl font-bold mb-4 leading-9 text-[#4F4F4F]">
                {teacherDetail?._id ? 'Edit Teacher' : 'Add Teacher'}
              </h2>
              <div className="mt-6 flex gap-11 justify-center ">
                <p className="text-lg text-[#4F4F4F]">Manually</p>
                <p className="text-lg text-[#4F4F4F]">Import CSV</p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-[75px] flex flex-1 items-center justify-center md:block w-full">
            <InputField
              name="name"
              control={control}
              label="Full Name"
              placeholder=""
              type="text"
              value={teacherDetail?.fullName}
              fullWith="w-full"
            />
            {errors.name && (
              <p className="text-center text-red-700 mt-2">
                {errors?.name.message + ''}
              </p>
            )}
          </div>
          <div className="mt-8 flex gap-5 md:gap-7  lg:gap-12 flex-col items-center md:items-start lg:flex-row lg:items-end">
            <div className="w-full">
              <InputField
                name="email"
                control={control}
                label="Email Address"
                placeholder=""
                type="text"
                fullWith="w-full"
              />
              <div className=" ">
                {errors.email && (
                  <p className="text-center text-red-700">
                    {errors?.email.message + ''}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-5  md:gap-2 md:flex-row md:items-stretch lg:gap-7">
              <div className="">
                <SelectedField
                  name="selectedClass"
                  control={control}
                  placeholder=""
                  isFullWith={false}
                  defaultOption={teacherDetail?.classSchool?.name || 'Class'}
                  options={classOption}
                />
                <div className=" ">
                  {errors.email && (
                    <p className="text-center text-red-700">
                      {errors?.email.message + ''}
                    </p>
                  )}
                </div>
              </div>
              <div className="">
                <SelectedField
                  name="selectedGender"
                  control={control}
                  placeholder=""
                  isFullWith={false}
                  defaultOption="Gender"
                  options={optionGender}
                />
                <div className=" ">
                  {errors.email && (
                    <p className="text-center text-red-700">
                      {errors?.email.message + ''}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row sm:items-end gap-5 lg:gap-12 justify-between mt-8  lg:justify-start ">
            {!teacherDetail?._id && (
              <>
                <div className="w-full">
                  <InputField
                    name="password"
                    control={control}
                    label="Password"
                    placeholder=""
                    type="password"
                    fullWith="w-full"
                  />

                  <div style={{ minHeight: '20px' }}>
                    {errors.password && (
                      <p className="text-center text-red-600">
                        {errors.password.message as string}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
            <div className={`${!teacherDetail?._id ? 'w-full' : 'w-[250px]'}`}>
              <InputField
                name="phoneNumber"
                control={control}
                label="Phone number"
                placeholder=""
                type="tel"
                value={teacherDetail?.phoneNumber}
                fullWith="w-full"
              />
              <div style={{ minHeight: '20px' }}>
                {errors.phoneNumber && (
                  <p className="text-center text-red-600">
                    {errors.phoneNumber.message as string}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            {/* <SelectedSubject
              name="subjects"
              control={control}
              placeholder=""
              defaultOption={teacherDetail?.subjects[0]?.name || 'Subject'}
              options={subjectOption}
              onUpdateSelectedSubjects={(selectedSubjects) => {
                setSelectedSubjects(selectedSubjects);
              }}
            /> */}
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center mt-2">
                <Controller
                  control={control}
                  name={`subjects[${index}].name`}
                  render={({ field }) => {
                    return (
                      <SelectedSubject
                        name={`subjects[${index}].name`}
                        value={field.value}
                        onChange={field.onChange}
                        control={control}
                        options={subjectOption}
                        tempOptions={tepmOption}
                        onUpdateSelectedSubjects={(selectedSubjects) => {
                          const indexToReplace = index;
                          setTempOption((prev) => {
                            const newOption = prev?.filter(
                              (item) => item !== selectedSubjects[0].name,
                            );
                            return newOption;
                          });
                          setSelectedSubjects((prev) => {
                            const updatedSubjects = [...prev];
                            updatedSubjects[indexToReplace] =
                              selectedSubjects[0];
                            return updatedSubjects;
                          });
                        }}
                      />
                    );
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                    setSelectedSubjects((prev) => {
                      const updatedSubjects = [...prev];
                      updatedSubjects.splice(index, 1);
                      return updatedSubjects;
                    });
                  }}
                  className="text-red-600 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-10 pb-4 flex gap-6">
            <div
              className="flex gap-2 items-center hover:cursor-pointer hover:opacity-75"
              onClick={() => {
                append({ name: 'Selected Subject' });
              }}
              // onClick={handleAddNewSubject}
            >
              <Image src={addIcon} alt="addicon" />
              Add another
            </div>
            <button className=" text-black bg-[#F1F1F1] px-4 py-3 rounded-sm hover:opacity-80 hover:bg-[#3a88d2]">
              {teacherDetail?._id ? 'Eidt Teacher' : 'Add Teacher'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;