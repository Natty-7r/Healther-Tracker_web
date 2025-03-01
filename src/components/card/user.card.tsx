import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useDoctorStore } from "@/utils/store/doctor";

const UserCard = ({ first_name, last_name, controller_id }: UserData) => {
  const navigate = useNavigate();
  const { setUser } = useDoctorStore();
  return (
    <Card className="w-full  sm:w-2/5 md:w-[30%] px-3 py-2 lg:px-8 lg:py-4">
      <h1 className="capitalize font-bold">
        {first_name} {last_name}{" "}
      </h1>
      <div className="p-4">
        <div className="flex lg:flex-row gap-4 lg:gap-4">
          <p className="capitalize "> contoller id </p>
          <p className="font-bold"> {controller_id} </p>
        </div>
        <Button
          className="my-2 w-full capitalize"
          size={"sm"}
          onClick={(_: any) => {
            setUser({ first_name, last_name, controller_id });
            navigate("/user-detail");
          }}
        >
          view detail
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
