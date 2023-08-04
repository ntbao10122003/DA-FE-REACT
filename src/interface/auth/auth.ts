import * as Yup from "yup"
export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}
export const signinSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Trường dữ liệu bắt buộc"),
  password: Yup.string().required('Vui lòng nhập Mật khẩu').min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
})
// signin
export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('Vui lòng nhập Tên'),
  lastName: Yup.string().required('Vui lòng nhập Họ'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập Email'),
  password: Yup.string().required('Vui lòng nhập Mật khẩu').min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Mật khẩu xác nhận phải giống với Mật khẩu đã nhập')
    .required('Vui lòng nhập lại Mật khẩu xác nhận'),
});
export type SignupForm = Yup.InferType<typeof signupSchema>
export type SigninForm = Yup.InferType<typeof signinSchema>