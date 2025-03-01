"use client";
import { create } from "zustand";

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  filter: { status: undefined, page: 1, itemsPerPage: 10 },

  setTasks: (tasks: Task[]) => {
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("tasks_list", JSON.stringify(tasks));
      }
      return { tasks };
    });
  },

  clearTask: () => {
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("tasks_list");
      }
      return { tasks: [] };
    });
  },
  setFilter: (filter: TaskFilter) => {
    set(() => {
      return { filter };
    });
  },

  clearFilter: () => {
    set(() => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("tasks_list");
      }
      return { filter: { status: undefined, page: 1, itemsPerPage: 10 } };
    });
  },
}));
