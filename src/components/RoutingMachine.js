import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { useLocation } from "react-router-dom";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {
  const location = useLocation();
  console.log(location.state) // geting the start point  destination point

  const usingSplitdestinationpoint = location.state.destinationpoint.split(',');

  const map = useMap();
    
  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
       waypoints: [L.latLng(location.state.startpoint[0],location.state.startpoint[1]), L.latLng(usingSplitdestinationpoint[0],usingSplitdestinationpoint[1])],

      routeWhileDragging: false
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
