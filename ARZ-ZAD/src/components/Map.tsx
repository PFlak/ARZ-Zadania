import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

function Map() {
  const position: LatLngExpression = [51.505, -0.09];
  return (
    <MapContainer
      className="map-container"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* Warstwa podstawowa z drogami, miastami, terenem */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>

      {/* Warstwa dodatkowa tylko z oznaczeniami morskimi*/}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
