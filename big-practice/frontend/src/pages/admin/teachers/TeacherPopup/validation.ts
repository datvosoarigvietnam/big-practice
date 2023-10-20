import * as Yup from 'yup';

const phoneSchema = Yup.string()
  .matches(/^[0]\d{9}$/, 'Invalid phone number')
  .required('Phone number is required');
export default phoneSchema;
