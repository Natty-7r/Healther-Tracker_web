import { API } from "./api";

export const createTask = async (
  dto: CreateTaskDto,
  token: string
): Promise<APiResponse> => {
  try {
    const response = await API.post("/task", dto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.data;
    return { status: "sucess", data, message: "" };
  } catch (error: any) {
    console.error("Error:", error);
    const errorMsg = error.response
      ? error.response.data.message
      : error.message;

    return { status: "fail", data: null, message: errorMsg };
  }
};

export const getTasks = async (
  query: TaskFilter,
  token: string
): Promise<APiResponse> => {
  try {
    const { status: taskStatus, page, itemsPerPage } = query;
    let queryString = `page=${page}&itemsPerPage=${itemsPerPage}`;
    if (taskStatus) queryString = queryString.concat(`&status=${taskStatus}`);

    const response = await API.get(`/task/?${queryString}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const finishTask = async (
  id: string,
  token: string
): Promise<APiResponse> => {
  try {
    const response = await API.patch(
      `task/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
