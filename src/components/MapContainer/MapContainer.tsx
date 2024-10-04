import { GeoJsonObject } from "geojson";
import "../../App.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer as ReactLeafletMapContainer,
  TileLayer,
  GeoJSON,
} from "react-leaflet";
import { useEffect, useRef } from "react";
import { GeoJSON as LeafletGeoJSON } from "leaflet";

interface MapContainerProps {
  geojsonData?: GeoJsonObject | null;
}

function MapContainer({ geojsonData }: MapContainerProps) {
  const geoJsonRef = useRef<LeafletGeoJSON | null>(null);

  useEffect(() => {
    if (geojsonData && geoJsonRef.current) {
      geoJsonRef.current.clearLayers();
      geoJsonRef.current.addData(geojsonData);
    }
  }, [geojsonData]);

  return (
    <ReactLeafletMapContainer
      bounds={[
        [51.124199, -5.142222],
        [42.3521, 9.559167],
      ]}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && <GeoJSON ref={geoJsonRef} data={geojsonData} />}
    </ReactLeafletMapContainer>
  );
}

export default MapContainer;
