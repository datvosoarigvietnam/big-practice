import { SuccessRepone } from '@/@types/utils.type';
import http from '@/utils/http';
import { IInfor } from '@/store/StepperDataContenxt';
const URL = 'admin';
const adminApi = {
  checkEmail(email: string) {
    return http.post(`${URL}/checkemail`, { emailSchool: email });
  },
  register(infor: IInfor) {
    // return http.post(`${URL}/signup`, { ...infor });

    return http.post(`https://9nblpfpj-8000.asse.devtunnels.ms/register/`, {
      username: infor.name.adminName,
      email: infor.name.emailSchool,
      name_of_school: infor.name.schoolName,
      password1: infor.password,
      password2: infor.password,
      num_of_staff: infor.numberOfStaff,
      address_of_school: infor.schoolAddress,
    });
  },
  login({ emailSchool, password }: { emailSchool: string; password: string }) {
    // return http.post(`${URL}/signin`, { emailSchool, password });
    return http.post(`https://9nblpfpj-8000.asse.devtunnels.ms/auth/login/`, {
      email: emailSchool,
      password,
    });
  },
  // deleteTodo(id: string) {
  //   return http.delete(`${URL}/${id}`)
  // },
};

export default adminApi;
