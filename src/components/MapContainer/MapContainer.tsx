import { GeoJsonObject } from "geojson";
import "../../App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

interface MapContainerProps {
  geojsonData?: GeoJsonObject | null;
}

export default ({ geojsonData }: MapContainerProps) => {
  return (
    <MapContainer
      bounds={[
        [51.124199, -5.142222],
        [42.3521, 9.559167],
      ]}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && <GeoJSON data={geojsonData} />}
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
