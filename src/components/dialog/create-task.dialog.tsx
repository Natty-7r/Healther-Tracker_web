import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateTaskForm from "../form /create-task.form";
import { useState } from "react";

function CreateTaskDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(status) => console.log(setOpen(status))}>
      <DialogTrigger asChild>
        <Button
          className="mb-4 sm:mr-4 "
          onClick={() => {
            setOpen(true);
          }}
        >
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a task</DialogTitle>
          <DialogDescription>
            add new task and system will asign automatically
          </DialogDescription>
        </DialogHeader>
        <CreateTaskForm
          onCreate={() => {
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default CreateTaskDialog;
