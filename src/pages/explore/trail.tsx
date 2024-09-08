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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/cards/ReviewCard";
import FactCard from "@/components/cards/FactCard";
import CompletedSection from "@/components/cards/CompletedSection";
import ReviewSection from "@/components/cards/ReviewSection";
import properties from "@/lib/properties";

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
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-between p-4 lg:p-10">
            <div className="grid grid-cols-2 gap-10 h-full">
              {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="p-4 bg-primary/10 w-fit text-primary rounded-full">
                    <Ruler />
                  </div>
                  <div>
                    <p className="font-medium text-sm opacity-50">Distance</p>
                    <p className="font-medium text-primary">2.2 km</p>
                  </div>
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
        <div className="grid grid-cols-4 md-4 lg:py-10">
          <div className="col-span-4 lg:col-span-3 p-4 lg:p-10">
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
              <br />
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3, 4, 4].map((item, index) => (
                  <Badge
                    key={index}
                    variant={"outline"}
                    className="text-md opacity-50"
                  >
                    Visit Temple
                  </Badge>
                ))}
              </div>
            </div>
            <br />
            <hr />
            <br />
            {/* Review wala tab */}
            <Tabs defaultValue="reviews" className="w-full ">
              <TabsList className="flex w-full justify-start bg-transparent">
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="facts">Facts</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <hr />
              <TabsContent value="reviews" className="flex gap-6 flex-col mt-4">
                <ReviewSection />
                {/* {data.map((item, index) => (
                  <ReviewCard key={index} />
                ))} */}
              </TabsContent>
              <TabsContent value="facts">
                {data.map((item, index) => (
                  <FactCard key={index} />
                ))}
              </TabsContent>
              <TabsContent value="completed">
                <CompletedSection />
              </TabsContent>
            </Tabs>
          </div>
          <div className="col-span-4 lg:col-span-1">
            <h1 className="text-xl font-medium">Nearby Trails</h1>
            <div className="flex flex-col gap-5">
              {/* {data.map((item, index) => (
                <TrailCard key={index} {...item} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
