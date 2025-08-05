import { lazy } from "react";

export const LazyMap = lazy(async () => {
  // Import dynamique pour éviter les problèmes SSR
  const [{ MapContainer, TileLayer, Marker, Popup, AttributionControl }, L] =
    await Promise.all([import("react-leaflet"), import("leaflet")]);

  // Import du CSS
  await import("leaflet/dist/leaflet.css");

  // Composant interne de la cartes
  function LeafletMap({ className }: { className?: string }) {
    return (
      <MapContainer
        center={[46.603354, 1.888334]} // Centre de la France
        zoom={6}
        className={className}
        style={{ height: "100%", width: "100%" }}
        // Disable default attribution control to prevent political issues in prefix
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Custom neutral attribution control */}
        <AttributionControl
          position="bottomright"
          prefix='<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>'
        />
        <Marker position={[46.603354, 1.888334]}>
          <Popup>Centre de la France</Popup>
        </Marker>
      </MapContainer>
    );
  }

  return { default: LeafletMap };
});
