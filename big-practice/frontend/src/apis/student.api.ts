import http from '@/utils/http';
import { IStudent } from '@/types/student.type';

const URL = '/api/students';
const studentApi = {
  getStudents(kw?: string) {
    return http.get(`${URL}?q=${kw}`);
  },
  getClass() {
    return http.get('api/classes');
  },
  addStudent(studentInfor: Omit<IStudent, '_id'>) {
    return http.post(URL, studentInfor);
  },
  editStudent({
    studentInfor,
    id,
  }: {
    studentInfor: Omit<IStudent, '_id'>;
    id: string;
  }) {
    return http.patch(`${URL}/${id}`, {
      ...studentInfor,
      classSchool: studentInfor.classSchool?.name || studentInfor.classSchool,
    });
  },
  deleteStudent(id: string) {
    return http.delete(`${URL}/${id}`);
  },
};

export default studentApi;
