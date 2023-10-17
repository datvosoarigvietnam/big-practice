export interface IStudent {
  _id: string;
  // avatar: string;
  fullName: string;
  classSchool?: {
    name: string;
  };
  email: string;
  phone: string;
  gender: string;
  password: string;
}
