import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  Circle,
  Flag,
  Ruler,
  Star,
  XCircle,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import properties from "@/lib/properties";
import itinerary from "@/lib/itinerary.json";

type Props = {};

export default function TrailSidebar({}: Props) {
  const [startTrail, setStartTrail] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  return (
    <div
      className={`${
        isAlert ? "bg-red-50 border-red-600" : "bg-white"
      } border dark:bg-slate-900 rounded-lg h-full p-6 overflow-y-scroll no-scrollbar`}
    >
      <div className="flex gap-10 justify-between">
        <h1 className={`${isAlert ? "text-red-600" : ""} text-3xl font-medium`}>
          Annapurna to ABC trail
        </h1>
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
          <div className="flex flex-wrap gap-16 pt-6 h-full">
            {properties.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="p-4 bg-primary/10 w-fit text-primary rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-sm opacity-50">{item.title}</p>
                  <p className="font-medium text-primary">{item.value}</p>
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
          <div>
            {!isAlert ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full gap-4" variant={"destructive"}>
                    <AlertCircle /> Alert
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-red-50">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-600">
                      Are you sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This alert action will alert nearby authorities like park
                      patrol, nearby police station, or the hotel you are
                      staying in.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => setIsAlert(true)}
                      className="bg-red-600 hover:bg-red-700 active:bg-red-800"
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <div className="border border-red-600 bg-red-100 p-4 rounded-lg">
                <h1 className="text-red-600 font-medium">
                  Your last location is shared!
                </h1>
                <p className="text-sm">
                  If you don't response, authorities will be alerted with your
                  last known location and your basic information including
                  contact details.
                </p>
                <br />
                <div className="flex gap-2">
                  <Button className="w-full" variant={"destructive"}>
                    SMS
                  </Button>
                  <Button className="w-full" variant={"destructive"}>
                    Call
                  </Button>
                  <Button className="w-full" variant={"destructive"}>
                    Response
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
          <hr />
          <TabsList defaultValue="hotels" className="mt-2">
            <TabsTrigger value="trail">Trail</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
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
                    time: "12:30 PM",
                    location: "",
                  },
                  {
                    title: "Reached Dunche",
                    time: "2:15 PM",
                    location: "",
                  },
                  {
                    title: "Checkpoint reached",
                    isCheckpoint: true,
                    time: "3:40 PM",
                    location: "",
                  },
                  {
                    title: "Reach have began",
                    time: "5:20 PM",
                    location: "",
                  },
                  {
                    title: "Trail will end",
                    isEndPoint: true,
                    time: "6:10 PM",
                    location: "",
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
                        <h1 className="text-lg font-medium">{item.title}</h1>
                        <p>Chaubar, Kathmandu</p>
                      </div>
                    </div>
                    <p>{item.time}</p>
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
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between border-b items-start p-2`}
                  >
                    <div>
                      <h1 className="text-lg font-medium">{item.title}</h1>
                      <p>{item.location}</p>
                    </div>
                    <p>{item.day}</p>
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
          <TabsContent value="hotels">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="border-b flex items-center justify-between"
              >
                <div>
                  <h1 className="text-lg font-medium">Hotel Magar Lama</h1>
                  <h1>Baidati, Kaski</h1>
                </div>
                <div className="flex items-center gap-4">
                  <Badge>10%</Badge>
                  <div>
                    <s>Rs. 2000</s>
                    <br />
                    <b>Rs. 1800</b>
                  </div>
                </div>
                <Button variant={"outline"} size={"sm"}>
                  Book
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
