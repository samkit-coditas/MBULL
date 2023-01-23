import {
  forgot,
  login,
  logout,
  question,
  refresh,
  signUp,
  userCheck,
} from "../constants/urls";
import axiosInstance from "./axios.instance";

export const signIn = async (formData: { [key: string]: string }) => {
  try {
    const response = await axiosInstance.post(login, formData);
    return response?.data.data;
  } catch (e) {
    console.log("signIn error", e);
  }
};

export const signOut = async () => {
  try {
    const response = await axiosInstance.post(logout, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};
export const submitEmail = async (formData: { [key: string]: string }) => {
  try {
    const res = await axiosInstance.post(forgot, formData);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
export const forgotPasswordSubmit = async (formData: {
  [key: string]: string;
}) => {
  try {
    const res = await axiosInstance.post(refresh, formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const checkEmail = async (data: string) => {
  try {
    const res = await axiosInstance.post(userCheck, {
      email: data,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getQuestions = async () => {
  try {
    const res = await axiosInstance.get(question);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const signUpSubmit = async (formData: { [key: string]: string }) => {
  try {
    const res = await axiosInstance.post(signUp, formData);
    return res;
  } catch (e) {
    console.log(e);
  }
};
