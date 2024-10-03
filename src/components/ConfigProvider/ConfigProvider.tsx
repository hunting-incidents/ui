import { createContext, useEffect, useMemo, useState } from "react";
import {
  EnumConfig,
  GetIncidentCauses,
  GetIncidentTargets,
  GetIncidentTypes,
} from "../../api/config";

type Config = {
  incident_types: EnumConfig;
  incident_targets: EnumConfig;
  incident_causes: EnumConfig;
};

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigContext = createContext<Config>({
  incident_types: [],
  incident_targets: [],
  incident_causes: [],
});

export default ({ children }: ConfigProviderProps) => {
  const [incident_types, setIncidentTypes] = useState<EnumConfig>([]);
  const [incident_targets, setIncidentTargets] = useState<EnumConfig>([]);
  const [incident_causes, setIncidentCauses] = useState<EnumConfig>([]);

  useEffect(() => {
    const controller = new AbortController();
    GetIncidentTypes({ signal: controller.signal }).then(setIncidentTypes);
    GetIncidentTargets({ signal: controller.signal }).then(setIncidentTargets);
    GetIncidentCauses({ signal: controller.signal }).then(setIncidentCauses);
    return () => controller.abort();
  }, []);

  const config = useMemo(
    () => ({
      incident_types,
      incident_targets,
      incident_causes,
    }),
    [incident_types, incident_targets, incident_causes]
  );

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
