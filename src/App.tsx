import { useEffect, useState } from "react";
import "./App.css";
import ConfigProvider from "./components/ConfigProvider/ConfigProvider";
import ControlPanel, { Filters } from "./components/ControlPanel/ControlPanel";
import MapContainer from "./components/MapContainer/MapContainer";
import { Incident, IncidentsGeoJSON, ListIncidents } from "./api/incidents";
import { GeoJsonObject } from "geojson";

function App() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    type: 0,
    target: 0,
    cause: 0,
    dateFrom: "",
    dateTo: "",
    townId: 0,
    status: "",
  });

  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [geojsonData, setGeojsonData] = useState<GeoJsonObject | null>(null);

  const [page, setPage] = useState(0);

  useEffect(() => {
    ListIncidents({ ...filters, page }).then((resp) => {
      if (resp && resp.data) {
        setIncidents((l) => l.concat(resp.data));
        if (resp.page_size === resp.data.length) {
          setPage((p) => p + 1);
        }
      }
    });
  }, [filters, page]);

  useEffect(() => {
    IncidentsGeoJSON(filters).then((data) => {
      setGeojsonData(data);
    });
  }, [filters]);

  return (
    <ConfigProvider>
      <div id="homeView">
        <ControlPanel filters={filters} setFilters={setFilters} />
        <MapContainer geojsonData={geojsonData} />
      </div>
      {incidents.map((incident) => (
        <div key={incident.id}>
          <h3>{incident.title}</h3>
          <p>{incident.description}</p>
        </div>
      ))}
    </ConfigProvider>
  );
}

export default App;
