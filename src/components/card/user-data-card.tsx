import { Card } from "../ui/card";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UserDataCard = ({ index }: { index: number }) => {
  return (
    <AccordionItem value={index.toString()} className=" w-full px-3 py-2 ">
      <AccordionTrigger>
        <h1 className="capitalize font-bold">4 days ago </h1>
      </AccordionTrigger>
      <AccordionContent>
        <Card className="w-full border-none  px-3 py-2 lg:px-8 lg:py-4">
          <div className="flex lg:flex-row gap-4 lg:gap-4">
            <p className="capitalize  "> Tempreture </p>
            <p className="font-bold">
              {" "}
              7 <sup>o</sup>c{" "}
            </p>
          </div>
          <div className="flex lg:flex-row gap-4 lg:gap-4">
            <p className="capitalize "> heart bit </p>
            <p className="font-bold"> 72 </p>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default UserDataCard;
