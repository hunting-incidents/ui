// Enum types based on database schema
export type IncidentType =
  | "MENACE"
  | "INJURY"
  | "DEATH"
  | "DESTRUCTION"
  | "OTHER";

export type IncidentTarget =
  | "HUNTER"
  | "HUMAN"
  | "PET"
  | "LIVESTOCK"
  | "PROTECTED_WILDLIFE"
  | "BUILDING"
  | "VEHICLE";

export type IncidentCause =
  | "UNKNOWN"
  | "ALCOHOL"
  | "DRUGS"
  | "OLD_AGE"
  | "INEXPERIENCE"
  | "SAFETY_RULES_VIOLATION"
  | "MISHANDLING"
  | "OTHER";

export type IncidentStatus =
  | "PENDING"
  | "VERIFIED"
  | "NOT_VERIFIABLE"
  | "REJECTED";

// Main incident data structure
export interface Incident {
  id: number;
  incident_type: IncidentType;
  incident_target: IncidentTarget;
  incident_cause: IncidentCause;
  date: string; // ISO date string
  town_id: number;
  title: string;
  description: string;
  created_at: string; // ISO date string
  updated_at: string | null; // ISO date string or null
  deleted_at: string | null; // ISO date string or null
  incident_status: IncidentStatus;
}

// Pagination structure
export interface PagingRequest {
  page_size?: number;
  order?: string;
  page?: number;
}

export interface PagingResponse<T> {
  total: number;
  page_size: number;
  page: number;
  data: T[];
}

export interface GeoRequest {
  geo_box?: string; // TODO: define a format for this
}

// Filter type for incident list queries
export interface IncidentFilterList extends PagingRequest, IncidentFilter {}

// Filter type for incident geojson queries
export interface IncidentFilterGeoJSON extends GeoRequest, IncidentFilter {}

// General filter type for incidents
export interface IncidentFilter {
  incident_type?: IncidentType;
  incident_target?: IncidentTarget;
  incident_cause?: IncidentCause;
  starting_date?: string; // ISO date string
  ending_date?: string; // ISO date string
  geo_box?: string; // TODO: define a format for this
  full_text_search?: string;
  status?: IncidentStatus;
}

export type IncidentListResponse = PagingResponse<Incident>;
