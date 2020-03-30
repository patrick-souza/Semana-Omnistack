import api from 'Services/api';

export function createSession(ongId: string): Promise<{ name: string }> {
  return api.post('/session', { id: ongId });
}
