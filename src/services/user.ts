import { APiResponse, CreateUserDto } from "@/utils/types/api";
import { API } from "./api";

export const createUser = async (
  userData: CreateUserDto,
  token: string
): Promise<APiResponse> => {
  try {
    const response = await API.post("/doctor/create-user", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export const getUsers = async (
  doctorId: string,
  token: string
): Promise<APiResponse> => {
  try {
    const response = await API.get(`/doctor/users/${doctorId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const getUserData = async (
  userId: string,
  token: string
): Promise<APiResponse> => {
  try {
    const response = await API.get(`doctor/user-data/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
