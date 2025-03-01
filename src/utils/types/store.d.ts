type User = {
  id: string; // UUID
  username: string; // Unique
  email: string; // Unique
  password: string;
  role: "AGENT" | "SUPERVISOR"; // Enum type or string representing roles
  isAvailable: boolean; // Default to true
  createdAt: Date; // DateTime in Prisma maps to Date in TypeScript
};

type AuthStore = {
  user?: User;
  accessToken?: string;
  login: (user: any, accessToken: string) => any;
  logout: () => any;
};

type Task = {
  id: string;
  supervisorId: any;
  name: string;
  priority: number;
  isAssigned: boolean;
  isCompleted: boolean;
  createdAt: any;
  // createdAt: Date;
  supervisor?: any;
  assignment?: any;
};
type Taskstatus = undefined | "pending" | "completed";

type TaskFilter = {
  status?: Taskstatus;
} & QueryDto;

type TaskStore = {
  tasks: Task[];
  filter: TaskFilter;
  setTasks: (tasks: Task[]) => any;
  clearTask: () => any;

  setFilter: (filter: TaskFilter) => any;
  clearFilter: () => any;
};

type EmailStore = {
  email: string;
  setEmail: (email: string) => any;
  clearEmail: () => any;
};
type DoctorStore = {
  user: any;
  setUser: (user: any) => any;
  clearUser: () => any;
};
