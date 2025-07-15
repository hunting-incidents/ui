import { Filters } from "../components/HomeView/ControlPanel/ControlPanel";
import { IncidentCause, IncidentTarget, IncidentType } from "./enum";
import { pagingReq, pagingResp, requestCtrl } from "./type";
import { GeoJsonObject, FeatureCollection } from "geojson";

export type Incident = {
  id: number;
  incident_type: IncidentType;
  incident_target: IncidentTarget;
  incident_cause: IncidentCause;
  date: string;
  town_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  incident_status: string;
};

// FIXME: filter should be defined here (as an interface ?)

/**
 *  List incidents
 * @param filter filter applied for listing incidents
 * @param opt optional request controller
 * @returns list of incident or null if request is aborted
 */
export async function ListIncidents(
  filter: Filters & pagingReq,
  opt?: requestCtrl
): Promise<pagingResp<Incident> | null> {
  try {
    const response = await fetch(
      "/api/incidents?" +
        new URLSearchParams(
          Object.entries(filter)
            .filter(([, v]) => v !== "")
            .map(([k, v]) => [k, v.toString()])
        ),
      {
        ...opt,
      }
    );
    if (!response.ok) {
      throw new Error(`Error fetching incident: ${response.statusText}`);
    }
    const json = (await response.json()) as pagingResp<Incident>;
    return json;
  } catch (error) {
    if ((<Error>error).name === "AbortError") {
      return null;
    }
    console.error(error);
    return null;
  }
}

/**
 *  Incident geojson
 * @param filter filter applied for listing incidents
 * @param opt optional request controller
 * @returns geojson of incident or null if request is aborted
 */
export async function IncidentsGeoJSON(
  filter: Filters & pagingReq,
  opt?: requestCtrl
): Promise<(GeoJsonObject & FeatureCollection) | null> {
  try {
    const response = await fetch(
      "/api/incidents/geojson?" +
        new URLSearchParams(
          Object.entries(filter)
            .filter(([, v]) => v !== "")
            .map(([k, v]) => [k, v.toString()])
        ),
      {
        ...opt,
      }
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching incident geojson: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    if ((<Error>error).name === "AbortError") {
      return null;
    }
    console.error(error);
    return null;
  }
}
