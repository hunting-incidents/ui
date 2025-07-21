import { Incident } from "../../../api/incidents";
import "./IncidentList.css";
import {
  GiBrokenBone,
  GiGraveFlowers,
  GiSawedOffShotgun,
  GiShatteredGlass,
} from "react-icons/gi";
import { IncidentType } from "../../../api/enum";

interface IncidentListProps {
  incidents: Incident[];
}

function IncidentList({ incidents }: IncidentListProps) {
  function TypeToIcon(type: IncidentType) {
    switch (type) {
      case IncidentType.DEATH:
        return (
          <GiGraveFlowers size={"2rem"} style={{ marginRight: ".5rem" }} />
        );
      case IncidentType.MENACE:
        return (
          <GiSawedOffShotgun size={"2rem"} style={{ marginRight: ".5rem" }} />
        );
      case IncidentType.INJURY:
        return <GiBrokenBone size={"2rem"} style={{ marginRight: ".5rem" }} />;
      case IncidentType.DESTRUCTION:
        return (
          <GiShatteredGlass size={"2rem"} style={{ marginRight: ".5rem" }} />
        );
      default:
        return null;
    }
  }

  return (
    <div className="incident-list">
      Résultats de la recherche
      <ul
        style={{
          textAlign: "left",
        }}
      >
        {incidents.map((incident) => (
          <li key={incident.id}>
            <h3>
              {TypeToIcon(incident.incident_type)}
              {incident.title}
            </h3>
            <p>{incident.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;
