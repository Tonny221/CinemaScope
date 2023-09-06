import Image from "next/image";

type MovieProps = {
  title: string;
  image: string;
  alt: string;
  year: number;
};

const MovieCard = ({ title, image, alt, year }: MovieProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} alt={alt} width={200} height={200} priority />
      <p>{year}</p>
    </div>
  );
};

export default MovieCard;
