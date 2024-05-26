import UpdatePasswordForm from "@/components/form /update-passowrd-form";
import { Card } from "@/components/ui/card";
import { Undo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UpdatePasswordPage = () => {
  const navigate = useNavigate();
  return (
    <section className="px-4 sm:px-8 lg:px-32 h-[90%]  overflow-auto py-2 sm:py-4 hideable_thin_scrollbar flex lg:items-center ralative  ">
      <div className="text-secondary-foregroundy absolute top-[10%] left-[5%] sm:left-[15%] mt-4 flex gap-2 group">
        <Undo
          className="group-hover:text-primary"
          onClick={() => {
            navigate(-1);
          }}
        />
        back go
      </div>
      <Card className="w-4/5 md:w-3/5 lg:w-1/2 mx-auto px-2 lg:p-8 border-none">
        <UpdatePasswordForm />
      </Card>
    </section>
  );
};

export default UpdatePasswordPage;
