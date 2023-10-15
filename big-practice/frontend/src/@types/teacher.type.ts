export interface ITeacher {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  selectedClass: string;
  selectedGender: 'Male' | 'Female' | 'Other';
  subjects: { name: string }[];
}
// _id: number;
//   name: string;
//   subject: string;
//   email: string;
//   class: string;
//   gender: 'Male' | 'Female' | 'Other';
