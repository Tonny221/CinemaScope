import Image from "next/image";

type MovieProps = {
  title: string;
  image: string;
  alt: string;
  year: number;
};

const MovieCard = ({ title, image, alt, year }: MovieProps) => {
  return (
    <div className="border-2 border-black my-4 rounded-2xl w-fit p-4 mx-auto">
      <h1 className="text-center text-bold text-xl">{title}</h1>
      <Image className="my-0 mx-auto" src={image} alt={alt} width={200} height={200} priority />
      <p className="text-center">{year}</p>
    </div>
  );
};

export default MovieCard;
