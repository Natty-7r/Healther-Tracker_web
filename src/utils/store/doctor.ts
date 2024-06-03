"use client";
import { create } from "zustand";

export const useDoctorStore = create<DoctorStore>()((set) => ({
  user: null,

  setUser: (
    user: string //change any to UserData response until the api is done
  ) =>
    set(() => {
      return {
        user,
      };
    }),
  clearUser: () => {
    set(() => {
      return {
        user: null,
      };
    });
  },
}));
