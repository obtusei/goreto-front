import TrailCard from "@/components/cards/TrailCard";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSessionQuery } from "@/redux/features/authSlice";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import axios from "axios";

const checkSession = async () => {
  const csrfToken = "5fhFB08JiLQz7LilXMpXM02rqvbmfh8O"; // Replace with dynamic retrieval if possible
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/session-check/",
      {
        withCredentials: true, // Include cookies
        headers: {
          "X-CSRFToken": "5fhFB08JiLQz7LilXMpXM02rqvbmfh8O",
        },
      }
    );
    console.log("Session Status:", response.data);
    console.log("Session Headers:", response.headers);
  } catch (error) {
    console.error("Error checking session:", error);
  }
};

export default function ExplorePage({}) {
  const [cookies, setCookie] = useCookies(["csrftoken"]);
  const data = [
    {
      id: "1",
      title: "Annapurna Trail",
      location: "Annapurana Conservation Area",
      length: "2.2 km",
      duration: "2 hours",
    },
  ];
  const [token, setToken] = useState("");
  const cs = checkSession();
  const {
    data: sesionData,
    error,
    isLoading,
  } = useSessionQuery("5fhFB08JiLQz7LilXMpXM02rqvbmfh8O");

  useEffect(() => {
    console.log(document.cookie.split(";"));
  }, [token]);
  return (
    <div className="p-5 md:p-10">
      <Header />
      Token:{JSON.stringify(cookies.csrftoken)} <br />
      Status:
      {isLoading
        ? "Loading"
        : sesionData
        ? JSON.stringify(sesionData)
        : JSON.stringify(error)}
      <Tabs defaultValue="foryou" className="w-full ">
        <TabsList className="flex w-full justify-start bg-transparent">
          <TabsTrigger value="foryou">For you</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
