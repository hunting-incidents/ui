import { useEffect, useState } from "react";
import "./HomeView.css";
import ControlPanel, { Filters } from "./ControlPanel/ControlPanel";
import MapContainer from "./MapContainer/MapContainer";
import { Incident, IncidentsGeoJSON, ListIncidents } from "../../api/incidents";
import { GeoJsonObject, FeatureCollection } from "geojson";
import { useDebounce } from "@uidotdev/usehooks";
import IncidentList from "./IncidentList/IncidentList";

function HomeView() {
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

  function refreshIncidents() {
    setPage(0);
    setIncidents([]);
    const controller = new AbortController();
    IncidentsGeoJSON(filters, {
      signal: controller.signal,
    }).then((data) => {
      setGeojsonData(data);
    });
    return () => controller.abort();
  }

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

  const debouncedFilters = useDebounce(filters, 500);

  useEffect(() => {
    refreshIncidents();
  }, [debouncedFilters]);

  return (
    <div id="homeView">
      <div
        style={{
          overflow: "scroll",
          padding: "10px",
        }}
      >
        <ControlPanel filters={filters} setFilters={setFilters} />
        <IncidentList incidents={incidents} />
      </div>
      <MapContainer geojsonData={geojsonData} />
    </div>
  );
}

export default HomeView;
