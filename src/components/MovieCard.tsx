import Image from "next/image";

type MovieProps = {
  title: string;
  image: string;
  size : {
    width: number
    heigth: number
  }
  alt: string;
  year: number;
};

const MovieCard = ({ title, image, alt, year, size }: MovieProps) => {
  return (
    <div className="border-2 gap-4 col-span-1 border-black my-4 rounded-2xl w-4/5 md:w-2/5 p-4 mx-auto">
      <h1 className="text-center font-bold uppercase">{title}</h1>
      <Image className="my-0 mx-auto" src={image} alt={alt} width={size.width} height={size.heigth} priority />
      <p className="text-center">{year}</p>
    </div>
  );
};

export default MovieCard;
