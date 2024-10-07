import { useContext } from "react";
import { ConfigContext } from "../../ConfigProvider/ConfigProvider";
import "./ControlPanel.css";

export type Filters = {
  full_text_search: string;
  incident_type: number;
  incident_target: number;
  incident_cause: number;
  starting_date: string;
  ending_date: string;
  geo_box: string;
  status: "" | "Pending" | "Verified" | "Not_verifiable" | "Rejected";
};

type ControlPanelProps = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

function ControlPanel({ filters, setFilters }: ControlPanelProps) {
  const config = useContext(ConfigContext);

  return (
    <div>
      <form>
        <h2>Filter les incidents</h2>
        <div id="form_filter">
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
              setFilters({ ...filters, incident_type: +e.target.value })
            }
          >
            <option value={0}>Tous</option>
            {config.incident_types.map((type) => (
              <option key={type.id} value={type.id} title={type.description}>
                {type.name}
              </option>
            ))}
          </select>
          <label>Cible d'incident</label>
          <select
            value={filters.incident_target}
            onChange={(e) =>
              setFilters({ ...filters, incident_target: +e.target.value })
            }
          >
            <option value={0}>Tous</option>
            {config.incident_targets.map((target) => (
              <option
                key={target.id}
                value={target.id}
                title={target.description}
              >
                {target.name}
              </option>
            ))}
          </select>
          <label>Cause d'incident</label>
          <select
            value={filters.incident_cause}
            onChange={(e) =>
              setFilters({ ...filters, incident_cause: +e.target.value })
            }
          >
            <option value={0}>Tous</option>
            {config.incident_causes.map((cause) => (
              <option key={cause.id} value={cause.id} title={cause.description}>
                {cause.name}
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
                status: e.target.value as Filters["status"],
              })
            }
          >
            <option value="">Tous</option>
            <option value="Pending">En attente</option>
            <option value="Verified">Vérifié</option>
            <option value="Not_verifiable">Non vérifiable</option>
            <option value="Rejected">Rejeté</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ControlPanel;
