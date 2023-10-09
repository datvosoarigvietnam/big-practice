import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';

interface AddStudentPopupProps {
  onClose: () => void;
}

const AddTeacherPopup: React.FC<AddStudentPopupProps> = ({ onClose }) => {
  const { control, watch } = useForm();
  console.log('Data', watch());

  const [formData, setFormData] = useState({
    designation: '',
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    selectedClass: '',
    selectedGender: 'male',
    subject: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg pt-10 pb-5 px-3 sm:p-6 md:px-28 lg:py-20">
        <span
          className="text-gray-600 text-2xl cursor-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 leading-9 text-[#4F4F4F] text-center">
            Add Student
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
                  name="studentName"
                  placeholder=""
                  label="Name"
                />
              </div>
              <div className="">
                <SelectedField
                  control={control}
                  name="class"
                  defaultOption="Class"
                />
              </div>
              <div className="">
                <SelectedField
                  control={control}
                  name="gender"
                  defaultOption="Gender"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-5 lg:mt-8 lg:flex-row ">
              <InputField
                control={control}
                name="email"
                placeholder=""
                label="Email Address"
              />
              <InputField
                control={control}
                name="phone"
                placeholder=""
                label="Phone Number "
              />
            </div>
            <div className="flex flex-col gap-4 mt-5 lg:items-start">
              <InputField
                control={control}
                name="password"
                placeholder=""
                label="Password"
                type="password"
              />
            </div>
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              onClick={handleClose}
            >
              Add student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;
