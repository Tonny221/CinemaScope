"use client";
import { getTitles } from "@/services/movies";
import { useQuery } from "react-query";
import MovieCard from "./MovieCard";

const MoviesSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getTitles,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  return (
    <section>
      {data?.results.map((el) => {
        return (
          <MovieCard
            key={el.titleText.text}
            title={el.titleText.text}
            image={el.primaryImage?.url ? el.primaryImage?.url : ""}
            alt={
              el.primaryImage?.caption.plainText
                ? el.primaryImage?.caption.plainText
                : ""
            }
            year={el.releaseYear.year}
            size={{
              width: el.primaryImage?.width ? el.primaryImage?.width : 200,
              heigth: el.primaryImage?.height ? el.primaryImage?.height : 300,
            }}
          />
        );
      })}
    </section>
  );
};

export default MoviesSection;
