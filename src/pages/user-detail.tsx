import UserDataCard from "@/components/card/user-data-card";
import { Accordion } from "@radix-ui/react-accordion";

const Usersage = () => {
  return (
    <main className="">
      <div className="p-8 sm:p flex flex-col sm:flex-row flex-wrap sm:justify-around gap-4">
        <div className="">
          <h1 className="capitalize font-bold">natty seven </h1>
        </div>

        <Accordion
          type="single"
          collapsible
          className="lg:px-[10%] w-full flex flex-col sm:flex-row flex-wrap  gap-4"
        >
          {new Array(5).fill(1).map((_, index) => (
            <UserDataCard key={index} index={index} />
          ))}
        </Accordion>
      </div>
      <h1 className="text-2xl"></h1>
    </main>
  );
};

export default Usersage;
