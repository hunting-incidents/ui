import { useContext } from "react";
import { ConfigContext } from "../ConfigProvider/ConfigProvider";
import "./ControlPanel.css";

export type Filters = {
  search: string;
  type: number;
  target: number;
  cause: number;
  dateFrom: string;
  dateTo: string;
  townId: number;
  status: "" | "Pending" | "Verified" | "Not_verifiable" | "Rejected";
};

type ControlPanelProps = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

export default ({ filters, setFilters }: ControlPanelProps) => {
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
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <label>Type d'incident</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: +e.target.value })}
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
            value={filters.target}
            onChange={(e) =>
              setFilters({ ...filters, target: +e.target.value })
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
            value={filters.cause}
            onChange={(e) => setFilters({ ...filters, cause: +e.target.value })}
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
              value={filters.dateFrom}
              onChange={(e) =>
                setFilters({ ...filters, dateFrom: e.target.value })
              }
            />
            <label>Au :</label>
            <input
              type="date"
              name="date"
              value={filters.dateTo}
              onChange={(e) =>
                setFilters({ ...filters, dateTo: e.target.value })
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
};
