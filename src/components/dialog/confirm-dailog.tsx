import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactElement } from "react";

export type Ref = HTMLButtonElement;

export const ConfirmDialog = ({
  actionName,
  title,
  description,
  onConfrim,
  openState,
  setModalState,
}: {
  setModalState: any;
  openState?: boolean;
  actionName?: string;
  title: string;
  description: string;
  children: ReactElement;
  onConfrim: Function;
}) => {
  return (
    <Dialog open={openState} onOpenChange={setModalState}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setModalState(false);
            }}
            variant={"outline"}
            size={"sm"}
          >
            cancel{" "}
          </Button>
          <Button
            className="captitalize"
            variant={"destructive"}
            onClick={(e) => {
              e.stopPropagation();
              setModalState(false);
              onConfrim();
            }}
          >
            {actionName || "confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
