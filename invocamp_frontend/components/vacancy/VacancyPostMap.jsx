import { useEffect } from "react";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";

const VacancyPostMap = ({ lat, lng }) => {

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={20}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]}>
        <Popup position={[lat, lng]}>
          <div className="flex flex-col gap-y-2">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 dark:text-gray-400">
              <p>See in google maps</p>
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default VacancyPostMap