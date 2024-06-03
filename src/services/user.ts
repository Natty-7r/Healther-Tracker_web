import {
  APiResponse,
  CreateUserDto,
  VerifyOtpData,
  doctorSigninDto,
  userSigninDto,
} from "@/utils/types/api";
import { API } from "./api";

export const createUser = async (
  userData: CreateUserDto
): Promise<APiResponse> => {
  try {
    const response = await API.post("/doctor/create-user", userData);

    const { status, message, data } = response.data;
    return { status, data, message };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};

export const verifyUser = async (
  otpData: VerifyOtpData
): Promise<APiResponse> => {
  try {
    const response = await API.post("/auth/verify-account", otpData);
    const { status, message, data } = response.data;
    return { status, data, message };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};

export const loginAsAdmin = async (
  authData: doctorSigninDto
): Promise<APiResponse> => {
  try {
    const response = await API.post("auth/doctor/login", authData);
    const { status, message, data } = response.data;
    return { status, data, message };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};

export const loginAsUser = async (
  authData: userSigninDto
): Promise<APiResponse> => {
  try {
    const response = await API.post("auth/doctor/login", authData);
    const { status, message, data } = response.data;
    return { status, data, message };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};
