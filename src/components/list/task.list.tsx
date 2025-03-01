import TaskCard, { TaskCardSkeleton } from "@/components/card/task.card";
import { getTasks } from "@/services/task.api";
import { useTaskStore } from "@/utils/store/task.store"; // Import task store
import { useAuthStore } from "@/utils/store/auth"; // Import user store
import { PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";

import TaskPagination from "../comon/paginator";

const TaskList = ({ status }: { status: Taskstatus }) => {
  const { filter, setFilter, tasks, setTasks } = useTaskStore();
  const { accessToken } = useAuthStore();

  const [pagination, setPaginaion] = useState<Pagination>({
    previousPage: null,
    nextPage: null,
    total: 1,
    totalPages: 1,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const loadTasks = async () => {
    setLoading(true);
    const {
      data,
      status: statusResponse,
      message,
    } = await getTasks({ ...filter, status }, accessToken || "");
    if (statusResponse === "fail") {
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      const { payload, tasks } = data;
      setPaginaion(payload);
      setTasks(tasks);
    }

    setLoading(false);
  };
  const onPaginate = (page: number) => {
    setFilter({ ...filter, page });
  };

  useEffect(() => {
    setFilter({ ...filter, status, page: 1 });
  }, [status]);

  useEffect(() => {
    if (accessToken) loadTasks();
  }, [filter.page]);
  if (loading)
    return (
      <div className="p-0">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>

        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {new Array(8).fill(1).map((_, index) => (
            <TaskCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="p">
      <div className=" ">
        {tasks?.length > 0 ? (
          <div className="flex flex-wrap gap-4 md:gap-8">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                name={task.name}
                createdAt={task.createdAt}
                isCompleted={task.isCompleted}
                assignment={task.assignment}
                supervisorId={task.supervisor}
                priority={task.priority}
                isAssigned={task.isAssigned}
              />
            ))}

            <TaskPagination
              onPaginate={onPaginate}
              page={filter.page}
              totalPages={pagination.totalPages}
              nextPage={pagination.nextPage}
              previousPage={pagination.previousPage}
            />
          </div>
        ) : (
          <div className="w-full px-3 py-2 flex flex-col gap-4 justify-center items-center  h-96">
            <PackageOpen className="text-5xl" size={45} />
            <h2 className="font-bold text-lg text-red-800">
              No tasks available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
