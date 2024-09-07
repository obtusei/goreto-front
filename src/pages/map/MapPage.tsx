import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import TrailSidebar from "@/components/TrailSidebar";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type Props = {};

const RoutingControl: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const waypoints: LatLngExpression[] = [
      [51.505, -0.09], // Start
      [51.515, -0.1], // Checkpoint 1
      [51.52, -0.12], // End
    ];

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
  return (
    <div className="relative bg-green-200 h-screen overflow-hidden">
      {/* <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", zIndex: 0 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={CustomMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RoutingControl />
        <ZoomControl />
      </MapContainer> */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[500px] z-50 p-5">
        <TrailSidebar />
      </div>
    </div>
  );
}
