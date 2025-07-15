import { createContext, useMemo } from "react";

type Config = {} & Record<string, unknown>;

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const ConfigContext = createContext<Config>({});

function ConfigProvider({ children }: ConfigProviderProps) {
  const config = useMemo(() => ({}), []);

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export default ConfigProvider;
