"use client";
import { create } from "zustand";

// Function to get user data from local storage with a default value
const getUserDataFromLocalStorage = (): any | null => {
  if (typeof window != "undefined") {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      return JSON.parse(userDataString);
    }
  }
  return { user: undefined };
};

const initialUser: any | null = getUserDataFromLocalStorage(); //change any to UserData response until the api is done

export const useAuthStore = create<AuthStore>()((set) => ({
  user: initialUser,
  accessToken: undefined,

  login: (user: User, accessToken: string) =>
    set(() => {
      if (window)
        localStorage.setItem("user", JSON.stringify({ ...user, isAuth: true }));
      return { user, accessToken };
    }),
  logout: () => {
    set(() => {
      if (window) localStorage.removeItem("user");
      return { user: undefined };
    });
  },
}));
