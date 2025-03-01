import { API } from "./api";

export const login = async (authData: signInDto): Promise<APiResponse> => {
  try {
    const response = await API.post("auth/sign-in", authData);
    const data = response.data;
    return { status: "success", data, message: "" };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};
