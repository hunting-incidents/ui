import { useContext } from "react";
import { Incident } from "../../../api/incidents";
import "./IncidentList.css";
import {
  GiBrokenBone,
  GiGraveFlowers,
  GiSawedOffShotgun,
  GiShatteredGlass,
} from "react-icons/gi";
import { ConfigContext } from "../../ConfigProvider/ConfigProvider";

interface IncidentListProps {
  incidents: Incident[];
}

function IncidentList({ incidents }: IncidentListProps) {
  const config = useContext(ConfigContext);

  function TypeToIcon(type: number) {
    const name = config.incident_types.find((t) => t.id === type)?.name;

    switch (name?.toLowerCase()) {
      case "mort":
        return (
          <GiGraveFlowers size={"2rem"} style={{ marginRight: ".5rem" }} />
        );
      case "menace":
        return (
          <GiSawedOffShotgun size={"2rem"} style={{ marginRight: ".5rem" }} />
        );
      case "blessure":
        return <GiBrokenBone size={"2rem"} style={{ marginRight: ".5rem" }} />;
      case "destruction":
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
              {TypeToIcon(incident.incident_type_id)}
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
