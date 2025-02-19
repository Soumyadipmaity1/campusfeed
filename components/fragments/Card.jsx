import { Card, CardBody, CardFooter, Image, Link } from "@heroui/react";
import { FaGithub } from "react-icons/fa";

const ImageCard = ({ title, subtitle = "subtext", image, github }) => {
  return (
    <Card
      isPressable
      shadow="lg"
      classNames={{
<<<<<<< HEAD
        base: "bg-gradient-to-b from-[#8690b1] to-[#FCFDFD] select-none group shrink-0 w-[180px] rounded-xl hover:scale-105 transform-all duration-200 ease-in-out h-full",
=======
        base: "bg-gradient-to-b from-slate-800 to-neutral-100 select-none group shrink-0 w-[160px] rounded-xl hover:scale-105 transform-all duration-200 ease-in-out h-full",
>>>>>>> caaed97ca06159b38dcc9f9eacb14c26f630ae02
      }}
    >
      <CardBody className="overflow-visible p-2">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl">
          <Image
            shadow="sm"
            alt={title}
            className="h-[160px] w-[160px] object-cover"
            src={image}
          />
        </div>
      </CardBody>
      <CardFooter className="flex h-full w-full flex-row items-end justify-between text-neutral-900">
        <div className="flex w-[75%] flex-col items-center justify-start gap-2">
          <h1 className="text-md w-full text-left font-bold">{title}</h1>
          <h1 className="w-full text-left text-sm">{subtitle}</h1>
        </div>
        <div className="flex h-full w-[20%] items-end justify-end">
          <Link href={github} target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
