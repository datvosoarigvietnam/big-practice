import { SuccessRepone } from '@/@types/utils.type';
import http from '@/utils/http';
import { IInfor } from '@/store/StepperDataContenxt';
const URL = 'admin';
const adminApi = {
  checkEmail(email: string) {
    return http.post(`${URL}/checkemail`, { emailSchool: email });
  },
  register(infor: IInfor) {
    return http.post(`${URL}`, { ...infor });
  },
  // deleteTodo(id: string) {
  //   return http.delete(`${URL}/${id}`)
  // },
};

export default adminApi;
