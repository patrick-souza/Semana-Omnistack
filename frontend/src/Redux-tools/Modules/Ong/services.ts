import api from 'Services/api';
import { Ong } from '.';

export function createOng(newOng: Ong): Promise<{ name: string }> {
  return api.post('/ongs', newOng);
}
