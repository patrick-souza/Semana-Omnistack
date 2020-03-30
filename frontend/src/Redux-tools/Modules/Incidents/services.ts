import api from 'Services/api';
import { Incident } from './types';

export function listIncidents() {
  return api.get('/profile');
}

export function createNewIncident(newIncident: Partial<Incident>) {
  return api.post('/incidents', newIncident);
}

export function deleteIncident(idToDelete: number) {
  return api.delete(`/incidents/${idToDelete}`);
}
