import { useMemo } from "react";
import { ListIncidents, IncidentsGeoJSON, Incident } from "../../api/incidents";
import { pagingResp } from "../../api/type";
import { Filters } from "../../components/HomeView/ControlPanel/ControlPanel";
import { GeoJsonObject, FeatureCollection } from "geojson";
import { useApi, UseApiResult } from "./useApi";

// Types for specific hooks
type UseIncidentsListResult = UseApiResult<pagingResp<Incident>>;
type UseIncidentsGeoJSONResult = UseApiResult<
  GeoJsonObject & FeatureCollection
>;

// Options for pagination
type PaginationOptions = {
  page?: number;
  page_size?: number;
  order?: string;
};

/**
 * Hook to fetch incidents list with filters and debounce
 * @param filters - Active filters
 * @param paginationOptions - Pagination options
 * @param debounceMs - Debounce delay in milliseconds (default: 300ms)
 */
export function useIncidentsList(
  filters: Filters,
  paginationOptions: PaginationOptions = {},
  debounceMs: number = 300
): UseIncidentsListResult {
  // Combine filters and pagination options
  const params = useMemo(
    () => ({
      ...filters,
      ...paginationOptions,
    }),
    [filters, paginationOptions]
  );

  return useApi(
    ListIncidents,
    params,
    debounceMs,
    "Error while fetching incidents"
  );
}

/**
 * Hook to fetch incidents GeoJSON data with filters and debounce
 * @param filters - Active filters
 * @param paginationOptions - Pagination options
 * @param debounceMs - Debounce delay in milliseconds (default: 300ms)
 */
export function useIncidentsGeoJSON(
  filters: Filters,
  paginationOptions: PaginationOptions = {},
  debounceMs: number = 300
): UseIncidentsGeoJSONResult {
  // Combine filters and pagination options
  const params = useMemo(
    () => ({
      ...filters,
      ...paginationOptions,
    }),
    [filters, paginationOptions]
  );

  return useApi(
    IncidentsGeoJSON,
    params,
    debounceMs,
    "Error while fetching GeoJSON data"
  );
}
