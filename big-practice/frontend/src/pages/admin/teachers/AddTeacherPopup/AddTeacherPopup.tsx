import React, { useState, useMemo, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import adminApi from '@/apis/admin.api';
import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';
import { useMutation, useQuery } from '@tanstack/react-query';
import Button from '@/components/Button';
import { ITeacher } from '@/@types/teacher.type';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { queryClient } from '@/pages/_app';
import Spinner from '@/components/Spinner';

interface AddTeacherPopupProps {
  onClose: () => void;
  classOption: string[];
  subjectOption: string[];
  teacherDetail?: ITeacher
}

const AddTeacherPopup: React.FC<AddTeacherPopupProps> = ({
  onClose,
  classOption,
  subjectOption,
  teacherDetail
}) => {
  const router = useRouter();
  const defaultValues = useMemo(() => {

  }, [teacherDetail])
  const { control, handleSubmit, setError, formState: { errors } } = useForm<ITeacher | any>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      selectedClass: '',
      selectedGender: 'Male',
      subjects: [],
    },
  });
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const teacherMutate = useMutation({
    mutationFn: (teacherInfor: ITeacher) => adminApi.addTeacher(teacherInfor),
  });
  const onSubmit = (values: ITeacher) => {
    // console.log("Vaules of teacher", values);
    const teacherInfo = {
      ...values,
      subjects: selectedSubjects.map(selected => ({ name: selected })),
    };

    console.log("Vaules of teacher", teacherInfo);

    teacherMutate.mutate(teacherInfo, {
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
      }
    })
  };

  const handleClose = () => {
    onClose();
  };
  const optionGender = ['Male', 'Female', 'Other'];
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ">
      {teacherMutate.isLoading && <Spinner />}
      <div className="bg-white rounded shadow-lg  pb-5 px-3 sm:p-6 md:px-28 overflow-y-scroll h-[80vh] relative">
        <span
          className="text-gray-600 text-2xl cursor-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          &times;
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-36">
            <h2 className="text-2xl font-bold mb-4 leading-9 text-[#4F4F4F]">
              Add Teachers
            </h2>
          </div>
          <div className="mt-6 flex gap-11 justify-center ">
            <p className="text-lg text-[#4F4F4F]">Manually</p>
            <p className="text-lg text-[#4F4F4F]">Import CSV</p>
          </div>
          <div className="mt-12 sm:mt-[75px] flex items-center justify-center md:block">
            <InputField
              name="name"
              control={control}
              label="Full Name"
              placeholder=""
              type="text"
              className="w-full"
            />
          </div>
          <div className="mt-14 flex gap-5 md:gap-7 flex-col items-center md:items-start lg:flex-row lg:items-end">
            <InputField
              name="email"
              control={control}
              label="Email Address"
              placeholder=""
              type="text"
            // className="w-full"
            />
            <div className="flex flex-col flex-1 gap-5  md:gap-2 md:flex-row md:items-stretch">
              <SelectedField
                name="selectedClass"
                control={control}
                placeholder=""
                isFullWith={false}
                defaultOption="Class"
                options={classOption}
              />
              <SelectedField
                name="selectedGender"
                control={control}
                placeholder=""
                isFullWith={false}
                defaultOption="Gender"
                options={optionGender}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row sm:items-end gap-5 justify-between mt-8  lg:justify-start ">
            <InputField
              name="password"
              control={control}
              label="Password"
              placeholder=""
              type="password"
            />
            <InputField
              name="phoneNumber"
              control={control}
              label="Phone number"
              placeholder=""
              type="tel"
            />
            <SelectedField
              name="subjects"
              control={control}
              placeholder=""
              defaultOption="Subject"
              options={subjectOption}
              onUpdateSelectedSubjects={(selectedSubjects) => {
                // Handle selected subjects in the parent component if needed
                console.log('Selected Subjects:', selectedSubjects);
                setSelectedSubjects(selectedSubjects)
              }}
            />
          </div>
          {/* <p></p> */}
          <div className=" mt-5 mb-6 h-5">
            {errors.fullName && <p className='text-center text-red-700'>{errors?.fullName.message + ''}</p>}

          </div>
          <div className="mt-10 pb-4">
            <Button title="Add teacher" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;
