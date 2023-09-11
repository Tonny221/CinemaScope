import MovieCard from "@/components/MovieCard";
import MoviesSection from "@/components/MoviesSection";
import QueryProvider from "@/components/QueryProvider";
import options from "@/services/api";
import { useQuery } from "react-query";

const page = () => {

  return (
    <section>
      <h1 className="text-center text-4xl my-8 font-bold">Explore the world of cinema!</h1>
      <QueryProvider>
        <MoviesSection />
      </QueryProvider>
    </section>
  );
};

export default page;
