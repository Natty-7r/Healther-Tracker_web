import CreateTaskDialog from "@/components/dialog/create-task.dialog";
import TaskList from "@/components/list/task.list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore } from "@/utils/store/user.store";

function TasksPage() {
  const { user } = useAuthStore();
  return (
    <Tabs defaultValue="all" className="w-full   p-4 sm:p-8 xl:px-32">
      <div className="flex justify-between ">
        <TabsList className="grid  grid-cols-3 ">
          <TabsTrigger value="all" className="text-sm px-1 sm:px-3">
            All
          </TabsTrigger>
          <TabsTrigger value="pending" className="text-sm px-1  sm:px-3">
            Pending
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-sm px-1  sm:px-3">
            Completed
          </TabsTrigger>
        </TabsList>

        {user?.role === "SUPERVISOR" && <CreateTaskDialog />}
      </div>
      <TabsContent value="all" className="">
        <TaskList status={undefined} />
      </TabsContent>
      <TabsContent value="pending">
        <TaskList status={"pending"} />
      </TabsContent>

      <TabsContent value="completed">
        <TaskList status={"completed"} />
      </TabsContent>
    </Tabs>
  );
}

export default TasksPage;
