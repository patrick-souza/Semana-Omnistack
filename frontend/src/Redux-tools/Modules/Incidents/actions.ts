import FactoryAction from 'Util/FactoryAction';
import { IncidentActionsTypes, Incident } from './types';

export function StoreIncident(incident: Partial<Incident>) {
  return FactoryAction(IncidentActionsTypes.STORE, incident);
}
export function StoreIncidentSuccess(newIncident: Incident) {
  return FactoryAction(IncidentActionsTypes.STORE_SUCCESS, newIncident);
}
export function StoreIncidentError() {
  return FactoryAction(IncidentActionsTypes.STORE_ERROR);
}

export function IndexIncidents() {
  return FactoryAction(IncidentActionsTypes.INDEX);
}
export function IndexIncidentsSuccess(incidents: Incident[]) {
  return FactoryAction(IncidentActionsTypes.INDEX_SUCCESS, incidents);
}
export function IndexIncidentsError() {
  return FactoryAction(IncidentActionsTypes.INDEX_ERROR);
}

export function DeleteIncident(idToDelete: number) {
  return FactoryAction(IncidentActionsTypes.DELETE, idToDelete);
}
export function DeleteIncidentSuccess(idToDelete: number) {
  return FactoryAction(IncidentActionsTypes.DELETE_SUCCESS, idToDelete);
}
export function DeleteIncidentError() {
  return FactoryAction(IncidentActionsTypes.DELETE_ERROR);
}
