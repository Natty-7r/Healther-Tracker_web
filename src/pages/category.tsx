import CategoryCard from "@/components/card/category-card";
import { SongsHeader } from "@/components/header/mezmur-header";

const CagetoriesPage = () => {
  return (
    <main className="h-[84%] sm:h-[91%]    relative">
      <SongsHeader title="categories" />
      <section className="px-4 sm:px-8 lg:px-32 h-[90%]  overflow-auto py-2 sm:py-4  flex flex-wrap justify-between hideable_thin_scrollbar">
        {new Array(51).fill(1).map((_, index: number) => (
          <CategoryCard
            key={index}
            categorytTitle="yesilasie mezmurs"
            categoryDesc="  ye agazat alem mezmurs"
            categorySearchKey="silasie"
          />
        ))}
      </section>
    </main>
  );
};

export default CagetoriesPage;
