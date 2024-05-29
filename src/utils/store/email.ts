"use client";
import { create } from "zustand";

export const useEmailStore = create<EmailStore>()((set) => ({
  email: "",

  setEmail: (
    email: string //change any to UserData response until the api is done
  ) =>
    set(() => {
      return {
        email,
      };
    }),
  clearEmail: () => {
    set(() => {
      return {
        email: undefined,
      };
    });
  },
}));
