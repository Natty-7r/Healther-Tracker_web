import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const nagivate = useNavigate();
  return (
    <main className="relative h-screen bg--900">
      <div className="absolute  top-0 left-0 h-full w-full bg-gradient-to-br from-black to-red-500  z-[5]">
        <img
          src="/images/watch-r.png"
          className="absolute  top-0 left-0 h-full w-full object-cover scale-[.5]"
        />
      </div>
      <div className="absolute p-[5%] lg:p-[20%]  lg:gap-2 top-0 left-0 h-full w-full z-[6] flex  flex-col justify-center items-center text-white ">
        <h1 className="font-bold text-center my-8  capitalize text-3xl lg:text-5xl  "></h1>
        <h2 className="font-bold  text-sm lg:text-xl  text-center text-white/90 ">
          Enhance your daily routine with our innovative health tracker. Get
          detailed insights into your physical activity, dietary habits, and
          sleep quality to make informed decisions about your health and
          wellness.
        </h2>

        <Button
          className="text-2xl my-4 px-8 py-6"
          onClick={(_) => nagivate("/auth/signup")}
        >
          Get Started{" "}
        </Button>
      </div>

      <h1 className="text-2xl"></h1>
    </main>
  );
};

export default HomePage;
