import UserCard from "@/components/card/user-card";
import { getUsers } from "@/services/user";
import { useUserStore } from "@/utils/store/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
type LoadStatus = "idle" | "loading" | "fail" | "success";
const Usersage = () => {
  const navigate = useNavigate();
  const { id, role, token } = useUserStore();
  const [loading, setLoading] = useState<LoadStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState<any>("idle");

  const loadUsers = async () => {
    if (id == null || role !== "DOCTOR") {
      setErrorMsg("un authorized");
      setLoading("fail");
      return navigate("/auth/signin-user");
    }
    const { status, message, data } = await getUsers(
      id as string,
      token as string
    );
    if (status == "fail") {
      setErrorMsg(message);
      return setLoading("fail");
    }
    setLoading("success");
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  if (loading == "idle" || loading == "loading")
    return (
      <main className="flex p-24 capitalize  justify-center items-center">
        <h1 className="text-2xl">loading</h1>
      </main>
    );
  if (loading == "fail")
    return (
      <main className="flex  p-24 capitalize justify-center items-center">
        <h1 className="text-2xl text-red-600">{errorMsg}</h1>
      </main>
    );
  if (users.length == 0)
    return (
      <main className="flex p-24 capitalize  justify-center items-center">
        <h1 className="text-2xl text-red-600">no users </h1>
      </main>
    );

  return (
    <main className="">
      <div className="p-8 sm:p flex flex-col sm:flex-row flex-wrap sm:justify-around gap-4">
        {users.map(
          (
            {
              first_name,
              last_name,
              id,
              controller_id,
              created_at,
              doctor_id,
            }: UserData,
            index: number
          ) => (
            <UserCard
              id={id}
              key={index}
              first_name={first_name}
              last_name={last_name}
              controller_id={controller_id}
              created_at={created_at}
              doctor_id={doctor_id}
            />
          )
        )}
      </div>
      <h1 className="text-2xl"></h1>
    </main>
  );
};

export default Usersage;
