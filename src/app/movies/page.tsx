import MovieCard from "@/components/MovieCard";
import MoviesSection from "@/components/MoviesSection";
import QueryProvider from "@/components/QueryProvider";
import options from "@/services/api";
import { useQuery } from "react-query";

const page = () => {

  return (
    <section>
      <QueryProvider>
        <MoviesSection />
      </QueryProvider>
    </section>
  );
};

export default page;
