import "./ControlPanel.css";
// Ajout des imports nécessaires
import {
  IncidentType,
  IncidentTarget,
  IncidentCause,
  IncidentStatus,
  getIncidentTypeMap,
  getIncidentTargetMap,
  getIncidentCauseMap,
  getIncidentStatusMap,
} from "../../../api/enum";

export type Filters = {
  full_text_search: string;
  incident_type: IncidentType | "";
  incident_target: IncidentTarget | "";
  incident_cause: IncidentCause | "";
  starting_date: string;
  ending_date: string;
  geo_box: string;
  status: "" | IncidentStatus;
};

type ControlPanelProps = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

function ControlPanel({ filters, setFilters }: ControlPanelProps) {
  // Utilisation des maps pour les options
  const incidentTypeMap = getIncidentTypeMap();
  const incidentTargetMap = getIncidentTargetMap();
  const incidentCauseMap = getIncidentCauseMap();
  const incidentStatusMap = getIncidentStatusMap();

  return (
    <div className="control-panel card">
      <form>
        <h2>Filtrer les incidents</h2>
        <div id="form_filter" className="card">
          <label htmlFor="form_search" title="Recherche parmi les incidents">
            Rechercher :
          </label>
          <input
            type="text"
            name="search"
            id="form_search"
            value={filters.full_text_search}
            onChange={(e) =>
              setFilters({ ...filters, full_text_search: e.target.value })
            }
          />
          <label>Type d'incident</label>
          <select
            value={filters.incident_type}
            onChange={(e) =>
              setFilters({
                ...filters,
                incident_type: e.target.value as IncidentType | "",
              })
            }
          >
            <option value="">Tous</option>
            {Object.entries(incidentTypeMap).map(([key, val]) => (
              <option key={key} value={key} title={val.description}>
                {val.name}
              </option>
            ))}
          </select>
          <label>Cible d'incident</label>
          <select
            value={filters.incident_target}
            onChange={(e) =>
              setFilters({
                ...filters,
                incident_target: e.target.value as IncidentTarget | "",
              })
            }
          >
            <option value="">Tous</option>
            {Object.entries(incidentTargetMap).map(([key, val]) => (
              <option key={key} value={key} title={val.description}>
                {val.name}
              </option>
            ))}
          </select>
          <label>Cause d'incident</label>
          <select
            value={filters.incident_cause}
            onChange={(e) =>
              setFilters({
                ...filters,
                incident_cause: e.target.value as IncidentCause | "",
              })
            }
          >
            <option value="">Tous</option>
            {Object.entries(incidentCauseMap).map(([key, val]) => (
              <option key={key} value={key} title={val.description}>
                {val.name}
              </option>
            ))}
          </select>
          <div id="form_filter_date">
            <label>
              {/* date */}
              Du :
            </label>

            <input
              type="date"
              name="date"
              value={filters.starting_date}
              onChange={(e) =>
                setFilters({ ...filters, starting_date: e.target.value })
              }
            />
            <label>Au :</label>
            <input
              type="date"
              name="date"
              value={filters.ending_date}
              onChange={(e) =>
                setFilters({ ...filters, ending_date: e.target.value })
              }
            />
          </div>
          <label>
            {/* town_id */}
            Ville
          </label>
          {/* Fulltext search for towns */}
          <select disabled></select>
          <label>
            {/* incident_status */}
            Statut d'incident
          </label>
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({
                ...filters,
                status: e.target.value as IncidentStatus | "",
              })
            }
          >
            <option value="">Tous</option>
            {Object.entries(incidentStatusMap).map(([key, val]) => (
              <option key={key} value={key} title={val.description}>
                {val.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default ControlPanel;
