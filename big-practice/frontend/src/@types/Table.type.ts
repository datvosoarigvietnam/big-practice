import { IStudent } from '@/pages/admin/students';
import { User } from '@/pages/admin/teachers';

type UserIStudentKey = keyof (User & IStudent);

export interface Column {
  key: UserIStudentKey;
  header: string;
}
