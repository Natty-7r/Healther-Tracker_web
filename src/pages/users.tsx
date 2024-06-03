import UserCard from "@/components/card/user-card";

const Usersage = () => {
  return (
    <main className="">
      <div className="p-8 sm:p flex flex-col sm:flex-row flex-wrap sm:justify-around gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <h1 className="text-2xl"></h1>
    </main>
  );
};

export default Usersage;
