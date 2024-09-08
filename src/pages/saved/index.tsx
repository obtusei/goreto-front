import { ArrowRight, Trophy } from "lucide-react";
import hotels from "@/lib/hotels.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SavedPage() {
  return (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Hotels</h1>
        <div className="flex gap-2 items-center opacity-70j">
          <Trophy size={18} />
          <p>415 points</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {hotels.map((item, index) => (
          <div
            key={index}
            className="hover:bg-primary/10 rounded-xl p-2 grow-0 flex flex-col items-center"
          >
            <Carousel className="w-full">
              <CarouselContent className="w-full">
                {item.images.map((img, index) => (
                  <CarouselItem key={index} className="w-[400px] h-[400px]">
                    <img
                      src={img}
                      alt={item["hotel-name"]}
                      className="object-cover h-full w-full rounded-3xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
            <CarouselNext /> */}
            </Carousel>
            <div className="flex items-center gap-4 mt-2">
              <div>
                <h1 className="text-xl font-semibold text-primary">
                  {item["hotel-name"]}
                </h1>
                <h3 className="opacity-50">{item.location}</h3>
                <div className="flex mt-2 gap-2">
                  {/* {[1, 2, 3].map((item, index) => ( */}

                  {/* ))} */}
                </div>
              </div>
              <Button variant={"link"} className="gap-2" asChild>
                <Link to={`/trails/${index + 1}`}>
                  More Detail <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
