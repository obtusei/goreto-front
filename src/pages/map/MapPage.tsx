import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import TrailSidebar from "@/components/TrailSidebar";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { RecordModel } from "pocketbase";
import pb from "@/pocketbase";

type Props = {};

const RoutingControl = ({ waypoints }: { waypoints: LatLngExpression[] }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: waypoints.map((point) => L.latLng(point)),
      routeWhileDragging: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl); // Cleanup on unmount
    };
  }, [map]);

  return null;
};

const ZoomControl: React.FC = () => {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className="absolute bottom-8 right-4 flex flex-col space-y-2 z-50">
      <Button
        onClick={handleZoomIn}
        variant={"outline"}
        size={"icon"}
        className="rounded-full"
      >
        <Plus />
      </Button>
      <Button
        onClick={handleZoomOut}
        variant={"outline"}
        size={"icon"}
        className="rounded-full"
      >
        <Minus />
      </Button>
    </div>
  );
};

const CustomMarker = L.divIcon({
  className: "custom-marker",
  html: '<div style="background-color: #038850; width: 30px; height: 30px; border-radius: 50%; border: 2px solid #fff;"></div>',
  iconSize: [30, 30],
});

export default function MapPage({}: Props) {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const [error, setError] = useState("");
  const [trails, setTrails] = useState<RecordModel[]>([]);
  const [loading, setLoading] = useState(true);

  const waypoints: LatLngExpression[] = [
    [51.505, -0.09], // Start
    [51.515, -0.1], // Checkpoint 1
    [51.52, -0.12], // End
  ];

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        // const records = await pb.collections("trails").getFullList(); // Fetch all trails
        const records = await pb.collection("trails").getFullList({
          expand: "coordinates",
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="relative bg-green-200 h-screen overflow-hidden">
      {JSON.stringify(trails)}
      <MapContainer
        center={[location.lat, location.lon]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lon]} icon={CustomMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RoutingControl waypoints={waypoints} />
        <ZoomControl />
      </MapContainer>
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[500px] z-50 p-5">
        <TrailSidebar />
      </div>
    </div>
  );
}
