import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowRight, Ruler } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  location: string;
  images: string[];
};

export default function TrailCard({ title, location, images }: Props) {
  return (
    <div className="hover:bg-primary/10 p-2 grow-0 flex flex-col items-center">
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {images.map((img, index) => (
            <CarouselItem key={index} className="w-[400px] h-[400px]">
              <img src={img} className="h-full object-cover w-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="flex items-center gap-4 mt-2">
        <div>
          <h1 className="text-xl font-semibold text-primary">{title}</h1>
          <h3 className="opacity-50">{location}</h3>
          <div className="flex mt-2 gap-2">
            {/* {[1, 2, 3].map((item, index) => ( */}
            <Badge className="gap-2" variant={"secondary"}>
              <Ruler size={14} />
              {length} km
            </Badge>
            <Badge className="gap-2" variant={"secondary"}>
              <Ruler size={14} />3 hrs
            </Badge>
            {/* ))} */}
          </div>
        </div>
        <Button variant={"link"} className="gap-2" asChild>
          <Link to={`/trails/12 `}>
            More Detail <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
