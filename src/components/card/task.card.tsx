import { finishTask, getTasks } from "@/services/task.api";
import { useAuthStore } from "@/utils/store/auth";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { toast } from "../ui/use-toast";
import { useTaskStore } from "@/utils/store/task.store";
import { Clock, User, UserCog } from "lucide-react";

const TaskCard = ({
  id,
  name,
  createdAt,
  isCompleted,
  assignment,
  supervisorId,
}: Task) => {
  const { user, accessToken } = useAuthStore();
  const { setTasks, filter } = useTaskStore();
  const [loading, setLoading] = useState<boolean>(false);

  const loadTasks = async () => {
    setLoading(true);
    const { data, status: statusResponse } = await getTasks(
      { ...filter },
      accessToken || ""
    );
    if (statusResponse !== "fail") setTasks(data);

    setLoading(false);
  };

  const handleComplete = async () => {
    setLoading(true);
    const { status, message } = await finishTask(id, accessToken as string);
    if (status === "fail") {
      toast({
        variant: "destructive",
        description: message,
      });
    } else {
      await loadTasks();
    }
    setLoading(false);
  };
  return (
    <Card className="w-full sm:w-2/5 sm:w-[40%] md:w-[30%] px-3 py-2 lg:px-8 lg:py-4 ">
      <h1 className="capitalize font-bold">{name}</h1>

      <div className="flex justify-between">
        <div className="flex  flex-col gap-4 lg:gap-4">
          <div className="flex lg:flex-row gap-2 items-center">
            <p className="capitalize">Status</p>
            <p
              className={`font-bold ${
                isCompleted ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCompleted ? "Completed" : "Pending"}
            </p>
          </div>
          <div className="flex lg:flex-row gap-2 items-center">
            <User size={16} />

            <p
              className={`font-bold ${
                isCompleted ? "text-green-500" : "text-red-500"
              }`}
            >
              {assignment?.agent?.username}
            </p>
          </div>
        </div>

        <div className="flex  flex-col gap-4 lg:gap-4 ">
          <div className="flex lg:flex-row gap-2 items-center">
            <Clock size={16} />

            <p className="">{new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex lg:flex-row gap-2 items-center">
            <UserCog size={16} />

            <p
              className={`font-bold ${
                isCompleted ? "text-green-500" : "text-red-500"
              }`}
            >
              {supervisorId?.username}
            </p>
          </div>
        </div>
      </div>

      {user && user?.role === "AGENT" && !isCompleted && (
        <Button
          className="my-2 w-full capitalize"
          size={"sm"}
          onClick={() => {
            handleComplete();
          }}
        >
          {loading ? ` Completing the task ...` : " Complete Task"}
        </Button>
      )}
    </Card>
  );
};

const TaskCardSkeleton = () => {
  return (
    <Card className="w-full sm:w-2/5 md:w-[40%] px-3 py-2 lg:px-8 lg:py-4 ">
      <Skeleton className=" " />

      <div className="p-4">
        <div className="flex lg:flex-row gap-4 lg:gap-4">
          <Skeleton className="p-4" />
          <Skeleton className="p-4" />
        </div>
        <Skeleton className="p-4" />
      </div>
    </Card>
  );
};

export default TaskCard;
export { TaskCardSkeleton };
