export type IIncidentsState = {
  readonly indexIsLoading: boolean;
  readonly incidents: Incident[];
  readonly storeIsLoading: boolean;
};

export type Incident = {
  id: number;
  title: string;
  description: string;
  value: number;
  formatted_value: string;
  ong_id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
};

export const IncidentActionsTypes = {
  STORE: '@@incidents/STORE',
  STORE_SUCCESS: '@@incidents/STORE_SUCCESS',
  STORE_ERROR: '@@incidents/STORE_ERROR',
  INDEX: '@@incidents/INDEX',
  INDEX_SUCCESS: '@@incidents/INDEX_SUCCESS',
  INDEX_ERROR: '@@incidents/INDEX_ERROR',
  DELETE: '@@incidents/DELETE',
  DELETE_SUCCESS: '@@incidents/DELETE_SUCCESS',
  DELETE_ERROR: '@@incidents/DELETE_ERROR',
};

export const INITIAL_STATE: IIncidentsState = {
  indexIsLoading: false,
  incidents: [],
  storeIsLoading: false,
};
