import { Request, Response } from 'express';
import connection from 'App/database/connection';

class IncidentController {
  async index(request: Request, response: Response) {
    let { page = 1 } = request.query;

    if (!page) page = 1;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((parseFloat(page) - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  }
  async create(request: Request, response: Response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    const newIncident = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .where('incidents.id', id)
      .first();

    return response.json(newIncident);
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).send();
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
}

export default new IncidentController();
