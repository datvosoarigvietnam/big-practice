import { IInfor } from '@/store/StepperDataContenxt';
import http from '@/utils/http';
import { ITeacher } from '@/@types/teacher.type';

const URL = 'admin';
const adminApi = {
  checkEmail(email: string) {
    return http.post(`${URL}/checkemail`, { emailSchool: email });
  },
  register(infor: IInfor) {
    // return http.post(`${URL}/signup`, { ...infor });

    return http.post(`api/auth/signUp`, {
      // username: infor.name.adminName,
      email: infor.name.emailSchool,
      // name_of_school: infor.name.schoolName,
      password: infor.password,
      confirmPassword: infor.confirmPassword,
      // num_of_staff: infor.numberOfStaff,
      // address_of_school: infor.schoolAddress,
      firstName: infor.name.adminName,
      lastName: infor.name.adminName,
    });
  },
  login({ emailSchool, password }: { emailSchool: string; password: string }) {
    // return http.post(`${URL}/signin`, { emailSchool, password });
    return http.post(`api/auth/signIn`, {
      email: emailSchool,
      password,
    });
  },
  getTeachers() {
    return http.get('/api/teachers');
  },
  getClasses() {
    return http.get('/api/classes');
  },
  getSubjects() {
    return http.get('/api/subjects');
  },
  addTeacher(teacherInfor: ITeacher) {
    const newTeacher = {
      // avatar: '',
      fullName: teacherInfor.name,
      subjects: teacherInfor.subjects,
      classSchool: teacherInfor.selectedClass,
      email: teacherInfor.email,
      password: teacherInfor.password,
      phone: teacherInfor.phoneNumber,
      gender: teacherInfor.selectedGender,
    };
    return http.post('/api/teachers', {
      ...newTeacher,
    });
  },
  editTeacher(teacherInfor: ITeacher, id: string) {
    const newTeacher = {
      // avatar: '',
      fullName: teacherInfor.name,
      subjects: teacherInfor.subjects,
      classSchool: teacherInfor.selectedClass,
      email: teacherInfor.email,
      password: teacherInfor.password,
      phone: teacherInfor.phoneNumber,
      gender: teacherInfor.selectedGender,
    };
    return http.patch(`/api/teachers/${id}`, {
      ...newTeacher,
    });
  },
  deleteTeacher(teacherId: string) {
    return http.delete(`/api/teachers/${teacherId}`);
  },
};

export default adminApi;
