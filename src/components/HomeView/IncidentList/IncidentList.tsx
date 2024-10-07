import { Incident } from "../../../api/incidents";

interface IncidentListProps {
  incidents: Incident[];
}

function IncidentList({ incidents }: IncidentListProps) {
  return (
    <div className="incident-list">
      Résultats de la recherche
      <div
        style={{
          textAlign: "left",
        }}
      >
        {incidents.map((incident) => (
          <div key={incident.id}>
            <h3>{incident.title}</h3>
            <p>{incident.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncidentList;
