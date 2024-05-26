import { Card, CardDescription, CardTitle } from "../ui/card";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
  categorytTitle,
  categoryDesc,
}: {
  categorytTitle: string;
  categoryDesc: string;
  categorySearchKey: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      className="w-[48%] lg:w-[30%]  my-4 p-4 md:p-6  lg:p-8 relative  "
      onClick={() => navigate("/category-songs")}
    >
      <CardTitle className=" capitalize z-[55] text-base sm:tex-lg md:text-2xl">
        {categorytTitle}
      </CardTitle>
      <CardDescription className="my-2 text-xs sm:text-sm md:text-lg">
        {categoryDesc}
      </CardDescription>
    </Card>
  );
};

export default CategoryCard;
