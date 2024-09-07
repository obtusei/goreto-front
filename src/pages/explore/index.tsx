import TrailCard from "@/components/cards/TrailCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExplorePage({}) {
  const data = [
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
      <h1 className="text-3xl font-medium">Explore</h1>
      <br />
      <Tabs defaultValue="foryou" className="w-full ">
        <TabsList className="flex w-full justify-start bg-transparent">
          <TabsTrigger value="foryou">For you</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">
          <div className="grid grid-cols-4 gap-10">
            {data.map((item, index) => (
              <TrailCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="nearby">adasdasd</TabsContent>
        <TabsContent value="popular">adasdasd</TabsContent>
      </Tabs>
    </div>
  );
}
