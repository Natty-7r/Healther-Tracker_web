import { Check, CheckCheck, Pencil, Undo } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const PreviewHeader = ({
  field,
  editing,
  setEditing,
  onSubmit,
  handleGoBack,
}: PreviewHeaderProps) => {
  const toggleEditing = () => {
    setEditing(!editing);
  };
  return (
    <div className="flex w-full justify-between items-center  px-4  gap-4 lg:gap-8">
      <Undo
        className="text-secondary-foreground hover:text-primary"
        onClick={() => handleGoBack()}
      />
      <Input
        {...field}
        className={cn(
          "capitalize  font-bold text-lg md:text-xl ls:text-3xl ",
          !editing &&
            "border-none outline-none background-transparent  text-foreground text-center"
        )}
        variant={"visible"}
        disabled={!editing}
      />

      <div className="flex items-center gap-6">
        {editing ? (
          <Check className="" onClick={toggleEditing} />
        ) : (
          <Pencil className=" " onClick={toggleEditing} />
        )}
        <CheckCheck className=" " onClick={onSubmit} />
      </div>
    </div>
  );
};

export { PreviewHeader };
