import axios from "axios"
import { SigninForm, SignupForm } from "../interface/auth/auth";
export const signup = (data: SignupForm) => {
  const uri = "/signup";
  return ins.post(uri, data);
};
export const signin = (data: SigninForm) => {
  const uri = "/signin";
  return ins.post(uri, data);
};
const ins = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
});

export default ins;
