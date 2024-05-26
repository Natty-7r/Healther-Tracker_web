"use client";
import { create } from "zustand";

// Function to get user data from local storage with a default value
const getUserDataFromLocalStorage = (): any | null => {
  // change any to UserData response until the api is done
  if (typeof window != "undefined") {
    // console.log(localStorage)
    const userDataString = localStorage.getItem("mezmur_lyric_user");
    if (userDataString) {
      return JSON.parse(userDataString);
    }
  }
  return null; // Return null if the item is not found
};

const initialUser: any | null = getUserDataFromLocalStorage(); //change any to UserData response until the api is done

export const useUserStore = create<UserStore>()((set) => ({
  id: initialUser?.id, // Provide default values
  first_name: initialUser?.first_name,
  last_name: initialUser?.last_name,
  role: initialUser?.role,
  email: initialUser?.email,
  token: initialUser?.token || null,

  login: (
    user: any //change any to UserData response until the api is done
  ) =>
    set(() => {
      if (window)
        localStorage.setItem("mezmur_lyric_user", JSON.stringify(user));
      return {
        id: user?.id,
        email: user?.email,
        role: user?.role,
        firstName: user?.firstName,
        lastName: user?.lastName,
        token: user?.token,
      };
    }),
  logout: () => {
    set(() => {
      if (window) localStorage.removeItem("mezmur_lyric_user");
      return {
        id: undefined,
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        role: undefined,
        token: {
          accessToken: undefined,
          refreshToken: undefined,
        },
        profile_picture: undefined,
        phone_number: undefined,
      };
    });
  },
}));
