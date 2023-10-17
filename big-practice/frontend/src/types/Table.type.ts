import { ITeacher } from './teacher.type';
import { IStudent } from './student.type';

type UserIStudentKey = keyof (ITeacher & IStudent);

export interface Column {
  key: UserIStudentKey;
  header: string;
}
