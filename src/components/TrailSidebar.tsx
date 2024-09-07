import {
  ArrowRight,
  Bookmark,
  Circle,
  Flag,
  Ruler,
  Star,
  XCircle,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

type Props = {};

export default function TrailSidebar({}: Props) {
  const [startTrail, setStartTrail] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg h-full p-6 overflow-y-scroll no-scrollbar">
      <div className="flex gap-10 justify-between">
        <h1 className="text-3xl font-medium">Annapurna to ABC trail</h1>
        <Button size={"icon"} variant={"ghost"}>
          <Bookmark />
        </Button>
      </div>
      <div className="mt-2 flex gap-2 items-center">
        <Badge className="text-md h-fit" variant={"outline"}>
          <Star size={14} /> 4.6 (12)
        </Badge>
        <Button asChild variant={"link"}>
          <Link to={"/"}>Annapurna Conversation Area</Link>
        </Button>
      </div>
      {/* DIVIDER */}
      {!startTrail ? (
        <div className="flex flex-col justify-between py-4 ">
          <div className="flex justify-stretch gap-4">
            <Button className="w-full" variant={"outline"}>
              Share
            </Button>
            <Button className="w-full" variant={"outline"}>
              Print
            </Button>
          </div>
          <br />
          <div>
            <div className="line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe
              doloribus labore laboriosam cumque culpa atque voluptatibus
              aliquam assumenda, cum delectus reprehenderit, iure commodi? Amet
              sit suscipit ut inventore eum.{" "}
            </div>
            <Link to={"/"} className="text-primary hover:underline">
              Read More
            </Link>
          </div>
          <div className="flex flex-wrap gap-20 pt-6 h-full">
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
          <br />
          <Button onClick={() => setStartTrail(true)}>Start trail</Button>
          <br />
          <Button variant={"outline"} className="gap-2">
            More Info <ArrowRight size={14} />
          </Button>
        </div>
      ) : (
        <Tabs>
          <br />
          <hr />
          <TabsList className="mt-2">
            <TabsTrigger value="trail">Trail</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          </TabsList>
          <TabsContent value="trail">
            <div className="py-4">
              <h1>Trail has started.</h1>
              <br />
              <hr />
              <div>
                {[
                  {
                    title: "Trail have began",
                    isStart: true,
                    isCurrentPath: true,
                  },
                  {
                    title: "Reached Dunche",
                  },
                  {
                    title: "Trail have began",
                    isCheckpoint: true,
                  },
                  {
                    title: "Trail have began",
                  },
                  {
                    title: "Trail have began",
                    isEndPoint: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between border-b items-start p-2 ${
                      item.isCurrentPath ? "bg-primary/5 text-primary" : ""
                    }`}
                  >
                    <div className=" flex gap-2 items-start">
                      <div className="mt-1">
                        {item.isStart ? (
                          <Circle color="green" />
                        ) : item.isEndPoint ? (
                          <XCircle />
                        ) : item.isCheckpoint ? (
                          <Flag />
                        ) : (
                          <ArrowRight />
                        )}
                      </div>
                      <div>
                        <h1 className="text-lg font-medium">
                          You have started the trail
                        </h1>
                        <p>Chaubar, Kathmandu</p>
                      </div>
                    </div>
                    <p>5:30 PM</p>
                  </div>
                ))}
              </div>
              <br />
              <Button
                variant={"outline"}
                onClick={() => setStartTrail(false)}
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="itinerary">
            <div className="py-4">
              <div className="flex justify-between items-center">
                <h1>Your plan for the trip</h1>
                <div className="flex gap-2">
                  <Button className="w-full" variant={"outline"}>
                    Generate
                  </Button>
                  <Button className="w-full">Add</Button>
                </div>
              </div>
              <br />
              <hr />
              <div>
                {[
                  {
                    title: "Trail have began",
                    isStart: true,
                    isCurrentPath: true,
                  },
                  {
                    title: "Reached Dunche",
                  },
                  {
                    title: "Trail have began",
                    isCheckpoint: true,
                  },
                  {
                    title: "Trail have began",
                  },
                  {
                    title: "Trail have began",
                    isEndPoint: true,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between border-b items-start p-2 ${
                      item.isCurrentPath ? "bg-primary/5 text-primary" : ""
                    }`}
                  >
                    <div>
                      <h1 className="text-lg font-medium">
                        You have started the trail
                      </h1>
                      <p>Chaubar, Kathmandu</p>
                    </div>
                    <p>5:30 PM</p>
                  </div>
                ))}
              </div>
              <br />
              <Button
                variant={"outline"}
                onClick={() => setStartTrail(false)}
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
