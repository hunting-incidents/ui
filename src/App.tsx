import { useEffect, useState } from "react";
import "./App.css";
import ConfigProvider from "./components/ConfigProvider/ConfigProvider";
import ControlPanel, { Filters } from "./components/ControlPanel/ControlPanel";
import MapContainer from "./components/MapContainer/MapContainer";
import { Incident, IncidentsGeoJSON, ListIncidents } from "./api/incidents";
import { GeoJsonObject, FeatureCollection } from "geojson";

function App() {
  const [filters, setFilters] = useState<Filters>({
    full_text_search: "",
    incident_type: 0,
    incident_target: 0,
    incident_cause: 0,
    starting_date: "",
    ending_date: "",
    geo_box: "",
    status: "",
  });

  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [geojsonData, setGeojsonData] = useState<
    (GeoJsonObject & FeatureCollection) | null
  >(null);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    ListIncidents(
      { ...filters, page },
      {
        signal: controller.signal,
      }
    ).then((resp) => {
      if (resp && resp.data) {
        setIncidents((l) => l.concat(resp.data));
        if (resp.page_size === resp.data.length) {
          setPage((p) => p + 1);
        }
      }
    });
    return () => controller.abort();
  }, [page]);

  useEffect(() => {
    setPage(0);
    setIncidents([]);
    const controller = new AbortController();
    IncidentsGeoJSON(filters, {
      signal: controller.signal,
    }).then((data) => {
      setGeojsonData(data);
    });
    return () => controller.abort();
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
