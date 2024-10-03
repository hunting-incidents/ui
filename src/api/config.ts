import { requestCtrl } from "./type";

export type EnumConfig = Array<{
  id: number;
  name: string;
  description: string;
}>;

export async function GetIncidentTypes(opt?: requestCtrl): Promise<EnumConfig> {
  try {
    const response = await fetch("/api/configs/incident-types", { ...opt });
    if (!response.ok) {
      throw new Error(`Error fetching incident types: ${response.statusText}`);
    }
    const json = (await response.json()) as { data: EnumConfig };
    return json.data;
  } catch (error) {
    if ((<Error>error).name === "AbortError") {
      return [];
    }
    console.error(error);
    return [];
  }
}

export async function GetIncidentTargets(
  opt?: requestCtrl
): Promise<EnumConfig> {
  try {
    const response = await fetch("/api/configs/incident-targets", { ...opt });
    if (!response.ok) {
      throw new Error(
        `Error fetching incident targets: ${response.statusText}`
      );
    }
    const json = (await response.json()) as { data: EnumConfig };
    return json.data;
  } catch (error) {
    if ((<Error>error).name === "AbortError") {
      return [];
    }
    console.error(error);
    return [];
  }
}

export async function GetIncidentCauses(
  opt?: requestCtrl
): Promise<EnumConfig> {
  try {
    const response = await fetch("/api/configs/incident-causes", { ...opt });
    if (!response.ok) {
      throw new Error(`Error fetching incident causes: ${response.statusText}`);
    }
    const json = (await response.json()) as { data: EnumConfig };
    return json.data;
  } catch (error) {
    if ((<Error>error).name === "AbortError") {
      return [];
    }
    console.error(error);
    return [];
  }
}
