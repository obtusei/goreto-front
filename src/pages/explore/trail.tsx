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
import { Link, useParams } from "react-router-dom";
import TrailCard from "@/components/cards/TrailCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/cards/ReviewCard";
import FactCard from "@/components/cards/FactCard";
import CompletedSection from "@/components/cards/CompletedSection";
import ReviewSection from "@/components/cards/ReviewSection";
import { useEffect, useState } from "react";
import { RecordModel } from "pocketbase";
import pb from "@/pocketbase";
import TrailBadge from "@/components/TrailBadge";
import useFetch from "@/hooks/useFetch";

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

  // const [trail, setTrail] = useState<RecordModel>();
  // const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { data: trail, loading } = useFetch(
    "trails",
    String(id),
    "location, property, reviews, reviews.rating"
  );
  // useEffect(() => {
  //   const fetchTrails = async () => {
  //     try {
  //       // const records = await pb.collections("trails").getFullList(); // Fetch all trails
  //       const record = await pb.collection("trails").getOne(id ? id : "", {
  //         expand: "location, property, reviews, reviews.rating",
  //       });
  //       console.log(record);
  //       setTrail(record);
  //     } catch (err) {
  //       console.error("Error fetching trails: ", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrails();
  // }, []);

  const reviews = (trail as RecordModel)?.expand?.reviews;
  const reviewFetch = (id: string) => useFetch("reviews", id, "user");

  return (
    <div className="p-4 md:p-10">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Explore</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{(trail as RecordModel)?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="p-2 md:p-4">
        <h1 className="text-3xl font-medium">{(trail as RecordModel)?.name}</h1>
        <div className="mt-2 flex gap-2 items-center">
          <Badge className="text-md h-fit" variant={"outline"}>
            <Star size={14} /> 4.6 (12)
          </Badge>
          <Button asChild variant={"link"}>
            <Link to={"/"}>
              {(trail as RecordModel)?.expand?.location.name}
            </Link>
          </Button>
        </div>

        {/* First Section */}
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-between p-4 lg:p-10">
            <div className="grid grid-cols-2 gap-10 h-full">
              <TrailBadge
                title="Difficulty"
                value={`${(trail as RecordModel)?.expand?.property.difficulty}`}
                icon={<Ruler />}
              />
              <TrailBadge
                title="Distance"
                value={`${(trail as RecordModel)?.expand?.property.length} km`}
                icon={<Ruler />}
              />
              <TrailBadge
                title="Duration"
                value={`${
                  (trail as RecordModel)?.expand?.property.duration
                } hours`}
                icon={<Ruler />}
              />
              <TrailBadge
                title="Temperature"
                value={`${
                  (trail as RecordModel)?.expand?.property.temperature
                } C`}
                icon={<Ruler />}
              />
              <TrailBadge
                title="Safety Info"
                value={`${(trail as RecordModel)?.expand?.property.safetyInfo}`}
                icon={<Ruler />}
              />
              <TrailBadge
                title="Accessibility"
                value={`${
                  (trail as RecordModel)?.expand?.property.accessibility
                }`}
                icon={<Ruler />}
              />
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
                {(trail as RecordModel)?.images.map(
                  (image: any, index: number) => {
                    const imageUrl = pb.files.getUrl(
                      trail as RecordModel,
                      image
                    );
                    return (
                      <CarouselItem key={index} className="">
                        <img
                          src={imageUrl}
                          alt={(trail as RecordModel)?.name}
                          className="rounded-2xl"
                        />
                      </CarouselItem>
                    );
                  }
                )}
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
              {(trail as RecordModel)?.description}
              <br />
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
                {JSON.stringify(reviews)}
                {reviews ? (
                  reviews.map((review: any, index: number) => {
                    return (
                      <ReviewCard
                        key={index}
                        title={review.title}
                        description={review.description}
                        user={{
                          name: "Ramesh",
                          avatar: review.title,
                        }}
                        rating={3}
                        updated={review.updated}
                      />
                    );
                  })
                ) : (
                  <>Loading</>
                )}
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
