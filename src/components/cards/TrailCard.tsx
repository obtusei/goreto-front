import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowRight, Ruler } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  location: string;
  length: string;
  duration: string;
};

export default function TrailCard({
  id,
  title,
  location,
  length,
  duration,
}: Props) {
  return (
    <div className="hover:bg-primary/10 p-2 grow-0 flex flex-col items-center">
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-[400px]">
              <img src="/sample_1.jpg" alt="asdasd" className="" />
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
              <Ruler size={14} /> {duration} hrs
            </Badge>
            {/* ))} */}
          </div>
        </div>
        <Button variant={"link"} className="gap-2" asChild>
          <Link to={`/trails/${id}`}>
            More Detail <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
