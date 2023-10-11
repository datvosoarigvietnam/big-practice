import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputField from '@/components/InputField';
import SelectedField from '@/components/SelectedField';

interface AddTeacherPopupProps {
  onClose: () => void;
}

const AddTeacherPopup: React.FC<AddTeacherPopupProps> = ({ onClose }) => {
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
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded shadow-lg  pb-5 px-3 sm:p-6 md:px-28 overflow-y-scroll h-[80vh] md:overflow-hidden">
        <span
          className="text-gray-600 text-2xl cursor-pointer absolute top-2 right-2"
          onClick={handleClose}
        >
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-36">
            <h2 className="text-2xl font-bold mb-4 leading-9 text-[#4F4F4F]">
              Add Teachers
            </h2>
            <InputField
              className="mb-4"
              name="designation"
              label="Designation"
              control={control}
              placeholder=""
              type="text"
            />
          </div>
          <div className="mt-6 flex gap-11 justify-center md:justify-start">
            <p className="text-lg text-[#4F4F4F]">Manually</p>
            <p className="text-lg text-[#4F4F4F]">Import CSV</p>
          </div>
          <div className="mt-12 sm:mt-[75px] flex items-center justify-center md:block">
            <InputField
              name="fullName"
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
            <div className="flex flex-col flex-1 gap-5  md:gap-2 lg:flex-row ">
              <SelectedField
                name="class"
                control={control}
                placeholder=""
                isFullWith={false}
                defaultOption="Class"
              />
              <SelectedField
                name="gender"
                control={control}
                placeholder=""
                isFullWith={false}
                defaultOption="Gender"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row sm:items-center gap-5 justify-between mt-8  lg:justify-start">
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
          </div>
          <div className="mt-12 text-center">
            <SelectedField
              name="subject"
              control={control}
              placeholder=""
              defaultOption="Subject"
            />
          </div>
          {/* Add other form fields similarly */}

          <div className="mt-7">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              onClick={handleClose}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;
