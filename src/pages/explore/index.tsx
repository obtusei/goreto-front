import TrailCard from "@/components/cards/TrailCard";
import Header from "@/components/Header";
import LoadingView from "@/components/LoadingView";
import PlacesTab from "@/components/PlacesTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pb from "@/pocketbase";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";
import trailings from "@/lib/trails.json";

export default function ExplorePage({}) {
  const [trails, setTrails] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        // const records = await pb.collections("trails").getFullList(); // Fetch all trails
        const records = await pb.collection("trails").getFullList({
          expand: "location property",
        });
        console.log(records);
        setTrails(records);
      } catch (err) {
        console.error("Error fetching trails: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  return (
    <div className="p-5 md:p-10">
      <Header />
      <Tabs defaultValue="foryou" className="w-full ">
        <TabsList className="flex w-full justify-start bg-transparent">
          <TabsTrigger value="foryou">For you</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="places">Places</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {trailings.map((trail, index) => (
              <TrailCard
                key={index}
                title={trail.title}
                location={trail.location}
                images={trail.images}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="nearby">adasdasd</TabsContent>
        <TabsContent value="popular">adasdasd</TabsContent>
        <TabsContent value="places">
          <PlacesTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
