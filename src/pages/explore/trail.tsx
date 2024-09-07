import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Ruler, Star } from "lucide-react";
import { Link } from "react-router-dom";
import TrailCard from "@/components/cards/TrailCard";

type Props = {};

export default function TrailPage({}: Props) {
  const data = [
    {
      id: "1",
      title: "Annapurna Trail",
      location: "Annapurana Conservation Area",
      length: "2.2 km",
      duration: "2 hours",
    },
    {
      id: "1",
      title: "Annapurna Trail",
      location: "Annapurana Conservation Area",
      length: "2.2 km",
      duration: "2 hours",
    },
    {
      id: "1",
      title: "Annapurna Trail",
      location: "Annapurana Conservation Area",
      length: "2.2 km",
      duration: "2 hours",
    },
  ];

  return (
    <div className="p-5 md:p-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Explore</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Trails</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Annapurna to ABC trail</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-medium">Annapurna to ABC trail</h1>
        <div className="mt-2 flex gap-2 items-center">
          <Badge className="text-md h-fit" variant={"outline"}>
            <Star size={14} /> 4.6 (12)
          </Badge>
          <Button asChild variant={"link"}>
            <Link to={"/"}>Annapurna Conversation Area</Link>
          </Button>
        </div>

        {/* First Section */}
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between p-10">
            <div className="grid grid-cols-2 gap-10 h-full">
              {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-4 bg-primary/10 w-fit rounded-full">
                    <Ruler />
                  </div>
                  <p className="font-medium text-primary">2.2 km</p>
                </div>
              ))}
            </div>
            <br />
            <div className="flex justify-stretch gap-4">
              <Button className="w-full">Get Direction</Button>
              <Button className="w-full">Share</Button>
              <Button className="w-full">Print</Button>
            </div>
          </div>
          <div>
            <Carousel className="w-full rounded-xl bg-clip-border">
              <CarouselContent className="w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="">
                    <img
                      src="/sample_1.jpg"
                      alt="asdasd"
                      className="rounded-2xl"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        {/* Second Seciton */}
        <div className="grid grid-cols-4 py-10">
          <div className="col-span-3 p-10">
            {/* Description */}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                incidunt rerum fugiat autem molestiae neque amet magni vitae
                odio quia. Pariatur ipsam eveniet cupiditate voluptates tenetur
                aliquam saepe culpa ad. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facilis incidunt rerum fugiat autem molestiae
                neque amet magni vitae odio quia. Pariatur ipsam eveniet
                cupiditate voluptates tenetur aliquam saepe culpa ad. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Facilis
                incidunt rerum fugiat autem molestiae neque amet magni vitae
                odio quia. Pariatur ipsam eveniet cupiditate voluptates tenetur
                aliquam saepe culpa ad.
              </p>
            </div>
            {/* Review wala tab */}
          </div>
          <div>
            <h1 className="text-xl font-medium">Nearby Trails</h1>
            <div className="flex flex-col gap-5">
              {data.map((item, index) => (
                <TrailCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
