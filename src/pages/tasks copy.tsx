import TaskCard from "@/components/card/task.card";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Card } from "@/components/ui/card";
import { useTaskStore } from "@/utils/store/task.store"; // Import task store
import { useAuthStore } from "@/utils/store/user.store"; // Import user store
import { useNavigate } from "react-router";

const TasksPage = () => {
  const { tasks } = useTaskStore(); // Get tasks from the store
  const { user } = useAuthStore(); // Get user from the store
  const navigate = useNavigate();

  const handleCreateTask = () => {
    navigate("/create-task");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>

      {user?.role == "SUPERVISOR" && (
        <Button className="mb-4" onClick={handleCreateTask}>
          Create Task
        </Button>
      )}

      <div className="flex gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              name={task.name}
              createdAt={task.createdAt}
              isCompleted={task.isCompleted}
              assignment={task.assignment}
              supervisorId=""
              priority={task.priority}
              isAssigned={task.isAssigned}
            />
          ))
        ) : (
          <Card className="w-full px-3 py-2">
            <h2 className="font-bold">No tasks available</h2>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TasksPage;
