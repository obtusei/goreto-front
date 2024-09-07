import pb from "@/pocketbase";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";
import LoadingView from "./LoadingView";

type Props = {};

export default function PlacesTab({}: Props) {
  const [places, setPlaces] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const records = await pb.collection("places").getFullList(); // Fetch all trails
        setPlaces(records);
      } catch (err) {
        console.error("Error fetching trails: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingView />
      ) : (
        <div>
          {places.map((place) => (
            <div
              key={place.id}
              style={{
                backgroundImage: `url(${place.image})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              {place.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
