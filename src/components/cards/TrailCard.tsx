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

type Props = {};

export default function TrailCard({}: Props) {
  return (
    <div className="hover:bg-primary/10 p-2 grow-0 flex flex-col items-center">
      <Carousel className="w-full">
        <CarouselContent className="w-full bg-red-300">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="bg-red-800 w-[400px]">
              <img src="/sample_1.jpg" alt="asdasd" className="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="flex items-center gap-4 mt-2">
        <div>
          <h1 className="text-xl font-semibold text-primary">
            Annapurna Trail
          </h1>
          <h3 className="opacity-50">Annapurna Conservation Arae</h3>
          <div className="flex mt-2">
            {[1, 2, 3].map((item, index) => (
              <Badge key={index} className="gap-2" variant={"secondary"}>
                <Ruler size={14} /> 2.2 km
              </Badge>
            ))}
          </div>
        </div>
        <Button variant={"link"} className="gap-2">
          More Detail <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
