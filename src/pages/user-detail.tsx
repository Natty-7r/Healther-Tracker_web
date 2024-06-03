import UserDataCard from "@/components/card/user-data-card";
import { getUserData } from "@/services/user";
import { useDoctorStore } from "@/utils/store/doctor";
import { useUserStore } from "@/utils/store/user";
import { Accordion } from "@radix-ui/react-accordion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type LoadStatus = "idle" | "loading" | "fail" | "success";
const UserDetailPage = () => {
  const navigate = useNavigate();
  const { role, token } = useUserStore();
  const { user } = useDoctorStore();
  const [loading, setLoading] = useState<LoadStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setData] = useState<any>("idle");

  const loadUserData = async () => {
    if (!(role == "USER" || role == "DOCTOR")) {
      setErrorMsg("un authorized");
      setLoading("fail");
      return navigate("/auth/signin-user");
    }
    const { status, message, data } = await getUserData(
      user?.controller_id as string,
      token as string
    );
    if (status == "fail") {
      setErrorMsg(message);
      return setLoading("fail");
    }
    setLoading("success");
    setData(data);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  if (loading == "idle" || loading == "loading")
    return (
      <main className="flex   p-24 capitalize  justify-center items-center">
        <h1 className="text-2xl">loading</h1>;
      </main>
    );
  if (loading == "fail")
    return (
      <main className="flex  p-24 capitalize   justify-center items-center">
        <h1 className="text-2xl text-red-600">{errorMsg}</h1>;
      </main>
    );

  if (userData.length == 0)
    return (
      <main className="flex p-24 capitalize  justify-center items-center">
        <h1 className="text-2xl text-red-600">no user data </h1>
      </main>
    );
  return (
    <main className="">
      <div className="p-8 sm:p flex flex-col sm:flex-row flex-wrap sm:justify-around gap-4">
        <div className="">
          <h1 className="capitalize font-bold">
            {user.first_name} {user.last_name}{" "}
          </h1>
        </div>

        <Accordion
          type="single"
          collapsible
          className="lg:px-[10%] w-full flex flex-col sm:flex-row flex-wrap  gap-4"
        >
          {userData.map(
            (
              { body_temperature, heart_rate, recorded_at }: any,
              index: number
            ) => (
              <UserDataCard
                key={index}
                index={index}
                heartBit={heart_rate}
                temp={body_temperature}
                recorded_at={recorded_at}
              />
            )
          )}
        </Accordion>
      </div>
      <h1 className="text-2xl"></h1>
    </main>
  );
};

export default UserDetailPage;
